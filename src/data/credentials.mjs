// Titles and verification links transcribed from user-supplied Coursera PDFs.
// source is private provenance; only the generated image is copied to public/.
const credential = (id, title, issuer, date, kind, group, verification, source, featured = false) => ({
  id, title, issuer, date, year: date.slice(0, 4), kind, group, url: `https://coursera.org/verify/${verification}`,
  source, featured, platform: 'Coursera', image: `/media/credentials/${id}.webp`,
});
export const credentials = [
  credential('machine-learning', 'Machine Learning', 'DeepLearning.AI · Stanford Online', '2023-10-26', 'Specialization', 'ai', 'specialization/S7AANQJWG45T', 'Machine Learning.pdf', true),
  credential('deep-learning', 'Deep Learning', 'DeepLearning.AI', '2024-11-18', 'Specialization', 'ai', 'specialization/V53DHCIYUFQT', 'Deep Learning.pdf'),
  credential('nlp', 'Natural Language Processing', 'DeepLearning.AI', '2025-02-15', 'Specialization', 'ai', 'specialization/PUBU3HAXQZ2C', 'Natural Language Processing.pdf'),
  credential('ibm-full-stack', 'IBM Full Stack Software Developer', 'IBM', '2024-11-08', 'Professional Certificate', 'engineering', 'professional-cert/707H6DGG2AUT', 'IBM Full Stack Software Developer.pdf', true),
  credential('aws-cloud', 'AWS Cloud Technical Essentials', 'Amazon Web Services', '2025-08-15', 'Course', 'engineering', 'CD3S1VBD11P7', 'AWS Cloud Technical Essentials.pdf', true),
  credential('tensorflow', 'DeepLearning.AI TensorFlow Developer', 'DeepLearning.AI', '2025-05-18', 'Professional Certificate', 'ai', 'professional-cert/ZDNRZ6BWO29J', 'DeepLearning.AI TensorFlow Developer.pdf'),
  credential('big-data', 'Big Data', 'University of California San Diego', '2024-11-06', 'Specialization', 'ai', 'specialization/MK2EC6H8PTOC', 'Big Data.pdf'),
  credential('ai-ethics', 'Ethics in the Age of AI', 'LearnQuest', '2024-01-17', 'Specialization', 'ai', 'specialization/XFQ3XUU7J3FH', 'Ethics in the Age of AI.pdf'),
  credential('ai-foundations', 'AI Foundations for Everyone', 'IBM', '2023-12-03', 'Specialization', 'ai', 'specialization/UP3R7C7FB99T', 'AI Foundations for Everyon.pdf'),
  credential('intro-ai', 'Introduction to AI', 'Google', '2026-07-14', 'Course', 'ai', 'DTARDKMQBKR9', 'Introduction to AI.pdf'),
  credential('software-lifecycle', 'Software Development Lifecycle', 'University of Minnesota', '2024-06-10', 'Specialization', 'engineering', 'specialization/8K2GAVEM5SAQ', 'Software Development Lifecycle.pdf'),
  credential('research-methodologies', 'Research Methodologies', 'Queen Mary University of London', '2025-05-18', 'Course', 'research', '0X1N8XYXNIAC', 'Research Methodologies.pdf', true),
  credential('being-researcher', 'Being a researcher (in Information Science and Technology)', 'Politecnico di Milano', '2025-05-18', 'Course', 'research', '66AKUTP6Z8H2', 'Being a researcher (in Information Science and Technology).pdf'),
  credential('research-methods', 'Understanding Research Methods', 'University of London · SOAS University of London', '2025-05-18', 'Course', 'research', 'FCQAEOFRO7A3', 'Understanding Research Methods.pdf'),
  credential('essay-research', 'Introduction to Research for Essay Writing', 'University of California, Irvine', '2025-05-18', 'Course', 'research', '4CI23FK7GEDG', 'Introduction to Research for Essay Writing.pdf'),
  credential('advanced-writing', 'Advanced Writing', 'University of California, Irvine', '2025-05-18', 'Course', 'research', 'LD3KAFWS0T6H', 'Advanced Writing.pdf'),
  credential('academic-skills', 'Academic Skills for University Success', 'The University of Sydney', '2023-05-09', 'Specialization', 'research', 'specialization/TXBSABPP3FY6', 'Academic Skills for University Success.pdf'),
  credential('project-management', 'Project Management Principles and Practices', 'University of California, Irvine', '2025-05-18', 'Specialization', 'management', 'specialization/VYTC3ZA1FV6F', 'Project Management Principles and Practices.pdf', true),
];
export const aioModules = [
  { id: 'aio-ml', title: 'Machine Learning', source: 'certificate_machine_learning_nguyen_minh_khoa_32560785.png' },
  { id: 'aio-dl', title: 'Deep Learning', source: 'certificate_deep_learning_nguyen_minh_khoa_45221767.png' },
  { id: 'aio-cv-nlp', title: 'Computer Vision and NLP', source: 'certificate_cv_and_nlp_nguyen_minh_khoa_19410435.png' },
  { id: 'aio-genai', title: 'GenAI and LLMs', source: 'certificate_genai_llm_nguyen_minh_khoa_19671553.png' },
].map(c => ({ ...c, image: `/media/credentials/${c.id}.webp` }));
