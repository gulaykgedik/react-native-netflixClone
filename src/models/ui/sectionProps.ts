import { Movie } from "../data/moviesState";

interface SectionProps {
    section: {
        id: number;
        title: string;
        data: Movie[];
    };
}

export type { SectionProps };