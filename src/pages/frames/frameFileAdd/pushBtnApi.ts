import getResult from 'utils/apiCall';

const callGraduateApi = (
  courseFile: File | null,
  majorValue: string | undefined,
) => {
  if (courseFile === null) {
    alert('성적표 파일을 업로드 해주세요');
    return;
  }
  if (majorValue === null || majorValue === undefined) {
    alert('학과를 선택해주세요');
    return;
  }
  getResult(courseFile, majorValue);
};

export default callGraduateApi;
