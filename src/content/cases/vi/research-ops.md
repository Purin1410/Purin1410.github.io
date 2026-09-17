---
project: research-ops
locale: vi
outcome:
  Research Ops là workspace pre-alpha cục bộ, dùng để nối tài liệu, bằng chứng, phiên làm việc, quyết định và các bản
  thảo trong cùng một quy trình. Dự án vẫn đang phát triển; thực thi mô hình và đánh giá GPU chưa hoàn thiện.
---

## Dự án này là gì

Research Ops là workspace pre-alpha nhằm giảm lượng chú ý cần thiết để duy trì một quy trình nghiên cứu đáng tin cậy. Hệ thống lưu câu hỏi, giả thuyết, lần chạy, bằng chứng, checkpoint và quyết định trong một hồ sơ bền vững, nên thí nghiệm bị gián đoạn hay phiên làm việc kết thúc cũng không làm mất ngữ cảnh. Agent chỉ thực hiện các tác vụ có giới hạn và đưa quyết định về để xem xét; người nghiên cứu vẫn kiểm soát hướng đi, phê duyệt, diễn giải và kết luận khoa học.

## Vì sao tôi xây dựng nó

Tài liệu nghiên cứu thường bị chia giữa PDF, tab trình duyệt, notebook, hội thoại và thư mục thực nghiệm. Khi cần quay lại, việc dựng lại ngữ cảnh vừa tốn thời gian vừa khiến quyết định khó kiểm tra. Research Ops lưu luôn phần ngữ cảnh đó, nhưng quyền phê duyệt và diễn giải vẫn thuộc về người nghiên cứu.

## Những phần đang chạy cục bộ

Bản hiện tại có kho tài liệu, xử lý PDF và trích dẫn, phiên nghiên cứu, liên kết bằng chứng, xuất dữ liệu và trạng thái có thể tiếp tục. PostgreSQL lưu trạng thái, FastAPI cung cấp ứng dụng, còn cập nhật trên trình duyệt đi qua SSE.

File nguồn được lưu theo SHA-256 digest, đoạn trích dẫn luôn gắn với digest đó, còn bản thảo được xuất từ revision cụ thể. Trong một lần kiểm tra cục bộ, hệ thống đã nhập PDF 18 trang, xác minh một đoạn bằng chứng, rồi xuất và biên dịch artifact bản thảo ở revision 2.

Mọi thay đổi runtime còn cần bundle đã ghim, revision khớp, ngân sách, reservation và phê duyệt của người dùng. Receipt GPU mới nhất vẫn ở trạng thái `MANUAL_ACTION_REQUIRED` và chưa có kết quả huấn luyện.

## Giới hạn hiện tại

Research Ops là dự án cá nhân ở mức pre-alpha. Dự án chưa được triển khai công khai và chưa có số liệu về lợi ích dài hạn. Bước tiếp theo là lặp lại một chu kỳ nghiên cứu hoàn chỉnh với nguồn thật, đồng thời giữ lại revision, quyết định của người dùng và đầu ra.
