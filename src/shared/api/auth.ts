import apiClient from "@/shared/api/client";

export const loginUser = async (email: string, password: string) => {
  try {
    const resp = await apiClient.post('/api/login', { email, password });

    if (resp.data.body) {
      const { accessToken, refreshToken } = resp.data.body;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      return resp.data.body;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Ошибка при входе: ' + error.message);
    }
    throw new Error('Ошибка при входе: неизвестная ошибка');
  }
};



