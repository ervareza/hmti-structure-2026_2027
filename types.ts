export interface Member {
  no: number;
  name: string;
  nim: string;
  role: string;
  division?: string; // Derived helper field for filtering
  isLeader?: boolean; // Helper for styling
}

export enum DivisionType {
  EXECUTIVE = 'Executive Board',
  INTEX = 'Internal & External',
  KOMINFO = 'Media & Info',
  RND = 'Research & Dev',
  TALENT = 'Talent & Interest'
}