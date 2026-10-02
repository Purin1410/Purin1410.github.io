
## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# Checklist ATS cho PDF LaTeX

## Trước bàn giao

- [ ] Layout một cột, text chọn/copy được; headings rõ như Experience, Projects, Education, Skills, Publications.
- [ ] Name/contact nằm trong body và hiện đúng trong text extraction.
- [ ] Experience thể hiện title, organization và date rõ; tách dòng khi text extraction làm nhập nhằng. Projects không bị trình bày như employer.
- [ ] Dates nhất quán khi có đủ dữ kiện; không đoán tháng. Publication/project year không cần ép thành employment month range.
- [ ] Skills đọc theo thứ tự hợp lý, không skill bars/icons thay chữ. Không dùng bảng/cột phức tạp nếu extraction đảo thứ tự.
- [ ] Dấu tiếng Việt nếu có, ligature, bullet, dấu %, ký hiệu và URL không mất/biến thành ký tự rác.
- [ ] Acronym và tên đầy đủ dùng khi hữu ích và chính xác; keyword không lặp vô nghĩa.
- [ ] Hai lần compile exit 0; không overfull box; PDF đúng một trang.
- [ ] Đọc cả extraction thường và `-layout`; title/company/date/bullets không mất, nhập hoặc đảo sai.
- [ ] Mở ảnh render kiểm cắt/chồng chữ, khoảng cách và cỡ chữ dễ đọc.
- [ ] Mọi claim thay đổi đã kiểm theo `evidence.md`; unresolved claim không nằm trong final draft.
- [ ] Rà `CV_VOICE.md` hai chiều: không nâng phạm vi/skill/credential/status; không tự làm yếu đóng góp, mất Python hoặc bỏ kết quả có giá trị mà không có lý do biên tập.
- [ ] Profile và bullet nói việc cụ thể, không keyword chains/self-praise; audit receipts và disclaimer dư nằm trong hồ sơ nội bộ. Project scope, benchmark và trạng thái paper vẫn đủ rõ.
- [ ] Giữ năm citation đầy đủ; không nhắc lại tổng số paper ở Profile/Experience. Các section không mâu thuẫn về trạng thái publication hay tên credential.

## Khi upload thật

Tuân thủ định dạng portal nhận và hướng dẫn của employer. PDF có text không đồng nghĩa mọi parser đều hiểu đúng; Unicode mapping chỉ hỗ trợ ký tự. Nếu portal yêu cầu DOCX hoặc parse PDF sai, cân nhắc xuất DOCX riêng và kiểm lại file đó. Không đổi sang DOCX chỉ vì một repo tuyên bố nó luôn tốt hơn.

Rà title/company/start/end dates, degree/institution, contact và skills mà portal autofill; sửa trường sai trước khi submit. Local extraction chỉ kiểm khả năng đọc text, không chứng minh nhận diện entity hay ranking của ATS. Không gửi CV tới dịch vụ checker bên ngoài nếu bạn chưa yêu cầu.
