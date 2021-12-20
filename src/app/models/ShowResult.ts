export interface ShowResult {
    score: number;
    show: {
        id: number;
        name: string;
        image?: {
            medium: string;
            original: string;
        }
    }
}