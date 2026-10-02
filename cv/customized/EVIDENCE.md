Latest owner correction, 2026-10-02: retain the total five accepted/published paper count in Research Experience and Selected Publications; research fields are HMER, text-to-molecule generation and active learning with vision-language models. Use existing publisher/GitHub links in publication YAML files. This overrides older advice to omit repeated counts.


## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# Quy tắc giữ đúng thông tin

Bộ này chưa tạo master career document. Bản CV nền và các tài liệu được bạn chỉ định là đầu vào; chỉ đọc thêm nguồn cần cho claim đang sửa. Không thu thập toàn bộ thư mục cá nhân để tìm thành tích.

Mỗi nguồn trong job có ID, đường dẫn hoặc URL, section/dòng/trang, trích đoạn hỗ trợ, ngày kiểm và trạng thái: user-confirmed / documented / unresolved. Nguồn chưa thống nhất phải được giải quyết hoặc claim bị bỏ khỏi draft.

- Không tự điền tháng hay năm thiếu; không dùng tháng giả để đáp ứng formatter.
- Không đổi chức danh chính thức thành chức danh target role hoặc nâng seniority.
- Giữ team contribution khác personal ownership; prototype/demo khác production.
- Giữ accepted, presented, published và submitted riêng biệt; xác minh trạng thái mới trước khi cập nhật.
- Không quy metric của paper/upstream cho kết quả cá nhân; giữ benchmark, baseline và đơn vị khi cần để câu không sai nghĩa.
- Coursework/certificate of completion không tự thành professional certification.
- Skills phải có nguồn thực hành hoặc xác nhận; JD keyword không tạo evidence.
- Bản tailored trước chỉ là nguồn phụ: truy ngược claim về căn cứ, tránh tích lũy embellishment qua nhiều lần rewrite.

## Kiểm nghĩa, không chỉ có đường dẫn

Nguồn phải hỗ trợ đúng hành động, người thực hiện, đối tượng, kết quả và phạm vi của câu. Không dùng một dòng Skills, stack của cả project, hoặc nhãn `Verified` của agent thay cho bằng chứng đóng góp. Nếu nguồn chỉ hỗ trợ một phần câu, tách và giữ phần đã được hỗ trợ.

- W&B/MLflow tracking không tự chứng minh automated regression suites, CI gates hoặc theo dõi model sau deployment.
- BioT5+ alignment và SMILES/SELFIES conversion không tự chứng minh retrieval, vector database, RAG hay tool calling.
- Với LexiChem, nguồn portfolio hiện tại phân biệt ChEBI-20 capstone experiments với bài APWeb-WAIM dùng L+M-24. Không đặt venue sau metric khác benchmark làm người đọc hiểu là paper result.
- Với CorrTie, kiểm đóng góp critical review/methodological refinement; không suy ra ứng viên đã implement/train VLM chỉ từ coauthorship.
- Credential giữ đúng tên và loại; credential đào tạo TensorFlow không cho phép viết `Certified Developer`, khóa AWS không chứng minh cloud deployment.
- Nguồn cũ có thể xung đột: full CV có chỗ gọi phần viết LexiChem là paper, trong khi context §2.1 giới hạn xác nhận ấy ở capstone report. Chỉ dùng claim viết paper khi có xác nhận riêng; không coi mọi dòng trong full CV là không thể sai.

Source locator kèm supporting text phải có thật và được đọc, không tạo citation trỏ về đoạn gần đúng. Claim được duyệt và không đổi nghĩa có thể tái sử dụng bằng source ID; không cần audit repository hoặc chạy lại benchmark mỗi lần sửa wording. Khi phát hiện xung đột, kiểm đúng phần đó hoặc bỏ phần chưa rõ.

## Thể hiện trên CV

Lưu locator, supporting text, trạng thái kiểm chứng, unknown requirements và phạm vi chưa chạy trong hồ sơ Markdown. Trên CV dùng hành động trực tiếp và phạm vi tối thiểu đủ đúng nghĩa theo `CV_VOICE.md`. Không thêm hash, agent receipts hoặc một chuỗi disclaimer để chứng minh tính trung thực. Việc đã có nguồn không cần dùng giọng giả định; việc chưa có nguồn không được viết mạnh lên bằng tính từ.

Không có validator tự động chứng minh zero fabrication trong bộ này. Audit claim theo nguồn là bước bắt buộc; nếu sau này thêm code checker, nó chỉ bổ sung kiểm tra, không thay việc kiểm nghĩa và attribution.
