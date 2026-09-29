import { QuizQuestion } from '../types/pharmacognosy';

export const quizQuestionsDB: QuizQuestion[] = [
  {
    id: 1,
    question: "Bộ phận dùng chính của cây Hòe (Styphnolobium japonicum / Sophora japonica) để thu được hàm lượng Rutin cao nhất là gì?",
    options: [
      { key: "A", text: "Vỏ thân cây già" },
      { key: "B", text: "Nụ hoa chưa nở (Hòe hoa / Hòe mễ)" },
      { key: "C", text: "Lá bánh tẻ" },
      { key: "D", text: "Quả chín phơi khô (Hòe giác)" }
    ],
    correctAnswer: "B",
    explanation: "Nụ hoa hòe chưa nở chứa hàm lượng Rutin cao nhất (đạt từ 20-30% trọng lượng khô). Khi hoa đã nở bung, hàm lượng Rutin giảm sút rõ rệt do bị thủy phân thành Quercetin.",
    topic: "Dược liệu chứa Flavonoid"
  },
  {
    id: 2,
    question: "Hoạt chất Berberin trong thân rễ Hoàng liên (Coptis chinensis Franch.) thuộc nhóm cấu trúc hóa học nào?",
    options: [
      { key: "A", text: "Alkaloid nhân Tropan" },
      { key: "B", text: "Alkaloid dẫn xuất Isoquinolin bậc 4" },
      { key: "C", text: "Alkaloid nhân Indol" },
      { key: "D", text: "Saponin triterpenoid" }
    ],
    correctAnswer: "B",
    explanation: "Berberin là một alkaloid có cấu trúc Protoberberin (dẫn xuất nhân Isoquinolin có nitơ bậc 4 mang điện tích dương), tan được trong nước nóng và cồn, cho tủa vàng đặc trưng với acid nitric.",
    topic: "Dược liệu chứa Alkaloid"
  },
  {
    id: 3,
    question: "Phản ứng hóa học đặc trưng nào dùng để định tính khung Flavonoid (cho màu đỏ cánh sen với Mg và HCl đậm đặc)?",
    options: [
      { key: "A", text: "Phản ứng Bornträger" },
      { key: "B", text: "Phản ứng Cyanidin (Shinoda test)" },
      { key: "C", text: "Phản ứng Vitali - Morin" },
      { key: "D", text: "Phản ứng Liebermann - Burchard" }
    ],
    correctAnswer: "B",
    explanation: "Phản ứng Cyanidin (phản ứng khử Shinoda): Nhờ bột kim loại Magnesi hoặc Kẽm trong môi trường acid clohydric (HCl) đậm đặc, nhân pyron của flavonoid bị khử tạo thành dẫn xuất muối anthocyanidin có màu đỏ cánh sen đến đỏ thẫm.",
    topic: "Kiểm nghiệm Hóa học"
  },
  {
    id: 4,
    question: "Để kiểm nghiệm nhận biết Saponin trong dược liệu, tính chất vật lý đặc trưng nổi bật nhất là gì?",
    options: [
      { key: "A", text: "Tạo tinh thể hình kim khi đun nóng bốc khói" },
      { key: "B", text: "Khả năng làm giảm sức căng bề mặt và tạo bọt bền khi lắc với nước" },
      { key: "C", text: "Phát huỳnh quang màu xanh sáng dưới đèn tử ngoại UV 254nm" },
      { key: "D", text: "Mùi thơm hắc và bay hơi hoàn toàn ở nhiệt độ phòng" }
    ],
    correctAnswer: "B",
    explanation: "Saponin có cấu trúc lưỡng ái (phần aglycon kỵ nước và phần đường ưa nước), có khả năng làm giảm sức căng bề mặt chất lỏng rất mạnh, tạo nên lớp bọt dày và bền như xà phòng khi lắc mạnh trong dung dịch nước.",
    topic: "Dược liệu chứa Saponin"
  },
  {
    id: 5,
    question: "Cây Tam thất (Panax notoginseng) và Nhân sâm (Panax ginseng) đều cùng thuộc họ thực vật nào sau đây?",
    options: [
      { key: "A", text: "Họ Hoa tán (Apiaceae)" },
      { key: "B", text: "Họ Gừng (Zingiberaceae)" },
      { key: "C", text: "Họ Cuồng / Ngũ gia bì (Araliaceae)" },
      { key: "D", text: "Họ Cà phê (Rubiaceae)" }
    ],
    correctAnswer: "C",
    explanation: "Cả Nhân sâm, Tam thất, Đinh lăng và Ngũ gia bì gai đều thuộc chi Panax hoặc Polyscias trong họ Cuồng (Araliaceae).",
    topic: "Phân loại thực vật"
  },
  {
    id: 6,
    question: "Hoạt chất Strychnin trong hạt Mã tiền có tác dụng dược lý chính lên hệ cơ quan nào?",
    options: [
      { key: "A", text: "Gây tê liệt thần kinh vận động ngoại biên" },
      { key: "B", text: "Kích thích chọn lọc tủy sống, tăng phản xạ thần kinh và trương lực cơ" },
      { key: "C", text: "Ức chế trung tâm hô hấp ở hành não gây buồn ngủ sâu" },
      { key: "D", text: "Làm giãn toàn bộ cơ trơn phế quản và mạch máu" }
    ],
    correctAnswer: "B",
    explanation: "Strychnin là chất đối vận cạnh tranh tại thụ thể Glycin ở tủy sống. Ở liều điều trị nhỏ, nó kích thích tủy sống, làm tăng phản xạ thần kinh và trương lực cơ; ở liều độc sẽ gây co giật uốn ván kiểu co cứng toàn thân.",
    topic: "Tác dụng Dược lý"
  },
  {
    id: 7,
    question: "Phản ứng Vitali-Morin (cho màu tím hoa cà đậm với acid nitric bốc khói và KOH/cồn) dùng để định tính nhóm alkaloid nào?",
    options: [
      { key: "A", text: "Alkaloid nhân Tropan (Scopolamin, Atropin, Hyoscyamin)" },
      { key: "B", text: "Alkaloid nhân Isoquinolin (Berberin, Palmatin)" },
      { key: "C", text: "Alkaloid nhân Indol (Strychnin, Brucin)" },
      { key: "D", text: "Alkaloid nhân Purin (Cafein, Theobromin)" }
    ],
    correctAnswer: "A",
    explanation: "Phản ứng Vitali-Morin là phản ứng nitro hóa tạo phức màu tím hoa cà đặc trưng của este acid tropic với gốc tropanol (nhóm alkaloid Tropan có trong Cà độc dược Datura metel, Atropa belladonna).",
    topic: "Kiểm nghiệm Hóa học"
  },
  {
    id: 8,
    question: "Dược thảo nào sau đây chứa Anthranoid và có chỉ định làm đen râu tóc, bổ can thận, dưỡng huyết?",
    options: [
      { key: "A", text: "Bạch chỉ (Angelica dahurica)" },
      { key: "B", text: "Hà thủ ô đỏ (Fallopia multiflora)" },
      { key: "C", text: "Cam thảo bắc (Glycyrrhiza uralensis)" },
      { key: "D", text: "Mã tiền (Strychnos nux-vomica)" }
    ],
    correctAnswer: "B",
    explanation: "Hà thủ ô đỏ (Fallopia multiflora / Polygonum multiflorum) chứa stilben glycosid chống lão hóa và anthraglycosid. Dược liệu qua chế biến cửu chưng cửu sái với đậu đen có công năng bổ can thận, ích tinh huyết, đen râu tóc.",
    topic: "Dược liệu học"
  },
  {
    id: 9,
    question: "Khi soi bột dược liệu Nụ hoa Hòe dưới kính hiển vi quang học, đặc điểm vi học nào sau đây là tiêu chuẩn nhận biết?",
    options: [
      { key: "A", text: "Hạt tinh bột hình đĩa lớn có rốn hạt phân nhánh" },
      { key: "B", text: "Hạt phấn hoa hình cầu hoặc hình bầu dục có 3 rãnh khuyết" },
      { key: "C", text: "Tế bào đá hình chữ U dày màu đỏ gạch" },
      { key: "D", text: "Bó sợi libe có bao tinh thể calci oxalat hình khối" }
    ],
    correctAnswer: "B",
    explanation: "Soi bột nụ hoa Hòe thấy rất nhiều hạt phấn hoa hình cầu hoặc bầu dục với 3 rãnh khuyết (lỗ nảy mầm), đường kính khoảng 15-20 µm, bề mặt lấm tấm mịn.",
    topic: "Soi bột Dược liệu"
  },
  {
    id: 10,
    question: "Thuốc thử Dragendorff (muối phức bismuth kali iodid) khi tác dụng với dung dịch alkaloid trong môi trường acid sẽ tạo hiện tượng gì?",
    options: [
      { key: "A", text: "Xuất hiện kết tủa màu đỏ cam đến nâu đỏ" },
      { key: "B", text: "Xuất hiện kết tủa trắng ngà" },
      { key: "C", text: "Dung dịch đổi sang màu xanh lam rực rỡ" },
      { key: "D", text: "Bốc khói trắng và có mùi hắc" }
    ],
    correctAnswer: "A",
    explanation: "Thuốc thử Dragendorff (KBiI4) là thuốc thử tạo tủa chung cho alkaloid, phản ứng tạo kết tủa màu đỏ gạch đến đỏ cam đặc trưng.",
    topic: "Kiểm nghiệm Alkaloid"
  },
  {
    id: 11,
    question: "Thành phần hoá học chủ yếu trong tinh dầu Bạc hà (Mentha arvensis) là:",
    options: [
      { key: "A", text: "Cinnamaldehyd" },
      { key: "B", text: "L-Menthol (chiếm 60-80%)" },
      { key: "C", text: "Eugenol" },
      { key: "D", text: "Artemisinin" }
    ],
    correctAnswer: "B",
    explanation: "Menthol là thành phần chính tạo nên hương thơm và vị the cay mát đặc trưng của tinh dầu bạc hà.",
    topic: "Dược liệu chứa Tinh dầu"
  },
  {
    id: 12,
    question: "Tại sao không được dùng Nhân sâm cho trường hợp đau bụng thể hàn, tiêu chảy cấp tính?",
    options: [
      { key: "A", text: "Vì nhân sâm có tính độc gây đông vón máu" },
      { key: "B", text: "Vì nhân sâm đại bổ khí, giữ trệ khí hàn thấp gây chướng bụng nguy hiểm ('Phúc thống phục nhân sâm tắc tử')" },
      { key: "C", text: "Vì nhân sâm làm hạ huyết áp đột ngột dẫn đến ngất" },
      { key: "D", text: "Vì nhân sâm kích thích nôn mửa liên tục" }
    ],
    correctAnswer: "B",
    explanation: "Theo y lý cổ truyền: 'Phúc thống phục nhân sâm tắc tử'. Người bị đau bụng, tiêu chảy do lạnh (thể hàn trệ) dùng sâm sẽ giữ tà khí lại bên trong làm bụng trướng căng tắc nghẽn, đe dọa tính mạng.",
    topic: "Chỉ định & Thận trọng"
  },
  {
    id: 13,
    question: "Vị thuốc nào sau đây được gọi là 'Kim bất hoán' (vàng cũng không đổi được) nhờ công năng chỉ huyết tán ứ tiêu sưng tuyệt vời?",
    options: [
      { key: "A", text: "Nhân sâm" },
      { key: "B", text: "Tam thất (Panax notoginseng)" },
      { key: "C", text: "Hoàng liên" },
      { key: "D", text: "Bạch chỉ" }
    ],
    correctAnswer: "B",
    explanation: "Tam thất có tên gọi dân gian là 'Kim bất hoán' vì giá trị chữa chấn thương bầm dập, thổ huyết, rong kinh và bổ dưỡng hoạt huyết cực kỳ quý giá.",
    topic: "Dược liệu học"
  },
  {
    id: 14,
    question: "Hoạt chất Rotundin chiết xuất từ củ Bình vôi (Stephania glabra) có tác dụng trị liệu chính là:",
    options: [
      { key: "A", text: "Trị sốt rét ác tính" },
      { key: "B", text: "An thần, gây ngủ êm dịu, giảm đau cơ trơn" },
      { key: "C", text: "Cầm máu và co hồi tử cung" },
      { key: "D", text: "Nhuận tràng tẩy xổ đường ruột" }
    ],
    correctAnswer: "B",
    explanation: "Rotundin (L-tetrahydropalmatin) là thuốc an thần thảo dược kinh điển, giúp ngủ ngon tự nhiên, không độc và giảm co thắt dạ dày ruột.",
    topic: "Tác dụng Dược lý"
  },
  {
    id: 15,
    question: "Thành phần hoá học chính của Quế nhục (Cortex Cinnamomi) có tính khử, cho phản ứng kết tủa hydrazon cam đỏ với thuốc thử nào?",
    options: [
      { key: "A", text: "Thuốc thử Fehling" },
      { key: "B", text: "Dung dịch 2,4-dinitrophenylhydrazin (2,4-DNPH)" },
      { key: "C", text: "Thuốc thử Mayer" },
      { key: "D", text: "Thuốc thử Diazo" }
    ],
    correctAnswer: "B",
    explanation: "Cinnamaldehyd trong vỏ quế mang nhóm chức aldehyd thơm phản ứng với thuốc thử 2,4-DNPH sinh ra kết tủa tinh thể cinnamaldehyd 2,4-dinitrophenylhydrazon màu cam đỏ.",
    topic: "Kiểm nghiệm Hóa học"
  }
];
