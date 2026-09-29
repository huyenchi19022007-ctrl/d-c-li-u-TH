import React from 'react';
import { Plant } from '../types/pharmacognosy';
import { X, Check, BookCheck, FlaskConical, Microscope, AlertTriangle, Sparkles } from 'lucide-react';

interface PlantModalProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
  isLearned: boolean;
  onToggleLearned: (plantId: number) => void;
}

export const PlantModal: React.FC<PlantModalProps> = ({
  plant,
  isOpen,
  onClose,
  isLearned,
  onToggleLearned
}) => {
  if (!isOpen || !plant) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-stone-100 rounded-t-2xl">
          <img 
            src={plant.image} 
            alt={plant.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                {plant.categoryName}
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold mt-1 text-white">
                {plant.name}
              </h2>
              <p className="italic text-stone-200 text-sm mt-0.5">
                {plant.scientificName}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Đóng"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Info bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
            <div className="space-y-0.5">
              <div className="text-stone-400 font-medium">Họ thực vật:</div>
              <div className="font-semibold text-stone-800">{plant.family} ({plant.vietnameseFamily})</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-stone-400 font-medium">Bộ phận dùng:</div>
              <div className="font-semibold text-stone-800">{plant.partUsed}</div>
            </div>
            <div>
              <button
                onClick={() => onToggleLearned(plant.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isLearned
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                {isLearned ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    Đã thuộc dược liệu này
                  </>
                ) : (
                  <>
                    <BookCheck className="w-3.5 h-3.5 text-stone-600" />
                    Đánh dấu đã học
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section: Thành phần hóa học */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800 uppercase tracking-wide">
              <FlaskConical className="w-4 h-4 text-emerald-700" />
              Thành phần hóa học chính
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {plant.chemicalConstituents.map((item, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-emerald-50 text-emerald-900 border border-emerald-200/70 rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Phản ứng định tính & Kiểm nghiệm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/60 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase">
                <Sparkles className="w-4 h-4 text-amber-700" />
                Phản ứng định tính đặc trưng
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {plant.qualitativeReaction}
              </p>
            </div>

            <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200/60 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-900 uppercase">
                <Microscope className="w-4 h-4 text-sky-700" />
                Đặc điểm vi học / Soi bột
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                {plant.microscopicFeatures}
              </p>
            </div>
          </div>

          {/* Section: Tác dụng & Công dụng */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-stone-900">
              Công dụng & Tác dụng dược lý:
            </div>
            <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside">
              {plant.uses.map((use, idx) => (
                <li key={idx} className="leading-relaxed">
                  {use}
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Y học cổ truyền */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
            <div className="font-semibold text-stone-900">Tính vị & Công năng y học cổ truyền:</div>
            <p className="leading-relaxed">{plant.traditionalUses}</p>
          </div>

          {/* Section: Chống chỉ định / Thận trọng */}
          <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200/70 text-xs text-rose-900 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-rose-800">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Thận trọng & Chống chỉ định quan trọng:
            </div>
            <p className="leading-relaxed text-rose-800/90">{plant.contraindications}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-stone-200 bg-stone-50 flex items-center justify-end rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Đóng bảng tra cứu
          </button>
        </div>
      </div>
    </div>
  );
};
