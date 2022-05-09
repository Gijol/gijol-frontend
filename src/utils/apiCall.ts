import axios, { AxiosResponse } from 'axios';
import Header from 'common/header/header';
import { url } from 'inspector';
import Result from './api/result';
import api from './baseApi';
class HTTPError extends Error {
  // statusCode: number;
  constructor(message?: string) {
    super(message); // 반드시 호출해야함
    this.name = `HTTPError`;
  }
}

const getResult = async (courseFile: File, majorValue: string) => {
  const formData = new FormData();
  formData.append('majorType', majorValue!);
  formData.append('multipartFile', courseFile!);

  // api.post('/graduation', formData, Header{ 'Content-Type': 'multipart/form-data' });
  const response = axios.post('https://dev-api.gijol.im/graduation', formData);
  // return response;
  console.log(response);
};

// async function getResult(courseFile: File, majorValue: string) {
//   const formData = new FormData();
//   formData.append('majorType', majorValue!);
//   formData.append('multipartFile', courseFile!);

//   try {
//     await axios({
//       method: 'post',
//       url: 'https://dev-api.gijol.im/graduation',
//       data: formData,
//       headers: { 'Content-Type': 'multipart/form-data' },
//     }).then((response: any) => {
//       console.log(response.data);
//       return response.data;
//     });
//   } catch (e: any) {
//     // throw new HTTPError(e.statusCode);
//     // return e;
//   }
// }

export default getResult;
