import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BeerCatalog } from '../components/useBeerCatalog';

const baseAPIInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

baseAPIInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const getBeers = async (page: number, count: number, food: string) =>
  baseAPIInstance.get<BeerCatalog>(`beers?page=${page}&per_page=${count}${food}`);
