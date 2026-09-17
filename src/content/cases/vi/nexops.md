---
project: nexops
locale: vi
outcome:
  NexOps chạy cục bộ với các kịch bản nhà máy có thể lặp lại cho workflow sản xuất.
---

## Bài toán

Trạng thái máy, kế hoạch sản xuất, cảnh báo và thời gian dừng thường nằm rải rác ở nhiều màn hình, bảng tính hoặc giấy tờ. NexOps gom chúng vào một giao diện MES/SCADA cho vận hành viên, bộ phận bảo trì và quản lý sản xuất.

## Phạm vi

Nguyên mẫu gồm telemetry máy, kế hoạch và lệnh sản xuất, cảnh báo, lịch sử sự kiện cùng báo cáo OEE theo ca. Các kịch bản cục bộ có thể chạy lại giúp tôi lặp đúng một workflow rồi đối chiếu telemetry, cảnh báo và OEE ở đầu ra.

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

Tôi phụ trách AI, mô phỏng và phần nền tảng. Tôi xây simulator, các kịch bản nhà máy đi kèm và luồng telemetry đưa những kịch bản đó vào các màn hình vận hành.

- Xây kịch bản máy và ca có thể chạy lại để kế hoạch, cảnh báo và OEE chạy trong cùng một workflow.
- Thiết kế luồng từ simulator và edge events qua MQTT/EMQX tới FastAPI, TimescaleDB và trạng thái dashboard.
- Triển khai tích hợp điều khiển, với hiện tại là sử dụng máy in Bambu Lab cục bộ dùng trong thử nghiệm phần cứng.

## Nguyên mẫu đang chạy

Sự kiện từ simulator và thiết bị đi qua MQTT/EMQX. FastAPI lưu trạng thái chuỗi thời gian vào TimescaleDB; React, ECharts và PixiJS dùng dữ liệu đó cho các màn hình kế hoạch, cảnh báo, OEE và sơ đồ nhà máy. Luồng Bambu Lab qua LAN là một tích hợp phần cứng nằm trong runtime cục bộ này.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <a href="/media/nexops-andon.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-andon.webp" alt="Tổng quan nhà máy NexOps với trạng thái máy, sản lượng ca hiện tại và các thẻ OEE." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Tổng quan nhà máy từ một kịch bản cục bộ có thể chạy lại.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-planning.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-planning.webp" alt="Màn hình kế hoạch sản xuất NexOps với trạng thái xếp lịch, kiểm tra hợp lệ và thực thi." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Luồng lập kế hoạch và xếp lịch sản xuất.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-machine-hub.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-machine-hub.webp" alt="Machine Hub của NexOps hiển thị telemetry CNC, ngữ cảnh lệnh sản xuất và trạng thái an toàn chỉ đọc." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Machine Hub · telemetry và ngữ cảnh vận hành ở giao diện control room.</figcaption>
  </figure>
  <figure class="case-evidence">
    <a href="/media/nexops-oee.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-oee.webp" alt="Báo cáo OEE NexOps với availability, performance, quality và xu hướng bảy ngày." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Phân rã OEE theo ca và xu hướng bảy ngày.</figcaption>
  </figure>
</div>
