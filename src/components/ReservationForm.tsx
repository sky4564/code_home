'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X, MapPin } from 'lucide-react';
import DaumPostcode from 'react-daum-postcode';

// 차량 데이터 타입
interface Vehicle {
  id: string;
  name: string;
  image: string;
  category: string;
}

// ReservationForm에서 사용할 간단한 차량 타입
interface SimpleVehicle {
  id: string;
  name: string;
  image: string;
  category: string;
}

// Zod 스키마 정의
const reservationSchema = z.object({
  vehicleId: z.string().min(1, '차량을 선택해주세요'),
  startDate: z.string().min(1, '대여 시작일을 선택해주세요'),
  startTime: z.string().min(1, '대여 시작 시간을 선택해주세요'),
  endDate: z.string().min(1, '반납일을 선택해주세요'),
  endTime: z.string().min(1, '반납 시간을 선택해주세요'),
  name: z.string().min(1, '이름을 입력해주세요'),
  phone: z.string().min(1, '연락처를 입력해주세요'),
  address: z.string().min(1, '주소를 입력해주세요'),
  useDelivery: z.boolean(),
  additionalDriver: z.boolean(),
  additionalName: z.string().optional(),
  additionalPhone: z.string().optional(),
}).refine((data) => {
  // 날짜 유효성 검사 - 시작일이 종료일보다 늦지 않아야 함
  const startDateTime = new Date(`${data.startDate}T${data.startTime}`);
  const endDateTime = new Date(`${data.endDate}T${data.endTime}`);
  return startDateTime < endDateTime;
}, {
  message: '반납일은 대여 시작일보다 늦어야 합니다',
  path: ['endDate']
}).refine((data) => {
  // 전화번호 형식 검증 (하이픈 포함/미포함 모두 허용)
  const phoneOnly = data.phone.replace(/[-\\s]/g, '');
  return phoneOnly.length === 11 && /^010\d{8}$/.test(phoneOnly);
}, {
  message: '전화번호는 010으로 시작하는 11자리 숫자로 입력해주세요 (하이픈 생략 가능)',
  path: ['phone']
}).refine((data) => {
  // 추가 운전자 정보 검증
  if (data.additionalDriver) {
    return data.additionalName && data.additionalName.trim().length > 0;
  }
  return true;
}, {
  message: '추가 운전자 이름을 입력해주세요',
  path: ['additionalName']
}).refine((data) => {
  // 추가 운전자 전화번호 검증
  if (data.additionalDriver) {
    if (data.additionalPhone) {
      const phoneOnly = data.additionalPhone.replace(/[-\\s]/g, '');
      return phoneOnly.length === 11 && /^010\d{8}$/.test(phoneOnly);
    }
    return false;
  }
  return true;
}, {
  message: '추가 운전자 전화번호를 올바른 형식으로 입력해주세요',
  path: ['additionalPhone']
}).refine((data) => {
  // 메인 전화번호와 추가 운전자 전화번호가 같지 않아야 함
  if (data.additionalDriver && data.additionalPhone) {
    const mainPhone = data.phone.replace(/[-\\s]/g, '');
    const additionalPhone = data.additionalPhone.replace(/[-\\s]/g, '');
    return mainPhone !== additionalPhone;
  }
  return true;
}, {
  message: '메인 운전자와 추가 운전자의 전화번호가 같을 수 없습니다',
  path: ['additionalPhone']
});

type ReservationFormData = z.infer<typeof reservationSchema>;

