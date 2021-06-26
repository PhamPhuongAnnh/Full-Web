$(document).ready(function () {
    // alert("Nội dung được hiển thị bởi jquery");

    //selector
    //sự kiện
    // hiệu ứng 
    //phương thức khác

    $("a#change_color").click(function () {
        // alert("Đã click");
        $("h1").css('color', 'red');
        return false; // hạn chế việc reset load trang
    });
});