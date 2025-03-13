import apiClient from "@/shared/api/client";
import {ApiResponse, Product} from "@/shared/api/types/courses";
import {AxiosResponse} from "axios";

export const getCoursesList = async (take): Promise<Product[] | null> => {
  try {
    const resp: AxiosResponse<ApiResponse> = await apiClient.get(`/products?take=${take}`);
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

export const getWebinars = async () => {
  try {
    const response = await apiClient.get('/webinars')
    if(response.data) {
      return response.data.body.items
    }
  } catch (error) {
    console.log(error)
  }
}

export const registerToWebinar = async (email:string, name:string, webinarId: string) => {
  const data = {
    webinarId,
    email,
    firstName: name,
    role: "guest",
    sendEmail: true
  }
  try {
    const resp = await apiClient.post('/addUserToWebinar', data);
    console.log('resp',resp)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}