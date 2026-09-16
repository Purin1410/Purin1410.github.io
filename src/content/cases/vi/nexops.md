---
project: nexops
locale: vi
outcome:
  NexOps là nguyên mẫu cục bộ đang được phát triển. Các màn hình toàn nhà máy dùng kịch bản demo xác định, còn luồng
  điều khiển Bambu Lab đã được thử trên phần cứng thật qua LAN. Đây chưa phải triển khai sản xuất.
---

## Bài toán

Trạng thái máy, kế hoạch sản xuất, cảnh báo và thời gian dừng thường nằm rải rác ở nhiều màn hình, bảng tính hoặc giấy tờ. NexOps đưa chúng về một giao diện MES/SCADA để vận hành viên, bộ phận bảo trì và quản lý sản xuất cùng làm việc trên một trạng thái.

## Phạm vi sản phẩm

Nguyên mẫu gồm telemetry máy, kế hoạch và lệnh sản xuất, cảnh báo, lịch sử sự kiện cùng báo cáo OEE theo ca. Các màn hình nhà máy chạy bằng kịch bản cục bộ có thể lặp lại. Cách này giúp kiểm tra trọn luồng, nhưng dữ liệu vẫn là dữ liệu mô phỏng.

## Vai trò của tôi

Tôi phụ trách phần AI và mô phỏng. Công việc chính là xây simulator và luồng dữ liệu đi cùng nó: tạo trạng thái máy có thể lặp lại, gửi qua MQTT, rồi kiểm tra để API, lưu trữ và màn hình vận hành không lệch nhau.

- Xây dựng kịch bản máy và ca làm việc có thể lặp lại cho kiểm thử tích hợp.
- Nối telemetry và đầu ra simulator với lưu trữ, API và trạng thái trên dashboard.
- Chuẩn bị luồng dữ liệu cho thí nghiệm phát hiện bất thường và bảo trì dự đoán. Các phần này chưa phải tính năng đã được kiểm chứng trong sản xuất.

## Nguyên mẫu đang chạy

Sự kiện từ thiết bị hoặc simulator đi qua MQTT/EMQX; FastAPI sau đó ghi trạng thái chuỗi thời gian vào TimescaleDB. Redis và Celery xử lý các tác vụ nền. Giao diện vận hành dùng React và ECharts. Ở một luồng riêng, edge process đã gửi lệnh đến máy in Bambu Lab qua mạng nội bộ.

<div class="case-evidence-grid">
  <figure class="case-evidence">
    <a href="/media/nexops-andon.webp" target="_blank" rel="noopener noreferrer"><img src="/media/nexops-andon.webp" alt="Tổng quan nhà máy NexOps với trạng thái máy, sản lượng ca hiện tại và các thẻ OEE." width="1425" height="801" loading="lazy" decoding="async" /></a>
    <figcaption>Tổng quan nhà máy · dữ liệu demo cục bộ xác định.</figcaption>
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

## Những gì demo chưa chứng minh

NexOps vẫn đang được phát triển. Ảnh phía trên là demo có kiểm soát; video phần cứng là thử nghiệm trong lab. Chúng chưa chứng minh việc triển khai tại nhà máy, kết quả cho khách hàng hay độ chính xác của bảo trì dự đoán.
