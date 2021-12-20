export interface ShowDetails {
    id: number;
    genres: string[];
    image?: {
        medium: string;
        original: string;
    };
    language: string;
    name: string;
    officialSite: string;
    premiered: string;
    rating: {
        average: number;
    };
    status: string;
    summary: string;
    externals: {
        imdb: string;
        thetvdb: number;
    }
}