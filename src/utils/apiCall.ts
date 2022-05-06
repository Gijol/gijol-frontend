import axios from 'axios';

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
    }).then((response: any) => console.log(response));
  } catch (e: any) {
    console.log(e);
  }
}

export default getResult;