// 차량 목록 데이터
const vehicles: Vehicle[] = [
  { id: '2026_carnival', name: '2026 카니발', image: '/main_cars/2026_carnival.png', category: '밴' },
  { id: 'carnival_van', name: '카니발 밴', image: '/main_cars/carnival_van.png', category: '밴' },
  { id: 'staria_van', name: '스타리아 밴', image: '/main_cars/staria_van.png', category: '밴' },
  { id: 'starex_van', name: '스타렉스 밴', image: '/main_cars/starex_van.png', category: '밴' },
  { id: '2026_sorento', name: '2026 쏘렌토', image: '/main_cars/2026_sorento.png', category: 'SUV' },
  { id: 'sorento_suv', name: '쏘렌토 SUV', image: '/main_cars/sorento_suv.png', category: 'SUV' },
  { id: 'palisade_suv', name: '팰리세이드 SUV', image: '/main_cars/palisade_suv.png', category: 'SUV' },
  { id: 'santafe_tm_suv', name: '싼타페 TM SUV', image: '/main_cars/santafe_tm_suv.png', category: 'SUV' },
  { id: 'sportage_hybrid_suv', name: '스포티지 하이브리드 SUV', image: '/main_cars/sportage_hybrid_suv.png', category: 'SUV' },
  { id: 'avante_cn7_midsize', name: '아반떼 CN7 중형', image: '/main_cars/avante_cn7_midsize.png', category: '중형' },
  { id: 'k5_dl3_fullsize', name: 'K5 DL3 대형', image: '/main_cars/k5_dl3_fullsize.png', category: '대형' },
  { id: 'sonata_dn8_fullsize', name: '쏘나타 DN8 대형', image: '/main_cars/sonata_dn8_fullsize.png', category: '대형' },
  { id: 'morning_compact', name: '모닝 소형', image: '/main_cars/morning_compact.png', category: '소형' },
  { id: 'ray_compact', name: '레이 소형', image: '/main_cars/ray_compact.png', category: '소형' },
  { id: 'benz_e200_large', name: '벤츠 E200 대형', image: '/main_cars/benz_e200_large.png', category: '수입대형' },
  { id: 'genesis_g80_large', name: '제네시스 G80 대형', image: '/main_cars/genesis_g80_large.png', category: '대형' },
];

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVehicle?: SimpleVehicle | null;
}

