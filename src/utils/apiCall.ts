import axios from 'axios';

class HTTPError extends Error {
  // statusCode: number;
  constructor(message?: string) {
    super(message); // 반드시 호출해야함
    this.name = `HTTPError`;
    // this.statusCode = statusCode;
  }
}

async function getResult(courseFile: File, majorValue: string) {
  const formData = new FormData();
  formData.append('majorType', majorValue!);
  formData.append('multipartFile', courseFile!);

  try {
    await axios({
      method: 'post',
      url: 'https://dev-api.gijol.im/graduation',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((response: any) => {
      console.log(response.data);
      return response.data;
    });
  } catch (e: any) {
    throw new HTTPError(e.statusCode);
  }
}

export default getResult;
