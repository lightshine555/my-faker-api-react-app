export interface ImageData {
    title: string;
    description: string;
    url: string;
}

export interface ImageResponse {
    status: string;
    code: number;
    locale: string;
    seed: string | null;
    total: number;
    data: ImageData[];
}