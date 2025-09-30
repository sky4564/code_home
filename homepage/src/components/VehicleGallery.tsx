'use client'

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  fullName: string;
}

const VehicleGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(15);

  // 차량 데이터 (파일명 기반으로 생성)
  const vehicles: Vehicle[] = [
    // 승합차 (Van)
    { id: 'carnival_van', name: '카니발', category: '승합차', image: '/main_cars/carnival_van.png', fullName: '기아 카니발' },
    { id: 'carnival_gen4_van', name: '카니발 4세대', category: '승합차', image: '/main_cars/carnival_gen4_van.png', fullName: '기아 카니발 4세대' },
    { id: 'carnival_black_van', name: '카니발 (블랙)', category: '승합차', image: '/main_cars/carnival_black_van.png', fullName: '기아 카니발 블랙' },
    { id: '2026_carnival', name: '2026 카니발', category: '승합차', image: '/main_cars/2026_carnival.png', fullName: '2026 기아 카니발' },
    { id: 'staria_van', name: '스타리아', category: '승합차', image: '/main_cars/staria_van.png', fullName: '현대 스타리아' },
    { id: 'starex_van', name: '스타렉스', category: '승합차', image: '/main_cars/starex_van.png', fullName: '현대 스타렉스' },
    { id: 'solati_van', name: '솔라티', category: '승합차', image: '/main_cars/solati_van.png', fullName: '현대 솔라티' },
    { id: 'solati2_van', name: '솔라티 2', category: '승합차', image: '/main_cars/solati2_van.png', fullName: '현대 솔라티 2' },

    // SUV
    { id: 'palisade_suv', name: '팰리세이드', category: 'SUV', image: '/main_cars/palisade_suv.png', fullName: '현대 팰리세이드' },
    { id: 'palisade_2026_suv', name: '2026 팰리세이드', category: 'SUV', image: '/main_cars/palisade_2026_suv.png', fullName: '2026 현대 팰리세이드' },
    { id: 'santafe_tm_suv', name: '싼타페 TM', category: 'SUV', image: '/main_cars/santafe_tm_suv.png', fullName: '현대 싼타페 TM' },
    { id: 'santafe_mx_suv', name: '싼타페 MX', category: 'SUV', image: '/main_cars/santafe_mx_suv.png', fullName: '현대 싼타페 MX' },
    { id: 'sorento_suv', name: '쏘렌토', category: 'SUV', image: '/main_cars/sorento_suv.png', fullName: '기아 쏘렌토' },
    { id: '2026_sorento', name: '2026 쏘렌토', category: 'SUV', image: '/main_cars/2026_sorento.png', fullName: '2026 기아 쏘렌토' },
    { id: 'sportage_hybrid_suv', name: '스포티지 하이브리드', category: 'SUV', image: '/main_cars/sportage_hybrid_suv.png', fullName: '기아 스포티지 하이브리드' },
    { id: 'mohave_master_suv', name: '모하비 마스터', category: 'SUV', image: '/main_cars/mohave_master_suv.png', fullName: '기아 모하비 마스터' },
    { id: 'venue_suv', name: '베뉴', category: 'SUV', image: '/main_cars/venue_suv.png', fullName: '현대 베뉴' },
    { id: 'qm6_suv', name: 'QM6', category: 'SUV', image: '/main_cars/qm6_suv.png', fullName: '르노삼성 QM6' },
    { id: 'gv80_suv', name: 'GV80', category: 'SUV', image: '/main_cars/gv80_suv.png', fullName: '제네시스 GV80' },

    // 대형
    { id: 'genesis_g90_large', name: 'G90', category: '대형', image: '/main_cars/genesis_g90_large.png', fullName: '제네시스 G90' },
    { id: 'genesis_g80_large', name: 'G80', category: '대형', image: '/main_cars/genesis_g80_large.png', fullName: '제네시스 G80' },
    { id: 'benz_s350_large', name: 'S350', category: '대형', image: '/main_cars/benz_s350_large.png', fullName: '벤츠 S350' },
    { id: 'benz_e250_large', name: 'E250', category: '대형', image: '/main_cars/benz_e250_large.png', fullName: '벤츠 E250' },
    { id: 'benz_e200_large', name: 'E200', category: '대형', image: '/main_cars/benz_e200_large.png', fullName: '벤츠 E200' },
    { id: 'benz_avantgarde_large', name: '아반가르드', category: '대형', image: '/main_cars/benz_avantgarde_large.png', fullName: '벤츠 아반가르드' },

    // 중대형
    { id: 'grandeur_ig_leblanc_midlarge', name: '그랜저 IG 르블랑', category: '중대형', image: '/main_cars/grandeur_ig_leblanc_midlarge.png', fullName: '현대 그랜저 IG 르블랑' },
    { id: 'grandeur_gn7_midlarge', name: '그랜저 GN7', category: '중대형', image: '/main_cars/grandeur_gn7_midlarge.png', fullName: '현대 그랜저 GN7' },

    // 준형
    { id: 'sonata_dn8_fullsize', name: '쏘나타 DN8', category: '준형', image: '/main_cars/sonata_dn8_fullsize.png', fullName: '현대 쏘나타 DN8' },
    { id: 'sonata_edge_2026_fullsize', name: '2026 쏘나타 엣지', category: '준형', image: '/main_cars/sonata_edge_2026_fullsize.png', fullName: '2026 현대 쏘나타 엣지' },
    { id: 'k5_dl3_fullsize', name: 'K5 DL3', category: '준형', image: '/main_cars/k5_dl3_fullsize.png', fullName: '기아 K5 DL3' },
    { id: 'k5_dl3_2026_fullsize', name: '2026 K5 DL3', category: '준형', image: '/main_cars/k5_dl3_2026_fullsize.png', fullName: '2026 기아 K5 DL3' },
    { id: 'sm6_fullsize', name: 'SM6', category: '준형', image: '/main_cars/sm6_fullsize.png', fullName: '르노삼성 SM6' },

    // 중형
    { id: 'avante_cn7_midsize', name: '아반떼 CN7', category: '중형', image: '/main_cars/avante_cn7_midsize.png', fullName: '현대 아반떼 CN7' },
    { id: 'avante_ad_midsize', name: '아반떼 AD', category: '중형', image: '/main_cars/avante_ad_midsize.png', fullName: '현대 아반떼 AD' },
    { id: 'k3_midsize', name: 'K3', category: '중형', image: '/main_cars/k3_midsize.png', fullName: '기아 K3' },

    // 경차
    { id: 'morning_compact', name: '모닝', category: '경차', image: '/main_cars/morning_compact.png', fullName: '기아 모닝' },
    { id: 'morning_black_compact', name: '모닝 (블랙)', category: '경차', image: '/main_cars/morning_black_compact.png', fullName: '기아 모닝 블랙' },
    { id: 'ray_compact', name: '레이', category: '경차', image: '/main_cars/ray_compact.png', fullName: '기아 레이' },
    { id: 'spark_compact', name: '스파크', category: '경차', image: '/main_cars/spark_compact.png', fullName: '쉐보레 스파크' },
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
    setVisibleCount(prev => prev + 15);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(15); // 카테고리 변경 시 다시 15개로 리셋
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
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {visibleVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.fullName}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {vehicle.name}
                </h3>
                <p className="mb-2 text-sm text-gray-600">{vehicle.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-blue-600">
                    예약 가능
                  </span>
                  <button className="px-3 py-1 text-xs text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700">
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
    </section>
  );
};

export default VehicleGallery;
