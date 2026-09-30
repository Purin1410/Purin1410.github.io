---
project: lexichem
locale: vi
outcome:
  Đồ án đã hoàn thành và bài báo LexiChem đã được chấp nhận, trình bày tại APWeb-WAIM 2026, đang chờ xuất bản chính thức.
  Video ghi lại phiên bản chạy cục bộ; dự án chưa có bản triển khai trực tuyến hay kho mã nguồn công khai.
---

## Tổng quan

LexiChem biến mô tả phân tử bằng ngôn ngữ tự nhiên thành cấu trúc có thể xem, kiểm tra và khảo sát tiếp. Thay vì dừng ở một bản demo đơn giản, nhóm ba người chúng tôi đã đưa toàn bộ quy trình vào một ứng dụng: nhập yêu cầu, sinh ứng viên, kiểm tra cấu trúc qua RDKit, so sánh kết quả và xem lại lịch sử thử nghiệm.

Tôi tập trung vào pipeline dữ liệu AI, chuyển đổi SMILES/SELFIES, phát triển phương pháp, chạy ablation và tối ưu đường suy luận nối mô hình với backend. Giao diện và các luồng chức năng khác là công việc chung của cả nhóm.

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

Ứng dụng có bốn khu vực: Dashboard, Experiments, Simulation và Knowledge. Trong đồ án tốt nghiệp, chúng tôi thực nghiệm với ba bộ dữ liệu Mol-Instructions, L+M-24 và ChEBI-20. Bài báo APWeb-WAIM 2026 đi sâu vào phương pháp cốt lõi: căn chỉnh biểu diễn văn bản và SELFIES trong không gian ẩn dùng chung, được đánh giá trên tập chuẩn L+M-24.

LexiChem hỗ trợ sàng lọc và khảo sát tính toán ban đầu trên máy tính. Hiệu quả sinh học và khả năng tổng hợp thực tế vẫn cần được kiểm chứng trong phòng lab.

## Phần tôi trực tiếp làm

Ở nhánh nghiên cứu, tôi phát triển ý tưởng phương pháp rồi kiểm tra qua các thực nghiệm và ablation. Tôi viết phần Introduction, toàn bộ Results & Discussion, và cùng một thành viên khác viết Methods cho báo cáo đồ án.

Với dữ liệu, tôi xử lý Mol-Instructions, L+M-24 và ChEBI-20; dùng RDKit để phân tích cú pháp, kiểm tra hóa trị, chuẩn hóa SMILES và loại bỏ trùng lặp; sau đó chuyển phần dữ liệu hợp lệ sang SELFIES để huấn luyện.

Ở phía kỹ thuật, tôi nối Experiments với backend. Luồng này tiếp nhận prompt, gọi mô hình qua FastAPI và Triton, kiểm tra SMILES trả về bằng RDKit rồi lưu lịch sử chạy vào MongoDB. Các phần còn lại của ứng dụng do cả nhóm cùng phát triển.

## Sản phẩm khi chạy thực tế

Ảnh và video bên dưới được ghi lại từ phiên bản chạy cục bộ của đồ án. Dashboard, Experiments và Simulation đã hoạt động; RAG/Knowledge vẫn đang phát triển. Các con số xuất hiện trong ảnh là trạng thái của phiên demo, không phải kết quả benchmark độc lập.

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
    <img src="/media/lexichem-simulation.png" alt="Ảnh chụp LexiChem Simulation cục bộ, hiển thị ligand, protein đích và các mục tương tác." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Simulation · khảo sát ligand, protein đích và các tương tác.</figcaption>
  </figure>
  <figure class="case-evidence">
    <img src="/media/lexichem-knowledge.png" alt="Ảnh chụp LexiChem Knowledge cục bộ, hiển thị câu hỏi hóa học, câu trả lời và nhãn nguồn." width="1907" height="925" loading="lazy" decoding="async" />
    <figcaption>Knowledge · giao diện cho phần RAG/Knowledge đang phát triển.</figcaption>
  </figure>
</div>
