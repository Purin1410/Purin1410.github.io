Latest owner correction, 2026-10-02: retain the total five accepted/published paper count in Research Experience and Selected Publications; research fields are HMER, text-to-molecule generation and active learning with vision-language models. Use existing publisher/GitHub links in publication YAML files. This overrides older advice to omit repeated counts.


## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# Quy trình tùy biến CV 1 trang

## 1. Tiếp nhận JD

Tạo `jobs/<company-role>/`; lưu JD đầy đủ vào `JD.md`, kèm URL và ngày lấy nếu có. Sao chép bản TeX nền thành `resume.tex`. Dùng các mẫu trong `templates/` để lập hồ sơ. Chỉ cần JD để bắt đầu; thiếu thông tin công ty không cản việc sửa những phần đã đủ căn cứ.

## 2. Phân tích và map evidence

Trong `analysis.md`, tách must-have, nice-to-have, trách nhiệm, công nghệ, domain, seniority và keyword. Phân biệt yêu cầu ghi rõ với suy luận. Với mỗi requirement, chỉ rõ evidence, mức match direct/transferable/adjacent/gap và giới hạn. Không biến heuristic thành điểm ATS hay xác suất được phỏng vấn. Company research chỉ làm khi giúp quyết định nội dung, ghi nguồn riêng với dữ kiện cá nhân.

## 3. Chọn và sửa nội dung

Áp dụng `TAILORING_NOTES.md` và `CV_VOICE.md`: chọn hai hoặc ba bằng chứng phù hợp nhất, rồi quyết định thứ tự và phân bổ nội dung theo JD. Giữ sự thật không đồng nghĩa giữ nguyên cấu trúc nội dung; một bản đã phù hợp cũng không cần viết lại toàn bộ.

Ưu tiên experience/project/publication có evidence sát JD; điều chỉnh thứ tự section, số bullet và trọng tâm trong một trang. Viết trực tiếp hành động cá nhân, chức năng tạo ra hoặc kết quả đã xác nhận. Giữ Python và số liệu có giá trị khi phù hợp; không tự hạ đóng góp thành exposure/support. Keyword chỉ được thêm khi cùng nghĩa với experience; không lặp để tăng mật độ. Giữ nguyên chức danh thật; headline mục tiêu phải phân biệt với chức danh đã đảm nhiệm. Transferable/adjacent lưu trong analysis; trong CV diễn đạt chính xác việc đã làm, không tự nhận direct experience ở domain mới.

Giới hạn như local prototype/capstone đặt ở nhãn project khi đủ rõ. Benchmark và publication status phải ở đúng claim khi ảnh hưởng nghĩa. Nguồn, hash, agent receipts, kiểm chứng chưa chạy và requirement còn thiếu nằm trong hồ sơ nội bộ, không làm thành bullet CV. Không đưa feature chưa hoàn thành vào chỉ để thêm disclaimer. Giữ cả năm citation và trạng thái cụ thể, bỏ câu nhắc lại tổng số paper ở Profile/Experience theo AGENTS.

Subtitle dưới tên luôn ghi `Apply for <tên vị trí chính xác trong JD> in <tên công ty>` cho mọi CV tùy biến. Đây là vị trí ứng tuyển, không phải chức danh đã đảm nhiệm.

Sửa trực tiếp `resume.tex`. Không bắt buộc tạo bản Markdown song song: `resume.txt` trích từ PDF là bản kiểm tra và dùng để điền form. Nếu không đủ một trang, cắt nội dung ít liên quan và câu dư trước khi thay layout; không ép chữ nhỏ đến khó đọc.

Khi có báo cáo checker bên ngoài, áp dụng `JOBSCAN_NOTES.md`: phân loại từng cảnh báo trước khi sửa, không tối ưu điểm bằng claim thiếu bằng chứng.

## 4. Kiểm từng thay đổi

Ghi before/after và lý do trong `change_log.md`. Trong `evidence.md`, map từng claim mới hoặc thay đổi ý nghĩa tới source ID. Kiểm cả quan hệ: ai làm, kết quả nào thuộc project nào, thời điểm và phạm vi; con số xuất hiện đâu đó trong nguồn chưa đủ để chứng minh câu mới.

Claim có sẵn được duyệt, locator rõ và không xung đột có thể tái sử dụng; chỉ kiểm thêm phần mới hoặc có thay đổi ý nghĩa/trạng thái. Source phải hỗ trợ đúng câu: tracking không tự thành regression suite; khóa học không tự thành certification exam. Nếu một phần câu chưa có nguồn, giữ phần mạnh đã được hỗ trợ thay vì hạ giọng toàn bộ đoạn.

Rà nội dung hai chiều theo CV_VOICE: loại claim thổi phồng; khôi phục đóng góp/số liệu có giá trị bị viết yếu hoặc bị mất. Rà tiếp từ góc nhìn người đọc lướt: các bằng chứng chính có nổi bật và mỗi bullet có một ý rõ không? Ghi ngắn kết quả trong review; không thêm bảng audit vào CV.

## 5. Biên dịch và ATS audit

Từ thư mục job, chạy:

```sh
mkdir -p build
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=build resume.tex
pdflatex -no-shell-escape -interaction=nonstopmode -halt-on-error -file-line-error -output-directory=build resume.tex
pdfinfo build/resume.pdf
pdftotext build/resume.pdf resume.txt
pdftotext -layout build/resume.pdf build/resume-layout.txt
pdftoppm -scale-to 1600 -png -singlefile build/resume.pdf build/resume-preview
```

Xác nhận cả hai lần compile thành công, đúng 1 trang, log không có overfull box; đọc `resume.txt` và mở ảnh render để xem đủ nội dung, dễ đọc, không chồng/cắt chữ. Áp checklist. Ghi bằng chứng và phần chưa kiểm trong `review.md`; không gọi local extraction là đã pass parser ATS thật.

## 6. Bàn giao để bạn review

Trước bàn giao, đổi tên PDF thành `<tên_tôi>_<vị_trí>_<công_ty>.pdf`, ví dụ `NguyenMinhKhoa_MiddleAIEngineerAppliedAI_Umbalabs.pdf`. Dùng tên không dấu, không khoảng trắng; được viết ngắn vị trí/công ty nhưng phải nhận diện được. `build/resume.pdf` chỉ là tên trung gian khi compile; ghi tên/path PDF cuối vào `review.md`.

Bàn giao đủ các artifact theo AGENTS, ưu tiên link PDF và trạng thái kiểm tra trong thông báo ngắn. Chỉ nêu gap cần bạn bổ sung hoặc ảnh hưởng lớn tới cách dùng bản này; không lặp toàn bộ phân tích JD. Trạng thái `DRAFT_WAITING_USER_REVIEW` cho tới khi bạn chấp nhận. Khi upload thật, bạn rà các trường autofill trước khi gửi. Không tự nộp.
