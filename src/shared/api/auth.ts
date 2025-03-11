import apiClient from "@/shared/api/client";

export const loginUser = async (email: string, password: string) => {
  try {
    const resp = await apiClient.post('/api/login', { email, password });

    if (resp.data.body) {
      const { accessToken, refreshToken } = resp.data.body;

      // Сохраняем в localStorage (для клиентских запросов)
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

export const redirectToCourse = async () => {
  try {
    // Достаем accessToken из localStorage (или откуда ты его хранишь)
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken) {
      console.error('Токен не найден');
      return;
    }

    // Делаем запрос на сервер с передачей accessToken
    const response = await apiClient.get('/api/redirect-to-course', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'refresh-token': refreshToken,
      },
      withCredentials: true, // Включаем передачу кук
    });
    console.log('response',response)

    // Если сервер вернул редирект, обрабатываем его на клиенте
    if (response.status === 200) {
      window.location.href = response.data.url;
    }
  } catch (error) {
    console.error('Ошибка при редиректе:', error);
  }
};



