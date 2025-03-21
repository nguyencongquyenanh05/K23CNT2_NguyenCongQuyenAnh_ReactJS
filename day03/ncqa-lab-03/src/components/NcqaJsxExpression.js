import React from 'react';

export default function PhnJsxExpression() {
    // Biến
    const name = 'Nguyen Cong Quyen Anh';

    // Biến đối tượng
    const user = {
        firstName: 'Nguyen Cong Quyen',
        lastName: 'Anh',
    };

    // Hàm lấy fullName từ user object
    const fullName = (user) => {
        return user.firstName + " " + user.lastName;
    };

    // Element JSX
    const element = (
        <div>
            {/* Biểu thức JSX */}
            <h2>{fullName(user)}</h2>
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    // Hàm chào mừng có giá trị mặc định cho name
    const sayWellcome = (name = "Fit-NTU - K23CNT2") => {
        return "Welcome to, " + name;
    };

    return (
        <div>
            <h1>Ncqa - JSX NcqaJsxExpression</h1>
            {/* Sử dụng biến element */}
            {element}
            <hr />
            {sayWellcome()} {/* Sử dụng giá trị mặc định */}
            <hr />
            {sayWellcome('Nguyen Cong Quyen Anh')}
        </div>
    );
}
