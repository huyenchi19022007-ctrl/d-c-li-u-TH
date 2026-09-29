import { FillQuestion } from '../types/pharmacognosy';

export const fillQuestionsDB: FillQuestion[] = [
  {
    id: 1,
    plantName: "Nhân sâm",
    textBefore: "Nhân sâm (Panax ginseng) thuộc họ",
    answer: "Araliaceae",
    acceptableAnswers: ["Araliaceae", "Họ Cuồng", "Cuồng", "Ngũ gia bì"],
    textAfter: ", có thành phần hoạt chất quý báu nhóm Saponin được gọi là Ginsenosid.",
    hint: "Tên khoa học của họ thực vật này bắt đầu bằng chữ A, thường gọi là họ Cuồng hoặc Ngũ gia bì.",
    explanation: "Nhân sâm thuộc họ Araliaceae (họ Cuồng). Thành phần hoạt chất chính là các ginsenosid (saponin triterpen nhóm dammaran).",
    category: "saponin"
  },
  {
    id: 2,
    plantName: "Hoàng liên",
    textBefore: "Hoạt chất chính chiếm 5-8% trong thân rễ Hoàng liên có tác dụng kháng khuẩn đường ruột rất mạnh là",
    answer: "Berberin",
    acceptableAnswers: ["Berberin", "Berberine"],
    textAfter: ", thuộc nhóm alkaloid dẫn xuất isoquinolin.",
    hint: "Hợp chất có màu vàng đặc trưng, thường dùng làm thuốc viên màu vàng trị lỵ và tiêu chảy.",
    explanation: "Berberin là alkaloid chính trong Hoàng liên (Coptis chinensis Franch.), có màu vàng, đắng đậm, ức chế vi khuẩn Shigella và Salmonella.",
    category: "alkaloid"
  },
  {
    id: 3,
    plantName: "Hòe hoa",
    textBefore: "Nụ hoa của cây Hòe (Sophora japonica) chứa hàm lượng rất cao flavonoid",
    answer: "Rutin",
    acceptableAnswers: ["Rutin"],
    textAfter: " (đạt tới 20-30%), có tác dụng làm bền thành mao mạch và phòng tai biến mạch máu não.",
    hint: "Flavonoid glycosid này có đường rutinose (rhamnose + glucose) gắn vào quercetin.",
    explanation: "Rutin là flavonoid glycosid đặc trưng của nụ hoa hòe, làm giảm tính thấm và tăng độ bền mao mạch máu.",
    category: "flavonoid"
  },
  {
    id: 4,
    plantName: "Mã tiền",
    textBefore: "Hạt Mã tiền (Strychnos nux-vomica) chứa hai alkaloid độc tính cao là Brucin và",
    answer: "Strychnin",
    acceptableAnswers: ["Strychnin", "Strychnine"],
    textAfter: ", có tác dụng kích thích tủy sống và tăng trương lực cơ.",
    hint: "Alkaloid nhân indol có tính độc bảng A, cho phản ứng tím chuyển đỏ với acid sulfuric đậm đặc và kali dicromat.",
    explanation: "Strychnin là alkaloid chính trong hạt mã tiền, kích thích thần kinh trung ương và tủy sống, gây co giật uốn ván nếu quá liều.",
    category: "alkaloid"
  },
  {
    id: 5,
    plantName: "Quế",
    textBefore: "Hợp chất aldehyd thơm chủ yếu tạo nên mùi cay ngọt đặc trưng trong tinh dầu Quế là",
    answer: "Cinnamaldehyd",
    acceptableAnswers: ["Cinnamaldehyd", "Cinnamaldehyde", "Aldehyd cinnamic", "Aldehyde cinnamic"],
    textAfter: ", chiếm tới hơn 80% thể tích tinh dầu.",
    hint: "Hợp chất này có cấu trúc phenylpropanoid với nhóm chức andehit (-CHO).",
    explanation: "Cinnamaldehyd (aldehyd cinnamic) chiếm đa số trong tinh dầu vỏ quế (Cinnamomum cassia/verum).",
    category: "essential_oil"
  },
  {
    id: 6,
    plantName: "Bình vôi",
    textBefore: "Từ củ Bình vôi (Stephania glabra), các nhà khoa học đã chiết xuất alkaloid",
    answer: "Rotundin",
    acceptableAnswers: ["Rotundin", "L-tetrahydropalmatin", "l-tetrahydropalmatin", "Tetrahydropalmatin"],
    textAfter: " (còn gọi là L-tetrahydropalmatin) dùng làm thuốc an thần gây ngủ an toàn và phổ biến ở Việt Nam.",
    hint: "Tên thương mại của thuốc an thần nguồn gốc thảo dược rất thông dụng ở các hiệu thuốc Việt Nam.",
    explanation: "Rotundin (L-tetrahydropalmatin) trong củ bình vôi có tác dụng ức chế chọn lọc thụ thể dopaminergic, mang lại giấc ngủ êm dịu.",
    category: "alkaloid"
  },
  {
    id: 7,
    plantName: "Bạc hà",
    textBefore: "Thành phần alcol đơn vòng chủ yếu tạo nên cảm giác the mát cực mạnh trong tinh dầu Bạc hà là",
    answer: "Menthol",
    acceptableAnswers: ["Menthol", "L-menthol"],
    textAfter: ", chiếm từ 60% đến 80% hàm lượng tinh dầu.",
    hint: "Hợp chất monoterpen có đuôi '-ol', thường kết tinh thành tinh thể hình kim không màu.",
    explanation: "Menthol kích thích thụ thể lạnh TRPM8 trên da và niêm mạc, tạo cảm giác the mát và làm dịu đau rát cục bộ.",
    category: "essential_oil"
  },
  {
    id: 8,
    plantName: "Thanh hao hoa vàng",
    textBefore: "GS. Đồ U U (Tu Youyou) đã nhận giải Nobel Y học năm 2015 nhờ phát hiện hoạt chất",
    answer: "Artemisinin",
    acceptableAnswers: ["Artemisinin"],
    textAfter: " từ cây Thanh hao hoa vàng có tác dụng diệt ký sinh trùng sốt rét Plasmodium falciparum.",
    hint: "Hợp chất sesquiterpen lacton có cầu nối peroxid (-O-O-) đặc thù.",
    explanation: "Artemisinin chứa cầu nối endoperoxid giải phóng gốc tự do khi gặp ion sắt của hem trong ký sinh trùng sốt rét.",
    category: "essential_oil"
  },
  {
    id: 9,
    plantName: "Cam thảo",
    textBefore: "Saponin triterpen tạo nên vị ngọt đậm đà gấp 50 lần đường mía trong rễ Cam thảo là",
    answer: "Glycyrrhizin",
    acceptableAnswers: ["Glycyrrhizin", "Acid glycyrrhizic", "Glycyrrhizic acid"],
    textAfter: ", có tác dụng chống loét dạ dày và bảo vệ gan.",
    hint: "Bắt đầu bằng tên chi của cây Cam thảo (Glycyrrhiza).",
    explanation: "Glycyrrhizin là muối calci và magnesi của acid glycyrrhizic trong rễ cam thảo (Glycyrrhiza uralensis).",
    category: "saponin"
  },
  {
    id: 10,
    plantName: "Đinh lăng",
    textBefore: "Đinh lăng được mệnh danh là 'Nhân sâm của người nghèo', thuộc chi thực vật mang tên la-tinh là",
    answer: "Polyscias",
    acceptableAnswers: ["Polyscias", "Polyscias fruticosa"],
    textAfter: ", có vị ngọt hơi đắng, tính mát, bổ khí huyết và tăng lực.",
    hint: "Bắt đầu bằng chữ cái P, tên khoa học đầy đủ là Polyscias fruticosa (L.) Harms.",
    explanation: "Đinh lăng là Polyscias fruticosa (L.) Harms thuộc họ Cuồng (Araliaceae).",
    category: "saponin"
  }
];
