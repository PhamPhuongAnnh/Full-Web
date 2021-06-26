$(document).ready(function () {
    $("#icon-menu-responsive").click(function () {
        //click xong hiển thị menu respon sổ từ trên xuống
        $("#respon-menu").slideToggle(); // slide Down , slide Up, slideTogole

    });
    $(window).resize(function () {
        // nếu  màn hình có độ rộng lớn hon 768 px thid respon- menu ẩn đi
        if ($(document).window() >= 768) {
            $("#respon-menu").css('display', 'none');
        }

    });
});