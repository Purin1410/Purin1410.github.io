Latest owner correction, 2026-10-02: retain the total five accepted/published paper count in Research Experience and Selected Publications; research fields are HMER, text-to-molecule generation and active learning with vision-language models. Use existing publisher/GitHub links in publication YAML files. This overrides older advice to omit repeated counts.


## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# CV tùy biến

Workspace dành cho CV tiếng Anh một trang theo JD. Bản nền `Nguyen-Minh-Khoa-CV-1page.tex` được sao chép từ `../latex_source/` ngày 2026-09-30; giữ nguyên bản nền và nguồn portfolio khi tailor.

Điểm vào cho mọi agent là `AGENTS.md`. Trước khi viết, đọc `WORKFLOW.md`, `TAILORING_NOTES.md`, `CV_VOICE.md` và `EVIDENCE.md`. Kiểm đầu ra bằng `ATS_CHECKLIST.md`; nếu có báo cáo checker, đọc `JOBSCAN_NOTES.md`. `SOURCES.md` ghi rationale và upstream.

Mỗi job nằm trong `jobs/<company-role>/`, gồm `JD.md`, `resume.tex`, `analysis.md`, `evidence.md`, `change_log.md`, `review.md`, `resume.txt` và PDF có tên bàn giao. Log, PDF trung gian và ảnh render nằm trong `build/` của job. Không tạo TeX/PDF tùy biến rời ở root.

Biên dịch từ thư mục job theo lệnh trong `WORKFLOW.md`: compile hai lần, kiểm đúng một trang, extraction và ảnh render. Script `scripts/build-cv.py` của portfolio vẫn dùng `cv/latex_source/`; các bản tùy biến ở đây được biên dịch riêng. Đầu ra biên dịch được bỏ qua bởi `.gitignore`.

Để bắt đầu, gửi JD hoặc link tuyển dụng và yêu cầu dùng bộ hướng dẫn này. Agent chọn bằng chứng phù hợp, viết đóng góp trực tiếp, kiểm nguồn/PDF rồi bàn giao bạn review. Subtitle tiếp tục là `Apply for <tên vị trí trong JD> in <tên công ty>` theo AGENTS. Không tự nộp, upload lên checker hoặc cập nhật portfolio.

Đợt rà giọng CV ngày 2026-10-02: [báo cáo](audits/cv-voice-20261002/report.md), [inventory](audits/cv-voice-20261002/inventory.json). Rule mới giữ động từ cụ thể và kết quả có giá trị; đưa quy trình audit ra hồ sơ nội bộ; kiểm cả thổi phồng lẫn tự làm yếu. Các CV hiện có chưa được sửa trong đợt audit này.
