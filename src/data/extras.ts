import type { Localized } from '../lib/site';

export type GalleryPhoto = {
  src: string; // e.g. /media/conference-poster.webp
  alt: Localized;
  caption: Localized; // Event · location · year
  width: number;
  height: number;
  position?: string; // Optional thumbnail crop, e.g. '50% 30%'
};

export type GalleryGroup = { id: string; title: Localized; photos: GalleryPhoto[] };
const dimensions: Record<string, [number, number]> = {
  'apweb-stage': [1400,1050], 'apweb-backdrop': [900,1200], 'capstone-team': [900,1200],
  'capstone-defense': [900,1200], 'icdar-poster': [900,1200], 'icdar-registration': [1080,659],
  'resfes-2025-team': [1400,934], 'resfes-2026-certificate': [540,1200], 'pitching-team': [1400,933],
  'innovation-quest': [973,688], 'resfes-finalists': [1400,990], 'excap-team': [1400,933], 'math-medal': [540,1200],
};
const photo = (id: string, en: string, vi: string): GalleryPhoto => ({ src: `/media/events/${id}.webp`, alt: { en, vi }, caption: { en, vi }, width: dimensions[id][0], height: dimensions[id][1] });
export const gallery: GalleryGroup[] = [
  { id: 'apweb', title: { en: 'APWeb-WAIM · Da Nang · 2026', vi: 'APWeb-WAIM · Đà Nẵng · 2026' }, photos: [photo('apweb-stage', 'LexiChem presented at APWeb-WAIM 2026.', 'LexiChem tại APWeb-WAIM 2026.'), photo('apweb-backdrop', 'At the APWeb-WAIM conference venue.', 'Tại địa điểm tổ chức APWeb-WAIM.')] },
  { id: 'capstone', title: { en: 'LexiChem · Capstone defense · 2026', vi: 'LexiChem · Bảo vệ đồ án · 2026' }, photos: [photo('capstone-team', 'The three-person LexiChem capstone team.', 'Nhóm ba thành viên của đồ án LexiChem.'), photo('capstone-defense', 'LexiChem thesis defense at FPT University.', 'Buổi bảo vệ đồ án LexiChem tại Đại học FPT.')] },
  { id: 'icdar', title: { en: 'ICDAR · Wuhan · 2025', vi: 'ICDAR · Vũ Hán · 2025' }, photos: [photo('icdar-poster', 'Discussion around the Mask CoMER poster.', 'Trao đổi tại poster Mask CoMER.'), photo('icdar-registration', 'At ICDAR 2025.', 'Tại ICDAR 2025.')] },
];
export const visibleGallery = gallery.filter(g => g.photos.length);
type Recognition = { id: string; year: number; title: Localized; detail: Localized; photo: GalleryPhoto };
export const awards: Recognition[] = [
  { id: 'resfes-2026', year: 2026, title: { en: 'RESFES HCMC · Second Prize', vi: 'RESFES TP.HCM · Giải Nhì' }, detail: { en: 'ChemAligner-T5 · Spring 2026 student research competition at FPT University HCMC.', vi: 'ChemAligner-T5 · Cuộc thi nghiên cứu khoa học Spring 2026 tại Đại học FPT TP.HCM.' }, photo: photo('resfes-2026-certificate', 'ChemAligner-T5 participation certificate', 'Chứng nhận tham gia ChemAligner-T5') },
  { id: 'resfes-2025', year: 2025, title: { en: 'RESFES HCMC · Second Prize', vi: 'RESFES TP.HCM · Giải Nhì' }, detail: { en: 'Mask CoMER · Student research competition at FPT University HCMC.', vi: 'Mask CoMER · Cuộc thi nghiên cứu khoa học tại Đại học FPT TP.HCM.' }, photo: photo('resfes-2025-team', 'Team at the award ceremony', 'Nhóm tại lễ trao giải') },
  { id: 'pitching-2025', year: 2025, title: { en: 'Demo Pitching Day · VND 50 million', vi: 'Demo Pitching Day · 50 triệu đồng' }, detail: { en: 'Team award and project funding from FPT University.', vi: 'Giải thưởng và tài trợ cấp nhóm từ Đại học FPT.' }, photo: photo('pitching-team', 'Team at Demo Pitching Day 2025', 'Nhóm tại Demo Pitching Day 2025') },
  { id: 'innovation-2025', year: 2025, title: { en: 'Innovation Quest · VND 40 million', vi: 'Innovation Quest · 40 triệu đồng' }, detail: { en: 'SIHUB · FrontAI team · TrendRadar project. Includes the VND 10 million team reward.', vi: 'SIHUB · Nhóm FrontAI · Dự án TrendRadar. Trong đó có 10 triệu đồng tiền thưởng nhóm.' }, photo: photo('innovation-quest', 'TrendRadar selected for Innovation Quest 2025.', 'TrendRadar được tuyển chọn vào Innovation Quest 2025.') },
];
export const otherActivities: Recognition[] = [
  { id: 'resfes-finalists', year: 2026, title: { en: 'RESFES inter-campus finals · Participation', vi: 'Chung kết RESFES liên cơ sở · Tham gia' }, detail: { en: 'AlphaChem team · LexiChem · Reached the final round; no award.', vi: 'Nhóm AlphaChem · LexiChem · Tham dự vòng chung kết, không đạt giải.' }, photo: photo('resfes-finalists', 'RESFES HCMC IT final-round roster, round 2: AlphaChem.', 'Danh sách chung kết CNTT RESFES TP.HCM đợt 2: AlphaChem.') },
  { id: 'excap', year: 2025, title: { en: 'EXCAP · Participation', vi: 'EXCAP · Tham gia' }, detail: { en: 'TrendRadar project · no award.', vi: 'Dự án TrendRadar · không đạt giải.' }, photo: photo('excap-team', 'The TrendRadar team at EXCAP 2025.', 'Nhóm TrendRadar tại EXCAP 2025.') },
  { id: 'math-medal', year: 2021, title: { en: 'HCMC Open April Olympiad · Silver Medal', vi: 'Olympic Tháng 4 TP.HCM mở rộng · Huy chương Bạc' }, detail: { en: 'Mathematics · Grade 11.', vi: 'Môn Toán · Khối 11.' }, photo: photo('math-medal', 'Silver medal, HCMC Open April Olympiad 2021.', 'Huy chương Bạc Olympic Tháng 4 TP.HCM mở rộng 2021.') },
];
export const contributionRepositories = [
  {
    name: 'Lightly',
    url: 'https://github.com/lightly-ai/lightly',
    pullRequests: [
      { number: 2050, url: 'https://github.com/lightly-ai/lightly/pull/2050', title: { en: 'Fix masked attention with gradient checkpointing', vi: 'Sửa masked attention khi dùng gradient checkpointing' } },
    ],
  },
  {
    name: 'Bernstein',
    url: 'https://github.com/sipyourdrink-ltd/bernstein',
    pullRequests: [
      { number: 3672, url: 'https://github.com/sipyourdrink-ltd/bernstein/pull/3672', title: { en: 'Authenticate projection audit evidence', vi: 'Xác thực bằng chứng kiểm toán projection' } },
      { number: 3673, url: 'https://github.com/sipyourdrink-ltd/bernstein/pull/3673', title: { en: 'Disclose tool host effects', vi: 'Công bố tác động của công cụ lên hệ thống' } },
    ],
  },
];
