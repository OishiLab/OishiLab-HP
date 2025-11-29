export interface NewsItem {
  date: string;
  title: string;
  category: 'Publication' | 'Project' | 'Event' | 'Other';
  link?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  details?: string; // Detailed description for modal
}

export interface Member {
  name: string;
  role: string; // e.g., "Professor", "Ph.D. Student", "Master Student", "Undergraduate"
  grade?: string; // e.g., "D1", "M1", "B4"
  photo?: string;
  bio?: string;
  email?: string;
  researchAreas?: string[];
  researchTopic?: string; // For students
  publications?: Array<{
    title: string;
    link: string;
  }>;
}

export interface PublicationPaper {
  title: string;
  authors: string;
  "journal/conference": string;
  date?: string; // Publication date (e.g., "2025.03.15")
  award?: string;
  link?: string; // Link to PDF or DOI
}

export interface PublicationYear {
  year: number;
  papers: PublicationPaper[];
}

