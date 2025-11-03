'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// 차량 데이터 타입
interface Vehicle {
  id: string;
  name: string;
  image: string;
  category: string;
}

// 예약 폼 데이터 타입
interface ReservationForm {
  vehicleId: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  name: string;
  phone: string;
  address: string;
  useDelivery: boolean;
  additionalDriver: boolean;
  additionalName: string;
  additionalPhone: string;
  coupon?: {
    value: number;
    type: string;
    isLocked: boolean;
  };
}

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

function ReservationPageContent() {
  const searchParams = useSearchParams();
  const selectedVehicleId = searchParams.get('vehicle');
  const couponValue = searchParams.get('couponValue');
  const couponType = searchParams.get('couponType');
  const isCouponLocked = searchParams.get('locked') === 'true';

  const [formData, setFormData] = useState<ReservationForm>({
    vehicleId: selectedVehicleId || '',
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
    coupon: couponValue && couponType ? {
      value: parseInt(couponValue),
      type: couponType,
      isLocked: isCouponLocked,
    } : undefined,
  });

  const [errors, setErrors] = useState<Partial<ReservationForm>>({});

  // 이전에 선택된 차량 표시
  useEffect(() => {
    if (selectedVehicleId) {
      setFormData(prev => ({ ...prev, vehicleId: selectedVehicleId }));
    }
  }, [selectedVehicleId]);

  // 전화번호 포맷팅 함수
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    let processedValue = value;

    // 전화번호 필드인 경우 포맷팅 적용
    if ((name === 'phone' || name === 'additionalPhone') && type !== 'checkbox') {
      processedValue = formatPhoneNumber(value);
    }

    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: type === 'checkbox' ? checked : processedValue,
      };

      // 대여 시작일이 변경되면 반납일을 자동으로 다음날로 설정
      if (name === 'startDate' && value) {
        const startDate = new Date(value);
        const nextDay = new Date(startDate);
        nextDay.setDate(startDate.getDate() + 1);
        newData.endDate = nextDay.toISOString().split('T')[0];
      }

      return newData;
    });

    // 에러 제거
    if (errors[name as keyof ReservationForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ReservationForm> = {};

    if (!formData.vehicleId) newErrors.vehicleId = '차량을 선택해주세요.';
    if (!formData.startDate) newErrors.startDate = '대여 시작일을 선택해주세요.';
    if (!formData.endDate) newErrors.endDate = '반납일을 선택해주세요.';

    // 날짜 유효성 검사
    if (formData.startDate && formData.endDate) {
      const startDateTime = new Date(`${formData.startDate}T${formData.startTime}`);
      const endDateTime = new Date(`${formData.endDate}T${formData.endTime}`);

      if (startDateTime >= endDateTime) {
        newErrors.endDate = '반납일은 대여 시작일보다 늦어야 합니다.';
      }
    }

    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.';
    if (!formData.address.trim()) newErrors.address = '주소를 입력해주세요.';

    if (formData.additionalDriver) {
      if (!formData.additionalName.trim()) newErrors.additionalName = '추가 운전자 이름을 입력해주세요.';
      if (!formData.additionalPhone.trim()) newErrors.additionalPhone = '추가 운전자 연락처를 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 오늘 날짜를 YYYY-MM-DD 형식으로 반환
  const getTodayDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // 최소 대여 시작일 계산 (오늘 + 1일)
  const getMinStartDate = (): string => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // 예약 처리 로직 (추후 구현)
    alert('예약이 접수되었습니다!\n\n' + JSON.stringify(formData, null, 2));
  };

  const selectedVehicle = vehicles.find(v => v.id === formData.vehicleId);

  return (
    <div className="py-8 min-h-screen bg-gray-50">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 text-white bg-blue-600">
            <h1 className="text-2xl font-bold">차량 예약하기</h1>
            <p className="mt-1 text-blue-100">간편하고 빠른 예약으로 여행을 시작하세요</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* 차량 선택 섹션 */}
            <div className="space-y-4">
              <h2 className="pb-2 text-xl font-semibold text-gray-900 border-b">차량 선택</h2>

              {selectedVehicle && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedVehicle.image}
                      alt={selectedVehicle.name}
                      className="object-cover w-20 h-20 rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-blue-900">{selectedVehicle.name}</h3>
                      <p className="text-blue-700">{selectedVehicle.category}</p>
                      <p className="mt-1 text-sm text-blue-600">이전에 선택하신 차량입니다</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="vehicleId" className="block mb-2 text-sm font-medium text-gray-700">
                  차종 선택
                </label>
                <select
                  id="vehicleId"
                  name="vehicleId"
                  value={formData.vehicleId}
                  onChange={handleInputChange}
                  className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">차량을 선택해주세요</option>
                  {vehicles.map(vehicle => (
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.name} ({vehicle.category})
                    </option>
                  ))}
                </select>
                {errors.vehicleId && <p className="mt-1 text-sm text-red-500">{errors.vehicleId}</p>}
              </div>
            </div>

            {/* 대여 기간 섹션 */}
            <div className="space-y-4">
              <h2 className="pb-2 text-xl font-semibold text-gray-900 border-b">대여 기간</h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-gray-700">
                    대여 시작일
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    min={getMinStartDate()}
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.startDate && <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>}
                </div>

                <div>
                  <label htmlFor="startTime" className="block mb-2 text-sm font-medium text-gray-700">
                    대여 시작 시간
                  </label>
                  <select
                    id="startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-gray-700">
                    반납일
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    min={formData.startDate || getMinStartDate()}
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.endDate && <p className="mt-1 text-sm text-red-500">{errors.endDate}</p>}
                </div>

                <div>
                  <label htmlFor="endTime" className="block mb-2 text-sm font-medium text-gray-700">
                    반납 시간
                  </label>
                  <select
                    id="endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <h2 className="pb-2 text-xl font-semibold text-gray-900 border-b">개인 정보</h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="실명을 입력해주세요"
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="010-1234-5678"
                    className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
                  주소
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="상세 주소를 입력해주세요"
                  className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
              </div>

              {/* 운전자 추가 섹션 */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="additionalDriver"
                    name="additionalDriver"
                    checked={formData.additionalDriver}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="additionalDriver" className="ml-2 text-sm font-medium text-gray-700">
                    추가 운전자 등록
                  </label>
                </div>

                {formData.additionalDriver && (
                  <div className="grid grid-cols-1 gap-4 pl-6 border-l-2 border-blue-200 md:grid-cols-2">
                    <div>
                      <label htmlFor="additionalName" className="block mb-2 text-sm font-medium text-gray-700">
                        추가 운전자 이름
                      </label>
                      <input
                        type="text"
                        id="additionalName"
                        name="additionalName"
                        value={formData.additionalName}
                        onChange={handleInputChange}
                        placeholder="실명을 입력해주세요"
                        className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.additionalName && <p className="mt-1 text-sm text-red-500">{errors.additionalName}</p>}
                    </div>

                    <div>
                      <label htmlFor="additionalPhone" className="block mb-2 text-sm font-medium text-gray-700">
                        추가 운전자 연락처
                      </label>
                      <input
                        type="tel"
                        id="additionalPhone"
                        name="additionalPhone"
                        value={formData.additionalPhone}
                        onChange={handleInputChange}
                        placeholder="010-1234-5678"
                        className="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {errors.additionalPhone && <p className="mt-1 text-sm text-red-500">{errors.additionalPhone}</p>}
                    </div>
                  </div>
                )}
              </div>

              {/* 쿠폰 정보 */}
              {formData.coupon && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">적용 쿠폰</h3>
                  <div className={`p-4 rounded-lg border-2 ${formData.coupon.isLocked ? 'bg-yellow-50 border-yellow-300' : 'bg-green-50 border-green-300'}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🎉</span>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {formData.coupon.type === 'discount_amount' ? `${formData.coupon.value.toLocaleString()}원 할인` : `${formData.coupon.value}% 할인`}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formData.coupon.isLocked ? '룰렛 이벤트 당첨 쿠폰 (변경 불가)' : '적용된 쿠폰'}
                          </p>
                        </div>
                      </div>
                      {formData.coupon.isLocked && (
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
                    name="useDelivery"
                    checked={formData.useDelivery}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
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
                className="px-4 py-3 w-full text-lg font-medium text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                예약하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { Suspense } from 'react';

export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-center">로딩 중...</div></div>}>
      <ReservationPageContent />
    </Suspense>
  );
}
