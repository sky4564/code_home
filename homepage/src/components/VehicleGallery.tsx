'use client'

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  fullName: string;
  brand: string;
  price: {
    daily: number;
    monthly: number;
  };
  specs: {
    engine: string;
    fuelType: string;
    transmission: string;
    passengers: number;
    luggage: number;
  };
  features: string[];
  description: string;
}

const VehicleGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6); // 모바일: 6개 (3줄 × 2열)
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 화면 크기에 따라 초기 visibleCount 설정
  useEffect(() => {
    const handleResize = () => {
      const initialCount = window.innerWidth < 640 ? 6 : 15;
      if (visibleCount === 6 || visibleCount === 15) {
        setVisibleCount(initialCount);
      }
    };

    // 초기 로드 시 설정
    handleResize();

    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 차량 데이터 (파일명 기반으로 생성)
  const vehicles: Vehicle[] = [
    // 승합차 (Van)
    {
      id: 'carnival_van',
      name: '카니발',
      category: '승합차',
      image: '/main_cars/carnival_van.png',
      fullName: '기아 카니발',
      brand: '기아',
      price: { daily: 120000, monthly: 2800000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 9, luggage: 4 },
      features: ['대용량 트렁크', '편안한 승차감', '다인승'],
      description: '가족 여행이나 단체 이동에 최적화된 대형 MPV 차량입니다.'
    },
    {
      id: 'carnival_gen4_van',
      name: '카니발 4세대',
      category: '승합차',
      image: '/main_cars/carnival_gen4_van.png',
      fullName: '기아 카니발 4세대',
      brand: '기아',
      price: { daily: 135000, monthly: 3200000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 9, luggage: 4 },
      features: ['최신 디자인', '안전 사양 강화', '편의 기능'],
      description: '기아의 최신 MPV 모델로 향상된 안전성과 편의성을 제공합니다.'
    },
    {
      id: 'carnival_black_van',
      name: '카니발 (블랙)',
      category: '승합차',
      image: '/main_cars/carnival_black_van.png',
      fullName: '기아 카니발 블랙',
      brand: '기아',
      price: { daily: 125000, monthly: 2900000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 9, luggage: 4 },
      features: ['블랙 컬러', '고급스러운 외관', '대용량 적재'],
      description: '블랙 색상의 고급스러운 카니발로 특별한 행사에 적합합니다.'
    },
    {
      id: '2026_carnival',
      name: '2026 카니발',
      category: '승합차',
      image: '/main_cars/2026_carnival.png',
      fullName: '2026 기아 카니발',
      brand: '기아',
      price: { daily: 140000, monthly: 3400000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 9, luggage: 4 },
      features: ['신형 모델', '첨단 기술', '연비 향상'],
      description: '2026년형 최신 카니발로 미래 지향적인 디자인과 기술을 탑재했습니다.'
    },
    {
      id: 'staria_van',
      name: '스타리아',
      category: '승합차',
      image: '/main_cars/staria_van.png',
      fullName: '현대 스타리아',
      brand: '현대',
      price: { daily: 130000, monthly: 3100000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 9, luggage: 4 },
      features: ['모던 디자인', '넓은 실내 공간', '편안한 승차감'],
      description: '현대의 새로운 MPV 모델로 혁신적인 디자인과 실용성을 겸비했습니다.'
    },
    {
      id: 'starex_van',
      name: '스타렉스',
      category: '승합차',
      image: '/main_cars/starex_van.png',
      fullName: '현대 스타렉스',
      brand: '현대',
      price: { daily: 115000, monthly: 2700000 },
      specs: { engine: '2.5L 디젤', fuelType: '디젤', transmission: '수동/자동', passengers: 9, luggage: 4 },
      features: ['견고한 내구성', '넓은 적재 공간', '다목적 사용'],
      description: '상업용으로 검증된 베테랑 MPV 차량입니다.'
    },
    {
      id: 'solati_van',
      name: '솔라티',
      category: '승합차',
      image: '/main_cars/solati_van.png',
      fullName: '현대 솔라티',
      brand: '현대',
      price: { daily: 110000, monthly: 2600000 },
      specs: { engine: '2.5L 디젤', fuelType: '디젤', transmission: '수동', passengers: 12, luggage: 3 },
      features: ['12인승', '상업용', '경제적인 연비'],
      description: '상업용으로 특화된 12인승 밴 차량입니다.'
    },
    {
      id: 'solati2_van',
      name: '솔라티 2',
      category: '승합차',
      image: '/main_cars/solati2_van.png',
      fullName: '현대 솔라티 2',
      brand: '현대',
      price: { daily: 112000, monthly: 2650000 },
      specs: { engine: '2.5L 디젤', fuelType: '디젤', transmission: '수동', passengers: 12, luggage: 3 },
      features: ['개선된 모델', '안전 강화', '편의 사양'],
      description: '개선된 솔라티 모델로 더 나은 안전성과 편의성을 제공합니다.'
    },

    // SUV
    {
      id: 'palisade_suv',
      name: '팰리세이드',
      category: 'SUV',
      image: '/main_cars/palisade_suv.png',
      fullName: '현대 팰리세이드',
      brand: '현대',
      price: { daily: 150000, monthly: 3600000 },
      specs: { engine: '3.8L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 7, luggage: 3 },
      features: ['대형 SUV', '3열 시트', '고급 인테리어'],
      description: '현대의 플래그십 SUV로 넓은 실내 공간과 강력한 주행 성능을 제공합니다.'
    },
    {
      id: 'palisade_2026_suv',
      name: '2026 팰리세이드',
      category: 'SUV',
      image: '/main_cars/palisade_2026_suv.png',
      fullName: '2026 현대 팰리세이드',
      brand: '현대',
      price: { daily: 165000, monthly: 3900000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 7, luggage: 3 },
      features: ['신형 모델', '첨단 안전', '연비 향상'],
      description: '2026년형 팰리세이드로 미래 기술과 디자인을 탑재한 프리미엄 SUV입니다.'
    },
    {
      id: 'santafe_tm_suv',
      name: '싼타페 TM',
      category: 'SUV',
      image: '/main_cars/santafe_tm_suv.png',
      fullName: '현대 싼타페 TM',
      brand: '현대',
      price: { daily: 130000, monthly: 3100000 },
      specs: { engine: '2.2L 디젤', fuelType: '디젤', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['중형 SUV', '디젤 엔진', '실용성'],
      description: '가족용으로 인기 있는 중형 SUV로 균형 잡힌 성능을 제공합니다.'
    },
    {
      id: 'santafe_mx_suv',
      name: '싼타페 MX',
      category: 'SUV',
      image: '/main_cars/santafe_mx_suv.png',
      fullName: '현대 싼타페 MX',
      brand: '현대',
      price: { daily: 135000, monthly: 3200000 },
      specs: { engine: '2.2L 디젤', fuelType: '디젤', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['MX 모델', '고급 트림', '편의 사양'],
      description: '싼타페의 고급 모델로 더 나은 편의성과 안전성을 제공합니다.'
    },
    {
      id: 'sorento_suv',
      name: '쏘렌토',
      category: 'SUV',
      image: '/main_cars/sorento_suv.png',
      fullName: '기아 쏘렌토',
      brand: '기아',
      price: { daily: 140000, monthly: 3300000 },
      specs: { engine: '2.2L 디젤', fuelType: '디젤', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['중형 SUV', '다이내믹 디자인', '주행 성능'],
      description: '기아의 대표 중형 SUV로 스포티한 디자인과 실용성을 겸비했습니다.'
    },
    {
      id: '2026_sorento',
      name: '2026 쏘렌토',
      category: 'SUV',
      image: '/main_cars/2026_sorento.png',
      fullName: '2026 기아 쏘렌토',
      brand: '기아',
      price: { daily: 155000, monthly: 3700000 },
      specs: { engine: '2.2L 디젤', fuelType: '디젤', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['신형 모델', '첨단 기술', '연비 향상'],
      description: '2026년형 쏘렌토로 혁신적인 기술과 디자인을 적용한 프리미엄 SUV입니다.'
    },
    {
      id: 'sportage_hybrid_suv',
      name: '스포티지 하이브리드',
      category: 'SUV',
      image: '/main_cars/sportage_hybrid_suv.png',
      fullName: '기아 스포티지 하이브리드',
      brand: '기아',
      price: { daily: 125000, monthly: 3000000 },
      specs: { engine: '1.6L 하이브리드', fuelType: '하이브리드', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['하이브리드', '경제적 연비', '환경 친화'],
      description: '환경을 생각한 하이브리드 SUV로 우수한 연비와 주행 성능을 제공합니다.'
    },
    {
      id: 'mohave_master_suv',
      name: '모하비 마스터',
      category: 'SUV',
      image: '/main_cars/mohave_master_suv.png',
      fullName: '기아 모하비 마스터',
      brand: '기아',
      price: { daily: 160000, monthly: 3800000 },
      specs: { engine: '3.0L 디젤', fuelType: '디젤', transmission: '자동', passengers: 7, luggage: 3 },
      features: ['대형 SUV', '오프로드 성능', '럭셔리'],
      description: '기아의 플래그십 SUV로 강력한 오프로드 성능과 럭셔리함을 겸비했습니다.'
    },
    {
      id: 'venue_suv',
      name: '베뉴',
      category: 'SUV',
      image: '/main_cars/venue_suv.png',
      fullName: '현대 베뉴',
      brand: '현대',
      price: { daily: 95000, monthly: 2300000 },
      specs: { engine: '1.6L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['소형 SUV', '도심 주행', '경제성'],
      description: '도심 주행에 최적화된 소형 SUV로 실용성과 경제성을 겸비했습니다.'
    },
    {
      id: 'qm6_suv',
      name: 'QM6',
      category: 'SUV',
      image: '/main_cars/qm6_suv.png',
      fullName: '르노삼성 QM6',
      brand: '르노삼성',
      price: { daily: 115000, monthly: 2700000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['중형 SUV', '넓은 실내', '편안함'],
      description: '르노삼성의 대표 SUV로 넓은 실내 공간과 편안한 승차감을 제공합니다.'
    },
    {
      id: 'gv80_suv',
      name: 'GV80',
      category: 'SUV',
      image: '/main_cars/gv80_suv.png',
      fullName: '제네시스 GV80',
      brand: '제네시스',
      price: { daily: 200000, monthly: 4800000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['럭셔리 SUV', '프리미엄 브랜드', '고급 사양'],
      description: '제네시스의 첫 SUV로 럭셔리 브랜드의 품격과 성능을 모두 갖추었습니다.'
    },

    // 대형
    {
      id: 'genesis_g90_large',
      name: 'G90',
      category: '대형',
      image: '/main_cars/genesis_g90_large.png',
      fullName: '제네시스 G90',
      brand: '제네시스',
      price: { daily: 250000, monthly: 6000000 },
      specs: { engine: '3.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['플래그십 세단', '최고급 사양', '편안함'],
      description: '제네시스의 플래그십 세단으로 최고급 럭셔리와 성능을 제공합니다.'
    },
    {
      id: 'genesis_g80_large',
      name: 'G80',
      category: '대형',
      image: '/main_cars/genesis_g80_large.png',
      fullName: '제네시스 G80',
      brand: '제네시스',
      price: { daily: 180000, monthly: 4300000 },
      specs: { engine: '2.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['럭셔리 세단', '다이내믹 디자인', '첨단 기술'],
      description: '제네시스의 대표 럭셔리 세단으로 우아한 디자인과 성능을 겸비했습니다.'
    },
    {
      id: 'benz_s350_large',
      name: 'S350',
      category: '대형',
      image: '/main_cars/benz_s350_large.png',
      fullName: '벤츠 S350',
      brand: '벤츠',
      price: { daily: 300000, monthly: 7200000 },
      specs: { engine: '3.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['벤츠 S클래스', '최고급 럭셔리', '편안함'],
      description: '벤츠의 플래그십 모델로 세계 최고 수준의 럭셔리와 기술을 제공합니다.'
    },
    {
      id: 'benz_e250_large',
      name: 'E250',
      category: '대형',
      image: '/main_cars/benz_e250_large.png',
      fullName: '벤츠 E250',
      brand: '벤츠',
      price: { daily: 220000, monthly: 5300000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['벤츠 E클래스', '비즈니스 세단', '편안함'],
      description: '벤츠의 대표 비즈니스 세단으로 우아함과 실용성을 겸비했습니다.'
    },
    {
      id: 'benz_e200_large',
      name: 'E200',
      category: '대형',
      image: '/main_cars/benz_e200_large.png',
      fullName: '벤츠 E200',
      brand: '벤츠',
      price: { daily: 210000, monthly: 5000000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['벤츠 E클래스', '고급 세단', '안전성'],
      description: 'E클래스의 기본 모델로 벤츠의 전통적인 품격과 성능을 제공합니다.'
    },
    {
      id: 'benz_avantgarde_large',
      name: '아반가르드',
      category: '대형',
      image: '/main_cars/benz_avantgarde_large.png',
      fullName: '벤츠 아반가르드',
      brand: '벤츠',
      price: { daily: 280000, monthly: 6700000 },
      specs: { engine: '3.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['아반가르드 라인', '스포티 디자인', '고성능'],
      description: '벤츠의 스포티한 고급 모델로 다이내믹한 주행 성능을 제공합니다.'
    },

    // 중대형
    {
      id: 'grandeur_ig_leblanc_midlarge',
      name: '그랜저 IG 르블랑',
      category: '중대형',
      image: '/main_cars/grandeur_ig_leblanc_midlarge.png',
      fullName: '현대 그랜저 IG 르블랑',
      brand: '현대',
      price: { daily: 170000, monthly: 4100000 },
      specs: { engine: '3.3L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['그랜저 IG', '르블랑 에디션', '고급 트림'],
      description: '그랜저 IG의 최고급 모델로 럭셔리함과 편안함을 극대화했습니다.'
    },
    {
      id: 'grandeur_gn7_midlarge',
      name: '그랜저 GN7',
      category: '중대형',
      image: '/main_cars/grandeur_gn7_midlarge.png',
      fullName: '현대 그랜저 GN7',
      brand: '현대',
      price: { daily: 160000, monthly: 3800000 },
      specs: { engine: '2.5L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['신형 그랜저', '현대적 디자인', '첨단 기술'],
      description: '현대의 신형 그랜저로 혁신적인 디자인과 첨단 기술을 탑재했습니다.'
    },

    // 준형
    {
      id: 'sonata_dn8_fullsize',
      name: '쏘나타 DN8',
      category: '준형',
      image: '/main_cars/sonata_dn8_fullsize.png',
      fullName: '현대 쏘나타 DN8',
      brand: '현대',
      price: { daily: 120000, monthly: 2900000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['준형 세단', '실용성', '경제성'],
      description: '가장 인기 있는 준형 세단으로 실용성과 경제성을 겸비했습니다.'
    },
    {
      id: 'sonata_edge_2026_fullsize',
      name: '2026 쏘나타 엣지',
      category: '준형',
      image: '/main_cars/sonata_edge_2026_fullsize.png',
      fullName: '2026 현대 쏘나타 엣지',
      brand: '현대',
      price: { daily: 135000, monthly: 3200000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['신형 모델', '스포티 디자인', '첨단 사양'],
      description: '2026년형 쏘나타 엣지로 스포티한 디자인과 향상된 성능을 제공합니다.'
    },
    {
      id: 'k5_dl3_fullsize',
      name: 'K5 DL3',
      category: '준형',
      image: '/main_cars/k5_dl3_fullsize.png',
      fullName: '기아 K5 DL3',
      brand: '기아',
      price: { daily: 125000, monthly: 3000000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['기아 K5', '모던 디자인', '편의성'],
      description: '기아의 대표 준형 세단으로 모던한 디자인과 실용성을 제공합니다.'
    },
    {
      id: 'k5_dl3_2026_fullsize',
      name: '2026 K5 DL3',
      category: '준형',
      image: '/main_cars/k5_dl3_2026_fullsize.png',
      fullName: '2026 기아 K5 DL3',
      brand: '기아',
      price: { daily: 140000, monthly: 3300000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['신형 K5', '첨단 기술', '연비 향상'],
      description: '2026년형 K5로 미래 지향적인 디자인과 기술을 탑재했습니다.'
    },
    {
      id: 'sm6_fullsize',
      name: 'SM6',
      category: '준형',
      image: '/main_cars/sm6_fullsize.png',
      fullName: '르노삼성 SM6',
      brand: '르노삼성',
      price: { daily: 115000, monthly: 2700000 },
      specs: { engine: '2.0L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['프리미엄 세단', '유럽 디자인', '편안함'],
      description: '르노삼성의 프리미엄 세단으로 유럽적인 디자인과 승차감을 제공합니다.'
    },

    // 중형
    {
      id: 'avante_cn7_midsize',
      name: '아반떼 CN7',
      category: '중형',
      image: '/main_cars/avante_cn7_midsize.png',
      fullName: '현대 아반떼 CN7',
      brand: '현대',
      price: { daily: 100000, monthly: 2400000 },
      specs: { engine: '1.6L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['중형 세단', '스포티 디자인', '주행 성능'],
      description: '현대의 대표 중형 세단으로 스포티한 주행 성능과 실용성을 제공합니다.'
    },
    {
      id: 'avante_ad_midsize',
      name: '아반떼 AD',
      category: '중형',
      image: '/main_cars/avante_ad_midsize.png',
      fullName: '현대 아반떼 AD',
      brand: '현대',
      price: { daily: 95000, monthly: 2300000 },
      specs: { engine: '1.6L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['기존 모델', '신뢰성', '경제성'],
      description: '검증된 아반떼 AD 모델로 안정적인 성능과 경제성을 제공합니다.'
    },
    {
      id: 'k3_midsize',
      name: 'K3',
      category: '중형',
      image: '/main_cars/k3_midsize.png',
      fullName: '기아 K3',
      brand: '기아',
      price: { daily: 95000, monthly: 2300000 },
      specs: { engine: '1.6L 가솔린', fuelType: '가솔린', transmission: '자동', passengers: 5, luggage: 2 },
      features: ['중형 세단', '젊은 디자인', '다이내믹'],
      description: '기아의 중형 세단으로 젊은 감각의 디자인과 다이내믹한 주행을 제공합니다.'
    },

    // 경차
    {
      id: 'morning_compact',
      name: '모닝',
      category: '경차',
      image: '/main_cars/morning_compact.png',
      fullName: '기아 모닝',
      brand: '기아',
      price: { daily: 60000, monthly: 1400000 },
      specs: { engine: '1.0L 가솔린', fuelType: '가솔린', transmission: '수동/자동', passengers: 5, luggage: 1 },
      features: ['경차', '도심 주행', '경제적 연비'],
      description: '도심 주행에 최적화된 경차로 뛰어난 연비와 기동성을 제공합니다.'
    },
    {
      id: 'morning_black_compact',
      name: '모닝 (블랙)',
      category: '경차',
      image: '/main_cars/morning_black_compact.png',
      fullName: '기아 모닝 블랙',
      brand: '기아',
      price: { daily: 65000, monthly: 1500000 },
      specs: { engine: '1.0L 가솔린', fuelType: '가솔린', transmission: '수동/자동', passengers: 5, luggage: 1 },
      features: ['블랙 컬러', '고급 외관', '도심 주행'],
      description: '블랙 색상의 모닝으로 세련된 외관과 경제적인 주행을 제공합니다.'
    },
    {
      id: 'ray_compact',
      name: '레이',
      category: '경차',
      image: '/main_cars/ray_compact.png',
      fullName: '기아 레이',
      brand: '기아',
      price: { daily: 55000, monthly: 1300000 },
      specs: { engine: '1.0L 가솔린', fuelType: '가솔린', transmission: '수동/자동', passengers: 4, luggage: 1 },
      features: ['소형 MPV', '실용성', '가성비'],
      description: '기아의 소형 MPV 경차로 실용성과 경제성을 겸비한 모델입니다.'
    },
    {
      id: 'spark_compact',
      name: '스파크',
      category: '경차',
      image: '/main_cars/spark_compact.png',
      fullName: '쉐보레 스파크',
      brand: '쉐보레',
      price: { daily: 55000, monthly: 1300000 },
      specs: { engine: '1.0L 가솔린', fuelType: '가솔린', transmission: '수동/자동', passengers: 5, luggage: 1 },
      features: ['해치백', '젊은 디자인', '경제성'],
      description: '쉐보레의 경차로 젊은 감각의 디자인과 경제적인 운행을 제공합니다.'
    },
  ];

  // 카테고리 목록
  const categories = ['All', '승합차', 'SUV', '대형', '중대형', '준형', '중형', '경차'];

  // 필터링된 차량 목록
  const filteredVehicles = useMemo(() => {
    if (selectedCategory === 'All') {
      return vehicles;
    }
    return vehicles.filter(vehicle => vehicle.category === selectedCategory);
  }, [selectedCategory, vehicles]);

  // 현재 보여줄 차량들
  const visibleVehicles = filteredVehicles.slice(0, visibleCount);

  const handleLoadMore = () => {
    // 모바일: +6개, 데스크톱: +15개
    const increment = window.innerWidth < 640 ? 6 : 15;
    setVisibleCount(prev => prev + increment);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // 모바일: 6개, 데스크톱: 15개
    const initialCount = window.innerWidth < 640 ? 6 : 15;
    setVisibleCount(initialCount);
  };

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  };

  // Vehicle Detail Modal
  const VehicleModal = () => {
    if (!selectedVehicle) return null;

    return (
      <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50" onClick={handleCloseModal}>
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 p-2 text-gray-400 transition-colors hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Vehicle Image */}
            <div className="p-6">
              <div className="max-h-[60vh] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedVehicle.image}
                  alt={selectedVehicle.fullName}
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 mb-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                  {selectedVehicle.brand}
                </span>
                <h2 className="mb-2 text-2xl font-bold text-gray-900">{selectedVehicle.fullName}</h2>
                <p className="text-gray-600">{selectedVehicle.category}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">렌터카 요금</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">일일 요금</p>
                    <p className="text-lg font-bold text-blue-600">
                      {selectedVehicle.price.daily.toLocaleString()}원
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">월간 요금</p>
                    <p className="text-lg font-bold text-blue-600">
                      {selectedVehicle.price.monthly.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">차량 스펙</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">엔진</p>
                    <p className="font-medium">{selectedVehicle.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">연료</p>
                    <p className="font-medium">{selectedVehicle.specs.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">변속기</p>
                    <p className="font-medium">{selectedVehicle.specs.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">승차 인원</p>
                    <p className="font-medium">{selectedVehicle.specs.passengers}명</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">수하물</p>
                    <p className="font-medium">{selectedVehicle.specs.luggage}개</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">주요 특징</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">차량 설명</h3>
                <p className="leading-relaxed text-gray-700">{selectedVehicle.description}</p>
              </div>

              {/* Action Button */}
              <div className="flex gap-3">
                <button className="flex-1 px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                  예약하기
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 font-semibold text-gray-700 rounded-lg border border-gray-300 transition-colors hover:bg-gray-50"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            차량 갤러리
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            다양한 종류의 렌터카를 만나보세요. 경차부터 대형차, SUV까지 모든 차량을 준비했습니다.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-2 gap-3 mb-12 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {visibleVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => handleVehicleClick(vehicle)}
              className="overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.fullName}
                  fill
                  className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="p-2 sm:p-3 md:p-4">
                <h3 className="mb-1 text-sm sm:text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {vehicle.name}
                </h3>
                <p className="mb-2 text-xs sm:text-sm text-gray-600">{vehicle.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] sm:text-xs font-medium text-blue-600">
                    예약 가능
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVehicleClick(vehicle);
                    }}
                    className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700"
                  >
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredVehicles.length && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="flex gap-2 items-center px-8 py-3 mx-auto font-semibold text-white bg-blue-600 rounded-lg transition-colors duration-200 hover:bg-blue-700"
            >
              더보기 ({filteredVehicles.length - visibleCount}개 남음)
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            총 <span className="font-bold text-blue-600">{filteredVehicles.length}</span>대의 차량이 있습니다.
            {selectedCategory !== 'All' && (
              <span className="ml-2">
                ({selectedCategory} 카테고리)
              </span>
            )}
          </p>
        </div>

      </div>

      {/* Vehicle Detail Modal */}
      {isModalOpen && <VehicleModal />}
    </section>
  );
};

export default VehicleGallery;
