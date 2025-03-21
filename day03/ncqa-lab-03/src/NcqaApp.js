import NcqaFuncComp from "./components/NcqaFuncComp";
import NcqaJsxExpression from "./components/NcqaJsxExpression";

function NcqaApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyen Cong Quyen Anh</h1>

      <NcqaJsxExpression />  

      <hr/>
      {/* Sử dụng function components */}
      <NcqaFuncComp />

      {/* Sử dụng class components */}
      <NcqaFuncComp></NcqaFuncComp>
    </div>
  );
}

// Đảm bảo export đúng tên
export default NcqaApp;

