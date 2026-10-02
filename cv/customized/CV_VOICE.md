Latest owner correction, 2026-10-02: retain the total five accepted/published paper count in Research Experience and Selected Publications; research fields are HMER, text-to-molecule generation and active learning with vision-language models. Use existing publisher/GitHub links in publication YAML files. This overrides older advice to omit repeated counts.


## Quyết định mới của chủ CV, 2026-10-02 (ưu tiên hơn hướng dẫn cũ)

Bản gốc mặc định là Nguyen-Minh-Khoa-CV-1page.tex, đồng bộ từ ../latex_source/Nguyen-Minh-Khoa-CV-1page.tex: LexiChem, Research Ops và NexOps; Profile theo giá trị đóng góp; Skills đã duyệt; ba selected citations. Mỗi JD mặc định chỉ đổi subtitle thành Apply for <target job title>, có thể thêm in <company name> khi phù hợp. Giữ nội dung, thứ tự và typography của master. Chỉ sửa keyword/nội dung khi yêu cầu cụ thể của JD thực sự cần và đã có evidence, ghi lý do; không viết lại chỉ để tạo bản khác. Không phục hồi câu Education đã bỏ hay buộc thêm hai citations vào bản một trang. Phân tích gap vẫn thực hiện, gap không được biến thành claim.

# Giọng CV: rõ, có sức nặng, đúng phạm vi

Đọc cùng `TAILORING_NOTES.md` trước khi viết. Áp dụng cho Codex, Gemini, Claude và mọi agent sửa CV trong workspace này. Đây là hướng dẫn viết cho nhà tuyển dụng; hồ sơ kiểm chứng vẫn theo `EVIDENCE.md`.

## Viết từ việc đã làm

Mỗi bullet có một ý chính: **hành động cá nhân + đối tượng cụ thể + kết quả hoặc chức năng được tạo ra**. Thêm công nghệ khi nó giúp hiểu cách làm. Không bắt buộc mọi bullet có số liệu, cả ba thành phần, hay cùng một cấu trúc câu.

- Dùng `Built`, `Developed`, `Implemented`, `Integrated`, `Designed`, `Evaluated`, `Led` khi nguồn xác nhận đúng hành động và phạm vi đó. Không tự hạ thành `helped`, `supported`, `exposure to` vì ứng viên còn đầu sự nghiệp hoặc vì dự án có đồng đội.
- Dùng `Contributed` hoặc `Co-developed` khi đó là đóng góp thực tế. Sau động từ, nói phần đã làm; tránh `Contributed to a local AI application` nếu nguồn đã ghi rõ pipeline hoặc inference integration.
- Nêu đầu ra có ích: dữ liệu sẵn sàng train, kết quả model, đường inference hoạt động, saved runs, dashboard hoặc điều khiển thiết bị. Không tự suy ra doanh thu, adoption, khả năng scale hay giảm latency từ việc có một stack.
- Giữ số liệu đã được duyệt và có ý nghĩa với JD. Đặt benchmark, baseline và phạm vi cạnh số liệu khi cần. Có số liệu tốt không đồng nghĩa phải nhét mọi metric vào một bullet.
- Profile thường gồm hai câu ngắn: công việc/chuyên môn thực tế và một hoặc hai bằng chứng phù hợp nhất. Hướng tới khoảng 30–45 từ khi đủ ý; đây là gợi ý biên tập, không phải giới hạn cứng. Không biến Profile thành danh sách toàn bộ keyword của JD.

## Kiểm chứng kỹ, diễn đạt tự nhiên

CV trình bày điều đã làm; `evidence.md`, `analysis.md` và `review.md` lưu nguồn, giới hạn và trạng thái kiểm tra.

- Không đưa SHA-256, hash receipts, source locators, audit status, agent test counts hoặc câu như `rejecting unverified AI code` vào CV để chứng minh sự cẩn thận. Chỉ chọn một chi tiết kỹ thuật như hashing nếu nó là chức năng ứng viên thực sự xây và trực tiếp có giá trị cho vị trí.
- Với dự án demo, ghi `Local MES/SCADA prototype` hoặc `Capstone project` ở nhãn phù hợp. Không lặp disclaimer ở mọi bullet. Các bullet bên dưới vẫn được viết dứt khoát về phần hoạt động đã xác nhận.
- Giữ giới hạn làm thay đổi nghĩa: ChEBI-20 capstone experiments; accepted/presented versus published; mô phỏng versus thiết bị thật; đóng góp cá nhân versus kết quả paper/team. Không xóa chúng để câu nghe mạnh hơn.
- Không liệt kê feature chưa hoàn thành chỉ để thêm câu `in development`, `not production` hay `not independently verified`. Chọn phần đã làm có giá trị và lưu phần thiếu trong hồ sơ nội bộ. Không dùng cách này để che đi phạm vi thực của claim đang giữ.
- Không viết danh sách kỹ năng thiếu trong CV. Nếu C++ mới ở mức cơ bản và đáng đưa vào, mức đó phải trung thực; nếu ít giá trị với JD, bỏ mục ấy thay vì nâng thành proficiency.
- Không yêu cầu benchmark mới, raw logs hay repository audit cho mỗi lần đổi câu của một claim đã được duyệt, có locator và không có xung đột. Chỉ xác minh thêm phần mới, thay đổi ý nghĩa, hoặc trạng thái cần cập nhật.

## Tailor bằng lựa chọn, không đổi danh tính theo JD

