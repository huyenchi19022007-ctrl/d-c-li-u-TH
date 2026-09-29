import React, { useState } from 'react';
import { Plant, PlantCategory } from '../types/pharmacognosy';
import { RotateCw, ChevronLeft, ChevronRight, Shuffle, Check, Eye, HelpCircle } from 'lucide-react';

interface FlashcardModeProps {
  plants: Plant[];
  onPlantLearned: (plantId: number) => void;
  learnedPlantIds: number[];
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  plants,
  onPlantLearned,
  learnedPlantIds
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory>('all');
  const [cardList, setCardList] = useState<Plant[]>(plants);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter handlers
  const handleCategoryChange = (cat: PlantCategory) => {
    setSelectedCategory(cat);
    const filtered = cat === 'all' ? plants : plants.filter(p => p.category === cat);
    setCardList(filtered);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffle = () => {
    const shuffled = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cardList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cardList.length) % cardList.length);
  };

  const currentPlant = cardList[currentIndex] || plants[0];
  const isLearned = currentPlant ? learnedPlantIds.includes(currentPlant.id) : false;

  const markLearnedAndNext = () => {
    if (currentPlant) {
      onPlantLearned(currentPlant.id);
    }
    handleNext();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <h2 className="font-serif-display text-2xl font-bold text-stone-900">
            🃏 Thẻ ghi nhớ Dược Liệu (Flashcards 3D)
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Nhấn vào thẻ hoặc nút "Lật thẻ" để đối chiếu tên khoa học, họ thực vật và hoạt chất chính.
          </p>
        </div>

        {/* Shuffle & Progress */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShuffle}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5 text-stone-600" />
            Trộn ngẫu nhiên
          </button>

          <div className="text-xs font-mono-code tabular-nums text-stone-600 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
            {currentIndex + 1} / {cardList.length}
          </div>
        </div>
      </div>

      {/* Segmented Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
        >
          Tất cả ({plants.length})
        </button>
        <button
          onClick={() => handleCategoryChange('saponin')}
          className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'saponin'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
        >
          Saponin
        </button>
        <button
          onClick={() => handleCategoryChange('alkaloid')}
          className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'alkaloid'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
        >
          Alkaloid
        </button>
        <button
          onClick={() => handleCategoryChange('flavonoid')}
          className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'flavonoid'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
        >
          Flavonoid
        </button>
        <button
          onClick={() => handleCategoryChange('essential_oil')}
          className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'essential_oil'
              ? 'bg-stone-900 text-white'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
        >
          Tinh dầu
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-emerald-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / cardList.length) * 100}%` }}
        />
      </div>

      {/* 3D Flashcard Container */}
      <div 
        className="perspective-1000 w-full min-h-[380px] sm:min-h-[420px] cursor-pointer select-none"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={`relative w-full h-full min-h-[380px] sm:min-h-[420px] transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl border border-stone-200 shadow-md p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-emerald-800 uppercase tracking-wider">
                {currentPlant.categoryName}
              </span>
              <span className="flex items-center gap-1 text-stone-400">
                <HelpCircle className="w-3.5 h-3.5" />
                Mặt trước (Câu hỏi)
              </span>
            </div>

            <div className="text-center my-auto py-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-stone-100 shadow-xs">
                <img 
                  src={currentPlant.image} 
                  alt={currentPlant.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                {currentPlant.name}
              </h3>
              
              <p className="text-stone-500 text-sm max-w-md mx-auto mb-4">
                Hãy nhớ lại: Tên khoa học? Họ thực vật? Bộ phận dùng & Hoạt chất chính?
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-600 font-medium">
                <RotateCw className="w-3 h-3 text-stone-500" />
                Nhấn vào đây để xem đáp án
              </div>
            </div>

            <div className="text-center text-xs text-stone-400">
              Dược liệu số {currentIndex + 1} trên {cardList.length}
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-stone-900 text-stone-100 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs border-b border-stone-800 pb-3">
              <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                {currentPlant.name} · {currentPlant.categoryName}
              </span>
              <span className="flex items-center gap-1 text-stone-400">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                Mặt sau (Đáp án dược khoa)
              </span>
            </div>

            <div className="space-y-4 my-auto py-3 text-left">
              <div>
                <span className="text-xs text-stone-400 block">Tên khoa học:</span>
                <span className="font-serif-display text-xl sm:text-2xl italic text-emerald-300 font-semibold">
                  {currentPlant.scientificName}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-800/80 rounded-lg border border-stone-700/60">
                  <div className="text-stone-400 font-medium mb-0.5">Họ thực vật:</div>
                  <div className="font-semibold text-stone-200">{currentPlant.family} ({currentPlant.vietnameseFamily})</div>
                </div>
                <div className="p-3 bg-stone-800/80 rounded-lg border border-stone-700/60">
                  <div className="text-stone-400 font-medium mb-0.5">Bộ phận dùng:</div>
                  <div className="font-semibold text-stone-200">{currentPlant.partUsed}</div>
                </div>
              </div>

              <div className="p-3 bg-stone-800/80 rounded-lg border border-stone-700/60 text-xs">
                <div className="text-stone-400 font-medium mb-1">Thành phần hóa học chính:</div>
                <div className="text-emerald-300 font-medium">
                  {currentPlant.chemicalConstituents.join(' · ')}
                </div>
              </div>

              <div className="text-xs text-stone-300 line-clamp-2">
                <strong className="text-stone-200">Công dụng nổi bật:</strong> {currentPlant.uses.join('; ')}
              </div>
            </div>

            <div className="text-center text-xs text-stone-400 pt-2 border-t border-stone-800">
              Nhấn để quay lại mặt trước
            </div>
          </div>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Trước
          </button>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" />
            {isFlipped ? 'Quay lại' : 'Lật thẻ'}
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
          >
            Tiếp theo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Rating Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-colors"
          >
            😓 Chưa nhớ (Ôn lại)
          </button>
          <button
            onClick={markLearnedAndNext}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
              isLearned
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            {isLearned ? 'Đã thuộc thẻ này' : '😊 Thuộc rồi'}
          </button>
        </div>
      </div>
    </div>
  );
};
