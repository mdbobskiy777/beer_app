import axios, { AxiosInstance, AxiosResponse } from 'axios';

/* type GeocodingData = { name: string; lat: number; lon: number; country: string };

type GeogeocodingResponse = GeocodingData[]; */

const baseAPIInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

baseAPIInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const getBeers = async (page: number, count: number, food: string) =>
  baseAPIInstance.get(`beers?page=${page}&per_page=${count}${food}`);
