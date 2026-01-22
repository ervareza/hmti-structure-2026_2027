import { Member, DivisionType } from './types';

export const ORGANIZATION_NAME = "HMPS-TI UNISBANK";
export const ORGANIZATION_FULL_NAME = "Himpunan Mahasiswa Program Studi Teknik Informatika";
export const UNIVERSITY_NAME = "Universitas Stikubank (UNISBANK) Semarang";
export const ORGANIZATION_YEAR = "2026/2027";

export const MEMBERS: Member[] = [
  { no: 1, name: "Ervareza Naurian Novantila", nim: "24.01.53.0018", role: "DIRECTOR", division: DivisionType.EXECUTIVE, isLeader: true },
  { no: 2, name: "Novelyna Fadhila Azzahra", nim: "24.01.53.0032", role: "VICE DIRECTOR", division: DivisionType.EXECUTIVE, isLeader: true },
  { no: 3, name: "Dissya Alzena", nim: "24.01.53.0025", role: "SECRETARY 1", division: DivisionType.EXECUTIVE },
  { no: 4, name: "Halima Chairunisa Lestaluhu", nim: "25.01.53.0013", role: "SECRETARY 2", division: DivisionType.EXECUTIVE },
  { no: 5, name: "Go, Vellisa Berliana Putri", nim: "24.01.53.0006", role: "TREASURER 1", division: DivisionType.EXECUTIVE },
  { no: 6, name: "Alif Faida", nim: "25.01.53.0014", role: "TREASURER 2", division: DivisionType.EXECUTIVE },
  
  // INTEX (Internal & External)
  { no: 7, name: "Riris Rahmawati", nim: "24.01.53.0034", role: "COORDINATOR", division: DivisionType.INTEX, isLeader: true },
  { no: 8, name: "Anisa Syifa Puspasari", nim: "24.01.53.0031", role: "MEMBER", division: DivisionType.INTEX },
  { no: 9, name: "Boby Harjuna Pangestu", nim: "24.01.53.0036", role: "MEMBER", division: DivisionType.INTEX },
  { no: 10, name: "Nur Jihan Salsabila", nim: "25.01.53.0012", role: "MEMBER", division: DivisionType.INTEX },
  { no: 11, name: "Nur Ihsan Fauzi", nim: "25.01.53.0001", role: "MEMBER", division: DivisionType.INTEX },
  { no: 12, name: "Salsabeela Devita S. N", nim: "25.01.53.0017", role: "MEMBER", division: DivisionType.INTEX },
  { no: 13, name: "Muhammad Ikhlashul A.", nim: "25.01.53.0003", role: "MEMBER", division: DivisionType.INTEX },

  // KOMINFO (Media & Info)
  { no: 14, name: "Rafif Nararya", nim: "24.01.53.0009", role: "COORDINATOR", division: DivisionType.KOMINFO, isLeader: true },
  { no: 15, name: "Fathur Rohman", nim: "24.01.53.0030", role: "MEMBER", division: DivisionType.KOMINFO },
  { no: 16, name: "Raditya Averino Wahyudi", nim: "25.01.53.0005", role: "MEMBER", division: DivisionType.KOMINFO },
  { no: 17, name: "M. Rizki Agil Prakoso", nim: "25.01.53.0015", role: "MEMBER", division: DivisionType.KOMINFO },
  { no: 18, name: "Dhavi Rachmatul Afif", nim: "25.01.53.0018", role: "MEMBER", division: DivisionType.KOMINFO },

  // LITBANG (Research & Dev)
  { no: 19, name: "Anisa Fadhila", nim: "24.01.53.0010", role: "COORDINATOR", division: DivisionType.RND, isLeader: true },
  { no: 20, name: "Raflian Taofiq Z.M", nim: "24.01.53.0008", role: "MEMBER", division: DivisionType.RND },
  { no: 21, name: "Risya Heny Putri Sukmawar", nim: "25.01.53.0008", role: "MEMBER", division: DivisionType.RND },
  { no: 22, name: "Dihandra Dwi A.", nim: "25.01.53.0009", role: "MEMBER", division: DivisionType.RND },
  { no: 23, name: "Galih Adhi Ramadhani", nim: "25.01.53.0004", role: "MEMBER", division: DivisionType.RND },

  // MINBA (Talent & Interest)
  { no: 24, name: "Adrianus Bagus Setiaji", nim: "24.01.53.0033", role: "COORDINATOR", division: DivisionType.TALENT, isLeader: true },
  { no: 25, name: "Rangga Satria Yudha", nim: "24.01.53.0035", role: "MEMBER", division: DivisionType.TALENT },
  { no: 26, name: "Kallio Pratama", nim: "24.01.53.0026", role: "MEMBER", division: DivisionType.TALENT },
  { no: 27, name: "Akbar Saputra", nim: "25.01.53.0016", role: "MEMBER", division: DivisionType.TALENT },
  { no: 28, name: "Girion Kagoya", nim: "25.01.53.0010", role: "MEMBER", division: DivisionType.TALENT },
  { no: 29, name: "Agung Putra Ramadhan", nim: "25.01.53.0002", role: "MEMBER", division: DivisionType.TALENT },
];