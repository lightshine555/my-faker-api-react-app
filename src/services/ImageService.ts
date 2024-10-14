import axios from 'axios';
import { ImageResponse } from 'models/Image';

const API_URL = 'https://fakerapi.it/api/v1/images?_width=380';

export const fetchImages = async (): Promise<ImageResponse> => {
    const response = await axios.get<ImageResponse>(API_URL);
    return response.data;
};