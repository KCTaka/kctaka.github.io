export interface CardData {
    id: string | number; // Changed from number
    title: string;
    description: string;
    github_link: string | null;
    demo_link: string | null;
    page_link: string | null;
    categories?: string[];
    featured?: boolean | null; // Added featured property
}