export default function ReservationForm({ isOpen, onClose, selectedVehicle }: ReservationFormProps) {
  const searchParams = useSearchParams();
  const selectedVehicleId = searchParams.get('vehicle');
  const couponValue = searchParams.get('couponValue');
  const couponType = searchParams.get('couponType');
  const isCouponLocked = searchParams.get('locked') === 'true';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showAddressSearch, setShowAddressSearch] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      vehicleId: selectedVehicle?.id || selectedVehicleId || '',
      startDate: '',
      startTime: '09:00',
      endDate: '',
      endTime: '18:00',
      name: '',
      phone: '',
      address: '',
      useDelivery: false,
      additionalDriver: false,
      additionalName: '',
      additionalPhone: '',
    }
  });

  const watchStartDate = watch('startDate');
  const watchAdditionalDriver = watch('additionalDriver');

  // 선택된 차량 표시
  const foundSelectedVehicle = vehicles.find(v => v.id === watch('vehicleId')) || (selectedVehicle ? {
    id: selectedVehicle.id,
    name: selectedVehicle.name,
    image: selectedVehicle.image,
    category: selectedVehicle.category
  } : null);

  // 쿠폰 정보
  const coupon = couponValue && couponType ? {
    value: parseInt(couponValue),
    type: couponType,
    isLocked: isCouponLocked,
  } : undefined;

  // 대여 시작일이 변경되면 반납일을 자동으로 다음날로 설정
  useEffect(() => {
    if (watchStartDate) {
      const startDate = new Date(watchStartDate);
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + 1);
      setValue('endDate', nextDay.toISOString().split('T')[0]);
    }
  }, [watchStartDate, setValue]);

  // 전화번호 포맷팅 함수
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  // 최소 대여 시작일 계산 (오늘 + 1일)
  const getMinStartDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // 주소 검색 완료 핸들러
  const handleAddressComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    setValue('address', fullAddress);
    setShowAddressSearch(false);
  };

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          coupon: coupon
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send reservation');
      }
    } catch (error) {
      console.error('예약 전송 오류:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';

      if (errorMessage.includes('이메일 설정')) {
        alert('죄송합니다. 현재 시스템 점검 중입니다.\\n\\n직접 전화로 문의해주세요: 032-427-5500');
      } else {
        alert(`예약 접수 중 오류가 발생했습니다.\\n\\n오류 내용: ${errorMessage}\\n\\n계속 문제가 발생하면 직접 전화해주세요: 032-427-5500`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="text-green-600 text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">예약이 접수되었습니다!</h2>
          <p className="text-gray-600 mb-6">담당자가 빠른 시간 내에 연락드리겠습니다.</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 font-semibold">문의 전화: 032-427-5500</p>
            <p className="text-blue-600 text-sm mt-1">급하신 경우 직접 전화 주세요!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-gray-400 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="bg-blue-600 text-white px-6 py-4 -m-6 mb-6 rounded-t-2xl">
            <h1 className="text-2xl font-bold">차량 예약하기</h1>
            <p className="text-blue-100 mt-1">간편하고 빠른 예약으로 여행을 시작하세요</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 차량 선택 섹션 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">차량 선택</h2>

              {foundSelectedVehicle && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={foundSelectedVehicle.image}
                      alt={foundSelectedVehicle.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-blue-900">{foundSelectedVehicle.name}</h3>
                      <p className="text-blue-700">{foundSelectedVehicle.category}</p>
                      <p className="text-sm text-blue-600 mt-1">선택된 차량입니다</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="vehicleId" className="block text-sm font-medium text-gray-700 mb-2">
                  차종 선택
                </label>
                <select
                  id="vehicleId"
                  {...register('vehicleId')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">차량을 선택해주세요</option>
                  {vehicles.map(vehicle => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} ({vehicle.category})
                    </option>
                  ))}
                </select>
                {errors.vehicleId && <p className="text-red-500 text-sm mt-1">{errors.vehicleId.message}</p>}
              </div>
            </div>

            {/* 대여 기간 섹션 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">대여 기간</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    대여 시작일
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    {...register('startDate')}
                    min={getMinStartDate()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
                </div>

                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
                    대여 시작 시간
                  </label>
                  <select
                    id="startTime"
                    {...register('startTime')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                    반납일
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    {...register('endDate')}
                    min={watch('startDate') || getMinStartDate()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
                </div>

                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-2">
                    반납 시간
                  </label>
                  <select
                    id="endTime"
                    {...register('endTime')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <option key={hour} value={`${hour}:00`}>{hour}:00</option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* 개인 정보 섹션 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">개인 정보</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder="실명을 입력해주세요"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    placeholder="01012345678 또는 010-1234-5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  주소 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="address"
                    {...register('address')}
                    placeholder="상세 주소를 입력해주세요"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowAddressSearch(true)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    <MapPin className="w-4 h-4" />
                    주소 검색
                  </button>
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              {/* 운전자 추가 섹션 */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="additionalDriver"
                    {...register('additionalDriver')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="additionalDriver" className="ml-2 text-sm font-medium text-gray-700">
                    추가 운전자 등록
                  </label>
                </div>

                {watchAdditionalDriver && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 border-l-2 border-blue-200">
                    <div>
                      <label htmlFor="additionalName" className="block text-sm font-medium text-gray-700 mb-2">
                        추가 운전자 이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="additionalName"
                        {...register('additionalName')}
                        placeholder="실명을 입력해주세요"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.additionalName && <p className="text-red-500 text-sm mt-1">{errors.additionalName.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="additionalPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        추가 운전자 연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="additionalPhone"
                        {...register('additionalPhone')}
                        placeholder="01012345678 또는 010-1234-5678"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.additionalPhone && <p className="text-red-500 text-sm mt-1">{errors.additionalPhone.message}</p>}
                    </div>
                  </div>
                )}
              </div>

              {/* 쿠폰 정보 */}
              {coupon && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">적용 쿠폰</h3>
                  <div className={`p-4 rounded-lg border-2 ${coupon.isLocked ? 'bg-yellow-50 border-yellow-300' : 'bg-green-50 border-green-300'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🎉</span>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {coupon.type === 'discount_amount' ? `${coupon.value.toLocaleString()}원 할인` : `${coupon.value}% 할인`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {coupon.isLocked ? '룰렛 이벤트 당첨 쿠폰 (변경 불가)' : '적용된 쿠폰'}
                          </p>
                        </div>
                      </div>
                      {coupon.isLocked && (
                        <span className="px-2 py-1 text-xs font-bold text-yellow-700 bg-yellow-200 rounded-full">
                          🔒 잠금
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 딜리버리 옵션 */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">추가 옵션</h3>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="useDelivery"
                    {...register('useDelivery')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="useDelivery" className="ml-2 text-sm font-medium text-gray-700">
                    딜리버리 서비스 이용 (차량을 지정 장소로 배송해 드립니다)
                  </label>
                </div>
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className="pt-6 border-t">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '예약 접수 중...' : '예약하기'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Address Search Modal */}
      {showAddressSearch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl">
            {/* 닫기 버튼 */}
            <button
              onClick={() => setShowAddressSearch(false)}
              className="absolute top-4 right-4 z-50 p-2 text-gray-400 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">주소 검색</h3>
              <DaumPostcode
                onComplete={handleAddressComplete}
                className="w-full h-96"
                style={{
                  width: '100%',
                  height: '400px',
                  border: '1px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
