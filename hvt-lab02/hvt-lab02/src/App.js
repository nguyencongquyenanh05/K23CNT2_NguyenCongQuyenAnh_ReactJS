import React from "react";
import HvtCompInfor from "./HvtCompInfor";

function App() {
  // Dữ liệu thông tin cá nhân
  const personalInfo = {
    name: "Nguyễn Công Quyền Anh",
    studentId: "2310900006",
    birthDate: "23/11/2005",
    phone: "0369464826",
    class: "K23CNT2",
  };

  return (
    <div className="App">
      <h1>Thông tin cá nhân</h1>
      <HvtCompInfor info={personalInfo} />
    </div>
  );
}

export default App;
