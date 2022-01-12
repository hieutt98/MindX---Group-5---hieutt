// Viết code yêu cầu đăng nhập với `prompt`.

let username = prompt("Enter your username: ");

// Nếu khách truy cập nhập “`Admin`“, sau đó nhắc nhập mật khẩu, nếu đầu vào là một dòng trống hoặc Esc – hiển thị “Canceled”, nếu là một chuỗi khác – thì hiển thị “Tôi không biết bạn”.
if (username == "Admin"){
    let password = prompt("Enter your password: ");
    if (password == "mindX"){
        console.log("Chào mừng!");
    } else if (password == ""|| password == null) {
        console.log("Đã hủy");
    } else {
        console.log("Mật khẩu sai");
    }
} else if (username == "" || username == "Esc" ) {
    console.log("Canceled");
} else{
    console.log("Tôi không biết bạn");
}
// Mật khẩu được kiểm tra như sau:

// - Nếu nó bằng “mindX”, thì hãy hiển thị “Chào mừng!”,
// - Một chuỗi khác – hiển thị “Mật khẩu sai”,
// - Đối với một chuỗi trống hoặc đầu vào đã hủy, hãy hiển thị “Đã hủy”