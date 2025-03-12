import React, { useState } from "react";
import NcqaMemberList from "./components/NcqaMemberList";
import NcqaMemberAdd from "./components/NcqaMemberAdd";

const NcqaApp = () => {
  // Khởi tạo danh sách thành viên với state
  const [members, setMembers] = useState([
    { id: "230001", fullname: "Nguyễn Văn A", username: "nguyenvana", password: "123456" },
    { id: "230002", fullname: "Trần Thị B", username: "tranthib", password: "abcdef" },
    { id: "230003", fullname: "Lê Văn C", username: "levanc", password: "qwerty" },
  ]);

  // Hàm thêm thành viên mới
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Hàm xóa thành viên theo ID
  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
  };

  return (
    <div>
      <h1>Danh sách thành viên</h1>
      <NcqaMemberList members={members} removeMember={removeMember} updateMember={updateMember} />
      <NcqaMemberAdd addMember={addMember} />
    </div>
  );
};

export default NcqaApp;