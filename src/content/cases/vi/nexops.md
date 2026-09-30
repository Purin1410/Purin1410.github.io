---
project: nexops
locale: vi
outcome:
  NexOps hoạt động như một nguyên mẫu cục bộ với các kịch bản nhà máy có thể lặp lại để trình diễn và đánh giá kỹ thuật.
---

## Bài toán

Tại nhiều xưởng sản xuất, telemetry máy móc, lịch sản xuất, cảnh báo và nhật ký dừng máy thường phân tán trên nhiều màn hình, bảng tính hoặc sổ tay. NexOps gom các thông tin này vào một giao diện MES/SCADA cục bộ cho người vận hành, kỹ sư bảo trì và quản lý xưởng.

## Phạm vi hệ thống

Nguyên mẫu tích hợp telemetry máy thời gian thực, lập lịch lệnh sản xuất, phân luồng cảnh báo và tính OEE theo ca. Các kịch bản mô phỏng xác định giúp phát lại các ca sản xuất chuẩn để kiểm tra luồng telemetry, cảnh báo và báo cáo OEE.

<section class="case-section nexops-flow">
  <h2>Cách hoạt động</h2>
  <ol class="flow">
    <li><span class="step-index">01</span><span>Thiết bị hoặc simulator xác định</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">02</span><span>MQTT qua EMQX</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">03</span><span>Dịch vụ FastAPI và TimescaleDB</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></li>
    <li><span class="step-index">04</span><span>Dashboard, cảnh báo và OEE</span></li>
  </ol>
</section>

## Vai trò của tôi

NexOps là nguyên mẫu đang hoạt động phục vụ trình diễn kỹ thuật và kêu gọi đầu tư. Với vai trò Trưởng nhóm AI, Mô phỏng & Nền tảng, tôi phụ trách kiến trúc phần mềm, engine mô phỏng và các adapter tích hợp, đồng thời phối hợp về luồng MQTT/EMQX với thành viên phụ trách IoT.

- Xây dựng các kịch bản mô phỏng máy và ca sản xuất xác định để kiểm tra lịch sản xuất, cảnh báo và tính OEE.
- Xây dựng pipeline backend tiếp nhận sự kiện MQTT/EMQX qua FastAPI vào TimescaleDB và truyền trạng thái thời gian thực lên dashboard.
- Phát triển adapter mạng LAN cho máy in 3D Bambu Lab, minh họa khả năng điều khiển máy trong video thử nghiệm.

## Nguyên mẫu vận hành

Dữ liệu từ thiết bị và simulator truyền qua MQTT qua EMQX. FastAPI lưu trữ dữ liệu chuỗi thời gian vào TimescaleDB, còn React, Apache ECharts và PixiJS hiển thị lịch ca, bảng andon, cảnh báo và báo cáo OEE. Kết nối máy in Bambu Lab qua LAN minh họa khả năng điều khiển thiết bị thực tế bên cạnh runtime mô phỏng.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <a href="/media/nexops-andon.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-andon.webp" alt="Tổng quan nhà máy NexOps với trạng thái máy, sản lượng ca hiện tại và các thẻ OEE." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Tổng quan nhà máy từ một kịch bản cục bộ có thể lặp lại.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-planning.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-planning.webp" alt="Màn hình kế hoạch sản xuất NexOps với trạng thái xếp lịch, kiểm tra hợp lệ và thực thi." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Luồng lập kế hoạch và xếp lịch sản xuất.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-machine-hub.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-machine-hub.webp" alt="Machine Hub của NexOps hiển thị telemetry CNC, ngữ cảnh lệnh sản xuất và trạng thái an toàn chỉ đọc." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Machine Hub · telemetry và ngữ cảnh vận hành ở giao diện phòng điều khiển.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-oee.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-oee.webp" alt="Báo cáo OEE NexOps với availability, performance, quality và xu hướng bảy ngày." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Phân rã OEE theo ca và xu hướng bảy ngày.</figcaption>
  </figure>
</div>