Chọn hai hoặc ba bằng chứng mạnh nhất cho nhu cầu chính. Đổi thứ tự project/bullet, phân bổ chỗ và dùng thuật ngữ JD khi cùng nghĩa với việc thật. Bản đã phù hợp chỉ cần chỉnh nhẹ; không đặt chỉ tiêu số dòng phải sửa hoặc thời gian phải viết lại.

- `Applied AI engineer` có thể mô tả định hướng/chuyên môn trong Profile nếu nội dung chứng minh được. Chức danh employment vẫn là `Research Assistant`; không tự đổi project role đã duyệt thành `Machine Learning Engineer` để khớp JD.
- Tránh `strong expertise`, `expert`, `highly skilled`, `cutting-edge`, `robust`, `scalable`, `production-ready` khi chỉ là tự đánh giá hoặc không được chứng minh. Chọn chi tiết có thể giải thích ở phỏng vấn. Không cấm thuật ngữ kỹ thuật như robustness khi nó là phép đánh giá thực sự.
- Nêu `BioT5+` và bài toán text-to-molecule khi đó là bằng chứng. Không đổi alignment thành RAG, prompt normalization thành prompt engineering chuyên sâu, hoặc W&B experiment tracking thành automated regression gates. Một thuật ngữ LLM rộng không chứng minh đã làm chatbot, tool calling hay retrieval.
- HMER có thể được diễn giải là nhận dạng ảnh công thức thành LaTeX. Không từ đó tự nhận đã làm document layout extraction, OCR APIs, detection, face recognition hay segmentation.
- CorrTie chứng minh critical review/methodological refinement theo nguồn hiện tại; coauthorship không tự chứng minh đã train/implement VLMs. Triton không tự chứng minh TensorRT, CUDA optimization hay distributed training. Telemetry không tự chứng minh model drift monitoring/AIOps.
- PyTorch có thể đáp ứng JD ghi `TensorFlow or PyTorch`. Không thêm TensorFlow/Keras để tạo cảm giác match đủ danh sách. Giữ Python rõ trong Skills nếu được nguồn xác nhận; không coi PyTorch là chữ thay thế Python.
- Khóa AWS giữ đúng loại khóa học; credential TensorFlow giữ đúng tên `DeepLearning.AI TensorFlow Developer Professional Certificate` khi dùng nguồn full CV hiện tại. Không viết `TensorFlow (Certified Developer)` hoặc nâng thành certification exam.
- Giữ năm citation đầy đủ theo `AGENTS.md`; không nhắc lại tổng số paper ở Profile/Experience. Một first-author result hoặc một đóng góp paper cụ thể có thể dùng khi có giá trị, với trạng thái đúng.
- Cân nhắc giữ giải/funding có ý nghĩa sản phẩm trước khi thay bằng khóa học hoặc keyword yếu. Funding thuộc đúng project/team; không biến khoản của TrendRadar thành traction của NexOps/LexiChem. Không bắt buộc mọi JD phải giữ toàn bộ giải.

## Ví dụ cân bằng, không phải CV mới

Những câu dưới dùng nguồn đã có trong workspace cha; khi đưa vào một job thật, map lại claim trong `evidence.md` và chọn theo JD.

**Profile cho AI/ML engineering:**

> Applied AI engineer and Research Assistant at AiTA Lab, FPT University, developing deep-learning models, training data pipelines and inference services. Work includes text-to-molecule generation with BioT5+ and model integration using FastAPI and NVIDIA Triton.

**Data engineering trong LexiChem:**

> Built a preprocessing pipeline for 693,090 training examples across L+M-24, Mol-Instructions and ChEBI-20, using RDKit validation, deduplication and SMILES-to-SELFIES conversion.

**Inference integration trong LexiChem:**

> Integrated FastAPI and NVIDIA Triton inference with RDKit structure checks and MongoDB storage, enabling molecule generation, comparison and saved experiment runs.

**Kết quả nghiên cứu trong đúng phạm vi:**

> Developed shared-latent alignment for BioT5+; capstone ChEBI-20 experiments improved BLEU from 87.2 to 88.8 while maintaining 100% molecular validity.

**NexOps, dưới nhãn Local MES/SCADA prototype:**

> Built the MQTT/EMQX–FastAPI–TimescaleDB telemetry pipeline, connecting machine and simulator events to live dashboards, alarms and shift OEE.

> Integrated a Bambu Lab printer over LAN to demonstrate device control alongside simulated machine workflows.

Nguồn ví dụ: `../latex_source/Nguyen-Minh-Khoa-CV-1page.tex` (Profile, LexiChem, NexOps); `../latex_source/Nguyen-Minh-Khoa-CV-full-project.tex` (LexiChem, HMER, credentials); `../content.json` (projects lexichem/nexops/hmer); `../../src/content/cases/en/lexichem.md` (What I built); `../../src/content/cases/en/nexops.md` (My role). Các metric là số đã ghi trong nguồn CV được duyệt, không phải benchmark chạy lại trong đợt audit này.

## Rà hai chiều trước bàn giao

1. **Có thổi phồng không?** Từng claim chính có nguồn cho hành động, actor, đầu ra, benchmark và trạng thái; tên kỹ năng không vượt việc đã làm.
2. **Có tự làm yếu không?** Đóng góp được viết trực tiếp; không mất Python, số liệu có giá trị hoặc capability thật; không nhét quy trình kiểm chứng vào CV.
3. **Có phục vụ người đọc không?** Người đọc lướt có nhận ra hai hoặc ba bằng chứng phù hợp nhất; bullet có một ý chính; keyword và disclaimer không che mất kết quả.

Ghi nhận xét nội bộ ngắn trong `review.md`. Không gọi giọng tự tin là bằng chứng, cũng không gọi giọng dè dặt là độ chính xác.
