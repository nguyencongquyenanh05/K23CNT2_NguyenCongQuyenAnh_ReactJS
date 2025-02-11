import React from "react";

function HvtCompInfor({ info }) {
  return (
    <div>
      <h2>Họ và tên: {info.name}</h2>
      <p><strong>Mã sinh viên:</strong> {info.studentId}</p>
      <p><strong>Ngày sinh:</strong> {info.birthDate}</p>
      <p><strong>Số điện thoại:</strong> {info.phone}</p>
      <p><strong>Lớp:</strong> {info.class}</p>
    </div>
  );
}

export default HvtCompInfor;
