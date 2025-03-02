import apiClient from "@/shared/api/client";
import {ApiResponse, Product} from "@/shared/api/types/courses";
import {AxiosResponse} from "axios";

export const getCoursesList = async (): Promise<Product[] | null> => {
  try {
    const resp: AxiosResponse<ApiResponse> = await apiClient.get('/products');
    if (resp.data) {
      return resp.data.body.items;
    }
    return null;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Ошибка при запросе курсов:', error.message);
    } else {
      console.error('Неизвестная ошибка:', error);
    }
    return null;
  }
};

export const loginUser = async (email:string, password: string) => {
  try {
    const resp = await apiClient.post('/api/login',{
      email,
      password
    })
    console.log('resp',resp)
    if(resp.data.body) {
      localStorage.setItem('token',resp.data.body.accessToken)
      return resp.data.body
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Ошибка при входе: ' + error.message);
    }
    throw new Error('Ошибка при входе: неизвестная ошибка');
  }
}