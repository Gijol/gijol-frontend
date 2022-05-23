import axios from 'axios';

class HTTPError extends Error {
  constructor(message?: string) {
    super(message); // 반드시 호출해야함
    this.name = `HTTPError`;
  }
}

const getResult = async (courseFile: File, majorValue: string) => {
  const BASE_URL = process.env.REACT_APP_API;
  const formData = new FormData();
  formData.append('majorType', majorValue);
  formData.append('multipartFile', courseFile);

  const response = await axios.post(`${BASE_URL}/graduation`, formData);
  if (response.status === 405) {
    throw new HTTPError('지원하지 않는 학번입니다');
  }
  if (response.status === 500) {
    throw new HTTPError('파일 입력 오류');
  }
  return response.data;
};

export default getResult;
