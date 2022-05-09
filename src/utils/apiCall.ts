import axios, { AxiosResponse } from 'axios';
import api from './baseApi';

class HTTPError extends Error {
  constructor(message?: string) {
    super(message); // 반드시 호출해야함
    this.name = `HTTPError`;
  }
}

const getResult = async (courseFile: File, majorValue: string) => {
  const formData = new FormData();
  formData.append('majorType', majorValue!);
  formData.append('multipartFile', courseFile!);

  const response = await axios.post(
    'https://dev-api.gijol.im/graduation',
    formData,
  );
  if (response.status === 200) {
    return response.data;
  }
  const error = new HTTPError('파일 입력 오류 발생');
  return error;
};

export default getResult;
