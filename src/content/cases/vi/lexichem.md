---
project: lexichem
locale: vi
outcome:
  Đồ án đã hoàn thành và bài báo LexiChem được thông báo nhận tại APWeb-WAIM 2026. Video demo ghi lại
  bề mặt sản phẩm cục bộ; hiện chưa có bản triển khai trực tuyến hay kho mã nguồn công khai.
---

## Tổng quan

LexiChem chuyển mô tả phân tử bằng ngôn ngữ tự nhiên thành cấu trúc hóa học có thể kiểm tra. Đồ án kết hợp sinh cấu trúc với kiểm tra, trực quan hóa 2D/3D, lịch sử thực nghiệm và các quy trình hóa học hỗ trợ.

Đây là đồ án của nhóm ba thành viên. Tôi làm việc ở xử lý dữ liệu AI, chuyển đổi SMILES/SELFIES, phát triển phương pháp và ablation, cùng tối ưu suy luận ở model/backend. Phần ứng dụng là công việc chung của nhóm.

## Phạm vi nghiên cứu và sản phẩm

Ứng dụng gồm Dashboard, Experiments, Simulation và Knowledge. Bài báo APWeb-WAIM tập trung vào phương pháp căn chỉnh biểu diễn văn bản và SELFIES trong không gian ẩn chung, được đánh giá trên L+M-24, ChEBI-20 và Mol-Instructions bằng các thước đo chuỗi và cấu trúc.

LexiChem hỗ trợ tạo và khảo sát phân tử ứng viên. Hiệu quả sinh học và khả năng tổng hợp cần được đánh giá qua các bước thực nghiệm tiếp theo.

## Vai trò của tôi

Tôi phát triển ý tưởng nghiên cứu và đánh giá qua thí nghiệm, ablation. Trong báo cáo đồ án, tôi viết Introduction, toàn bộ Results & Discussion và đồng viết Methods với một thành viên khác.

Ở tuyến dữ liệu, tôi kết hợp Mol-Instructions, L+M-24 và ChEBI-20; dùng RDKit để phân tích cú pháp và kiểm tra hóa trị; chuẩn hóa SMILES; loại bản ghi trùng; rồi chuyển các cấu trúc còn lại sang SELFIES để huấn luyện.

Ở phần ứng dụng, tôi nối luồng Experiments với backend: kiểm tra ý định, chuẩn hóa prompt, gọi model qua FastAPI và Triton, kiểm tra SMILES đầu ra bằng RDKit rồi lưu lịch sử các lần chạy vào MongoDB. Phần sản phẩm còn lại được cả nhóm cùng phát triển.

## Bằng chứng sản phẩm

Các ảnh dưới đây là bằng chứng giao diện cục bộ từ luận văn. Trong đồ án này, ngoài RAG/Knowledge là đang trong quá trình phát triển ra thì các chức năng còn lại đều có thể chạy thực tế. Các giá trị trong video và ảnh là trạng thái giao diện, không phải metric được kiểm chứng độc lập.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <img src="/media/lexichem-experiments.png" alt="Ảnh chụp LexiChem Experiments Workbench cục bộ, hiển thị so sánh prompt, phân tử 3D và kết quả từ nhiều model." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Experiments Workbench · kiểm thử chức năng cục bộ.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-dashboard.png" alt="Ảnh chụp LexiChem Dashboard cục bộ, hiển thị hoạt động run, tổng quan validity và phân tử được chọn." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Dashboard · kiểm thử chức năng cục bộ.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-simulation.png" alt="Ảnh chụp LexiChem Docking Console cục bộ, hiển thị ligand, protein đích và các mục tương tác." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Docking Console · ảnh chụp cục bộ; giá trị affinity và tương tác là trạng thái hiển thị.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-knowledge.png" alt="Ảnh chụp LexiChem Knowledge Relay cục bộ, hiển thị câu hỏi hóa học, câu trả lời và nhãn nguồn." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Knowledge Relay · giao diện nguyên mẫu; RAG/Knowledge vẫn đang phát triển.</figcaption>
  </figure>
</div>
