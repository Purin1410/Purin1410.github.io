---
project: lexichem
locale: vi
outcome:
  Đồ án đã hoàn thành và bài báo LexiChem được thông báo nhận tại APWeb-WAIM 2026. Video ghi lại
  phiên bản chạy cục bộ; dự án chưa có bản triển khai trực tuyến hay kho mã nguồn công khai.
---

## Tổng quan

LexiChem biến một mô tả phân tử bằng ngôn ngữ tự nhiên thành cấu trúc có thể xem, kiểm tra và tiếp tục khảo sát. Thay vì dừng ở một model demo, nhóm đưa toàn bộ luồng vào một ứng dụng: nhập yêu cầu, sinh ứng viên, kiểm tra cấu trúc, so sánh kết quả và xem lại lịch sử thử nghiệm.

Đội có ba thành viên. Phần tôi tập trung là dữ liệu cho AI, chuyển đổi SMILES/SELFIES, phát triển phương pháp, chạy ablation và tối ưu đường suy luận giữa model với backend. Giao diện và các luồng sản phẩm là công việc chung của cả nhóm.

<section class="case-section lexichem-flow">
  <h2>Cách hoạt động</h2>
  <ol class="flow">
    <li><span class="step-index">01</span><span>Mô tả</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">02</span><span>Suy luận mô hình</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">03</span><span>Cấu trúc phân tử</span><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></li>
    <li><span class="step-index">04</span><span>Khám phá 2D / 3D</span></li>
  </ol>
  <figure class="case-evidence">
    <a href="/media/lexichem-design-workflow.webp" target="_blank" rel="noopener noreferrer" aria-label="Mở hình minh họa thiết kế phân tử ở kích thước đầy đủ">
      <img src="/media/lexichem-design-workflow.webp" width="2752" height="1536" loading="lazy" decoding="async" alt="Nhà nghiên cứu mô tả thuộc tính mong muốn; AI sinh các phân tử ứng viên, sau đó sàng lọc trước khi tổng hợp và thử nghiệm trong phòng lab." />
    </a>
    <figcaption>LexiChem đảm nhiệm phần sinh cấu trúc và khảo sát trên máy tính. Tổng hợp và thử nghiệm trong phòng lab là chặng tiếp theo, nằm ngoài ứng dụng. Bấm vào ảnh để xem lớn.</figcaption>
  </figure>
</section>

## Từ nghiên cứu đến sản phẩm

Ứng dụng có bốn khu vực: Dashboard, Experiments, Simulation và Knowledge. Trong đó, bài báo APWeb-WAIM đi sâu vào phương pháp căn chỉnh biểu diễn văn bản và SELFIES trong cùng một không gian ẩn. Phương pháp được đánh giá trên L+M-24, ChEBI-20 và Mol-Instructions bằng cả thước đo chuỗi lẫn cấu trúc.

LexiChem giúp tạo và sàng lọc ban đầu các phân tử ứng viên trên máy tính. Hiệu quả sinh học và khả năng tổng hợp vẫn cần được kiểm chứng bằng thực nghiệm.

## Phần tôi trực tiếp làm

Ở nhánh nghiên cứu, tôi phát triển ý tưởng phương pháp rồi kiểm tra chúng qua các thí nghiệm và ablation. Tôi viết phần Introduction, toàn bộ Results & Discussion, đồng thời cùng một thành viên khác viết Methods cho báo cáo đồ án.

Với dữ liệu, tôi hợp nhất Mol-Instructions, L+M-24 và ChEBI-20; dùng RDKit để phân tích cú pháp, kiểm tra hóa trị và chuẩn hóa SMILES; loại các bản ghi trùng; sau đó chuyển phần dữ liệu còn lại sang SELFIES để huấn luyện.

Ở phía sản phẩm, tôi nối Experiments với backend. Luồng này kiểm tra ý định, chuẩn hóa prompt, gọi model qua FastAPI và Triton, dùng RDKit kiểm tra SMILES trả về rồi lưu lịch sử chạy vào MongoDB. Các phần còn lại của ứng dụng được cả nhóm cùng phát triển.

## Sản phẩm khi chạy thực tế

Ảnh và video bên dưới được ghi từ phiên bản chạy cục bộ dùng trong đồ án. Dashboard, Experiments và Simulation đã hoạt động; RAG/Knowledge vẫn đang phát triển. Các con số xuất hiện trong ảnh là trạng thái của phiên demo, không phải kết quả benchmark độc lập.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <img src="/media/lexichem-experiments.png" alt="Ảnh chụp LexiChem Experiments Workbench cục bộ, hiển thị so sánh prompt, phân tử 3D và kết quả từ nhiều model." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Experiments Workbench · so sánh prompt và kết quả giữa nhiều model.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-dashboard.png" alt="Ảnh chụp LexiChem Dashboard cục bộ, hiển thị hoạt động run, tổng quan validity và phân tử được chọn." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Dashboard · theo dõi lịch sử chạy và phân tử đang chọn.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-simulation.png" alt="Ảnh chụp LexiChem Docking Console cục bộ, hiển thị ligand, protein đích và các mục tương tác." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Docking Console · khảo sát ligand, protein đích và các tương tác.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-knowledge.png" alt="Ảnh chụp LexiChem Knowledge Relay cục bộ, hiển thị câu hỏi hóa học, câu trả lời và nhãn nguồn." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Knowledge Relay · giao diện nguyên mẫu của phần RAG/Knowledge đang phát triển.</figcaption>
  </figure>
</div>
