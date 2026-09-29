import React, { useState } from 'react';
import { FlaskConical, Microscope, Sparkles, Search, BookOpen } from 'lucide-react';

interface ReagentItem {
  name: string;
  targetGroup: string;
  principle: string;
  positiveResult: string;
  representativePlant: string;
  notes: string;
}

const reagentsList: ReagentItem[] = [
  {
    name: "Thuốc thử Dragendorff (KBiI4)",
    targetGroup: "Alkaloid",
    principle: "Muối bismuth kali iodid kết hợp với cation alkaloid tạo phức chất không tan.",
    positiveResult: "Kết tủa màu đỏ cam đến nâu đỏ gạch.",
    representativePlant: "Hoàng liên, Mã tiền, Sen, Bình vôi",
    notes: "Thực hiện trên môi trường acid nhẹ (HCl hoặc H2SO4 loãng)."
  },
  {
    name: "Thuốc thử Mayer (K2HgI4)",
    targetGroup: "Alkaloid",
    principle: "Thuốc thử tạo phức iodomercurat với alkaloid.",
    positiveResult: "Kết tủa màu trắng ngà hoặc vàng nhạt.",
    representativePlant: "Mã tiền, Cà độc dược, Bình vôi",
    notes: "Độ nhạy rất cao, dùng để sơ bộ phát hiện vết alkaloid."
  },
  {
    name: "Phản ứng Cyanidin (Phản ứng Shinoda)",
    targetGroup: "Flavonoid",
    principle: "Khử nhân pyron bằng hydro mới sinh từ bột kim loại Magnesi (Mg) hoặc Kẽm (Zn) trong môi trường acid HCl đậm đặc.",
    positiveResult: "Dung dịch chuyển sang màu đỏ cánh sen đến đỏ thẫm.",
    representativePlant: "Hòe hoa, Bạch quả, Kim ngân hoa",
    notes: "Dương tính rõ với Flavonol, Flavanon, Flavanonol; Flavon khó phản ứng hơn."
  },
  {
    name: "Phản ứng Liebermann - Burchard",
    targetGroup: "Saponin & Triterpenoid",
    principle: "Mất nước và ngưng tụ khung steroid hoặc triterpen trong hỗn hợp anhydrid acetic và acid sulfuric đậm đặc.",
    positiveResult: "Saponin triterpen cho màu hồng chuyển sang tím đỏ rồi xanh lá.",
    representativePlant: "Nhân sâm, Tam thất, Đinh lăng, Cam thảo",
    notes: "Ống nghiệm và hóa chất phải tuyệt đối khan nước để phản ứng không bị ức chế."
  },
  {
    name: "Phản ứng Bornträger",
    targetGroup: "Anthranoid (dạng tự do)",
    principle: "Các dẫn chất 1,8-dihydroxyanthraquinon tạo muối phenolat tan trong nước kiềm có màu đỏ tươi.",
    positiveResult: "Lớp nước kiềm (NH4OH hoặc NaOH) chuyển sang màu đỏ tươi hoặc hồng tím.",
    representativePlant: "Hà thủ ô đỏ, Muồng trâu, Phan tả diệp, Thảo quyết minh",
    notes: "Nếu là dạng kết hợp (glycosid), cần thủy phân bằng acid vô cơ trước khi kiềm hóa."
  },
  {
    name: "Phản ứng Vitali - Morin",
    targetGroup: "Alkaloid nhân Tropan",
    principle: "Nitro hóa nhân thơm của acid tropic bằng acid nitric bốc khói, sau đó kiềm hóa trong môi trường aceton.",
    positiveResult: "Xuất hiện màu tím hoa cà đậm, bền rồi chuyển dần sang đỏ và mất màu.",
    representativePlant: "Cà độc dược (Datura metel), Atropa belladonna",
    notes: "Phản ứng đặc hiệu cho atropin, scopolamin và hyoscyamin."
  },
  {
    name: "Phản ứng đóng / mở vòng Lacton",
    targetGroup: "Coumarin",
    principle: "Vòng lacton bền trong acid, khi gặp kiềm đun nóng bị thủy phân mở vòng tạo muối coumarinat tan trong nước. Khi acid hóa trở lại, vòng lacton đóng lại làm dung dịch đục.",
    positiveResult: "Trong kiềm: dung dịch trong suốt. Khi acid hóa: xuất hiện vẫn đục hoặc tủa trở lại.",
    representativePlant: "Bạch chỉ, Tiền hồ, Mù u",
    notes: "Kết hợp soi huỳnh quang tia tử ngoại UV 365nm cho ánh sáng xanh lam tăng cường độ."
  }
];

export const HerbariumGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('all');

  const filteredReagents = reagentsList.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.principle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.representativePlant.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGroup = filterGroup === 'all' || item.targetGroup.toLowerCase().includes(filterGroup.toLowerCase());
    return matchSearch && matchGroup;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <div className="pb-4 border-b border-stone-200">
        <h2 className="font-serif-display text-2xl font-bold text-stone-900">
          🔬 Sổ Tay Kiểm Nghiệm & Thuốc Thử Thực Hành Dược Liệu
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          Bảng tổng hợp nhanh các phản ứng định tính hóa học và chỉ tiêu kiểm nghiệm dược liệu quan trọng nhất.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên thuốc thử, cây thuốc..."
            className="w-full pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto text-xs">
          <button
            onClick={() => setFilterGroup('all')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              filterGroup === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setFilterGroup('Alkaloid')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              filterGroup === 'Alkaloid' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Alkaloid
          </button>
          <button
            onClick={() => setFilterGroup('Flavonoid')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              filterGroup === 'Flavonoid' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Flavonoid
          </button>
          <button
            onClick={() => setFilterGroup('Saponin')}
            className={`px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              filterGroup === 'Saponin' ? 'bg-stone-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            Saponin
          </button>
        </div>
      </div>

      {/* Reagent Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredReagents.map((item, idx) => (
          <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif-display text-base font-bold text-stone-900 flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-emerald-700" />
                {item.name}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                {item.targetGroup}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <div className="font-semibold text-stone-700">Nguyên tắc hóa học:</div>
                <p className="text-stone-600 leading-relaxed">{item.principle}</p>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200 space-y-1">
                <div className="font-semibold text-amber-900">Hiện tượng dương tính chuẩn:</div>
                <p className="text-amber-800 font-medium leading-relaxed">{item.positiveResult}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-2 border-t border-stone-100 text-stone-500">
              <div>
                <strong className="text-stone-700">Dược liệu áp dụng:</strong> {item.representativePlant}
              </div>
              <div className="italic text-stone-400">
                Lưu ý: {item.notes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
