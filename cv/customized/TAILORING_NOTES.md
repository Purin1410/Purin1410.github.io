
## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# Skill note: tailor nội dung theo JD

Áp dụng cho mọi CV tùy biến trong workspace. Đọc cùng `CV_VOICE.md`. Cập nhật 2026-10-02 sau đối chiếu 21 cặp CV/JD và nguồn ở workspace cha; báo cáo chi tiết tại `audits/cv-voice-20261002/report.md`.

## Bài học

Giữ factual integrity không có nghĩa phải giữ gần nguyên cấu trúc CV. Giữ layout đã duyệt là lựa chọn trình bày; nội dung trong layout cần được chọn lại theo JD. Không coi số dòng sửa nhiều hay ít là thước đo chất lượng.

Các bản mới có điểm đáng giữ: project phù hợp được đưa lên trước, động từ cụ thể, metrics dễ thấy và nhóm Skills rõ. Chọn các đặc điểm ấy, không sao chép self-praise hoặc đổi chuyên môn trong Profile cho mỗi JD. Các bản thận trọng hơn cũng cần giữ số liệu và chức năng đã có nguồn; giọng phòng thủ không tự làm CV chính xác hơn.

## Cách thực hiện ở JD tiếp theo

1. Xác định 3-5 nhu cầu quan trọng của vị trí và map từng nhu cầu với evidence cá nhân.
2. Chọn câu chuyện ứng tuyển: những project/đóng góp nào chứng minh được các nhu cầu đó? Đọc lại nguồn liên quan, không chỉ dùng wording của bản tailored trước.
3. Xem xét cả thứ tự project/section, số bullet, độ dài từng phần, skills và publication order. Ưu tiên evidence sát JD; rút nội dung ít liên quan. Không mặc định chỉ đổi subtitle/profile và vài keyword.
4. Viết bullet quanh hành động cá nhân và đầu ra đã xác nhận; công nghệ phục vụ ý chính. Dùng động từ mạnh khi đúng nguồn. Tính transferable lưu trong analysis, không biến thành kinh nghiệm trực tiếp ở domain mới hoặc thành lời tự nhận thiếu năng lực trong CV.
5. Phân bổ chỗ trong một trang theo giá trị với vị trí. Giữ đủ năm citation theo AGENTS; bỏ câu tổng số paper bị lặp ở Profile/Experience. Cân nhắc metrics và team funding có giá trị trước khi dành chỗ cho khóa học hoặc keyword yếu.
6. Trong analysis.md/change_log.md, ghi lý do lựa chọn và phần giữ nguyên. Nếu sửa ít vì bản nền đã sát JD hoặc evidence hạn chế, nêu đúng lý do; không gán lựa chọn bảo thủ của agent cho giới hạn của skill.
7. Rà cuối hai chiều: có claim nào vượt nguồn, và có đóng góp mạnh nào bị viết yếu hoặc mất không? Người đọc có nhận ra vì sao ứng viên phù hợp từ bullet cụ thể không? Phạm vi đặt gọn ở nhãn project hoặc cạnh metric khi cần; không đưa quy trình audit vào CV.

## Ranh giới

- Không cần ép thay đổi cấu trúc khi không có lợi; không đặt chỉ tiêu số bullet/dòng phải sửa.
- Không bịa skills, metrics, dates, titles, ownership hoặc production experience để tăng mức phù hợp.
- Không overfit Jobscan; dùng JOBSCAN_NOTES.md khi có report.
- Phân biệt quy tắc từ skill, yêu cầu của user và lựa chọn biên tập của agent. Các quy tắc một trang, subtitle, punctuation và tên PDF tiếp tục theo AGENTS.md.

Có thể dùng ba trọng tâm nội dung: AI/ML engineering (LexiChem, training/inference); industrial/IoT (NexOps, simulations/telemetry); research/CV (HMER, phương pháp/ablations/papers). Đây là góc chọn bằng chứng, không phải ba chuyên môn mới hoặc quy tắc lọc seniority. Chưa tạo thêm bản gốc trong đợt này; không copy CV tailored trước rồi tích lũy claim qua nhiều vòng.

Ví dụ Umbalabs: ưu tiên LexiChem về data/output validation và inference integration, HMER về evaluation/error analysis; cân nhắc rút phần IoT ít liên quan. Đây là định hướng biên tập, không phải bằng chứng cho ASR, media segmentation, JSON schema, queue workers hoặc vận hành production.


## Quyết định kỹ thuật: Tận dụng khoảng trắng lề dưới mà không dính chữ (2026-10-02)

Khi điều chỉnh layout để dàn vừa 1 trang và lấp đầy khoảng lề trắng phía dưới:

1. **Tuyệt đối không ép hẹp khoảng cách dòng (`\linespread`)**:
   - Giữ độ giãn dòng thoải mái chuẩn bản gốc (`\linespread{1.08}` đến `1.105`).
   - Không hạ `\linespread` quá thấp (như 1.05) khiến các dòng chữ sát nhau gây cảm giác dính chữ, chật chội và khó đọc.

2. **Kỹ thuật giãn khoảng cách đều theo chiều dọc (Vertical Fill Technique)**:
   - **Điều chỉnh Lề (Geometry)**: Thiết lập lề trên/dưới hợp lý (`top=0.90cm`, `bottom=0.70cm`).
   - **Phân bổ Spacing Section & Item**: Tăng nhẹ khoảng cách tiêu đề section `\cvsection` (`\vspace{4.2pt}` trước thanh gạch và `2.5pt` sau thanh gạch) cùng `itemsep=1.6pt` ~ `1.8pt` cho danh sách bullet.
   - **Thêm khoảng cách dòng giữa các mục kỹ năng & bài báo**: Dùng `\par\vspace{2.0pt}` đến `2.4pt` phân tách các nhóm trong `TECHNICAL SKILLS` và các bài báo trong `SELECTED PUBLICATIONS` (thay vì chỉ dùng `\\` nén chữ).
   - Kiểm tra bằng ảnh render; không bắt buộc nội dung chạm sát lề dưới. Khoảng trắng hợp lý tốt hơn nhồi thêm câu hoặc ép dàn đầy trang. Chỉ điều chỉnh layout khi page-fit/readability cần; ghi thay đổi theo AGENTS.
