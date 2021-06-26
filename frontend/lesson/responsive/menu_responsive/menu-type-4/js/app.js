$(document).ready(function () {
    $("#icon-menu-responsive").click(function () {
        //click xong hiển thị menu respon sổ từ trên xuống
        // $("#respon-menu").slideToggle(); // slide Down , slide Up, slideTogole
        $('#size').toggleClass('open-respon-menu');
        $('#icon').toggleClass('fa-bars  fa-times');
    });
    $(window).resize(function () {
        // nếu  màn hình có độ rộng lớn hon 768 px thid respon- menu ẩn đi
        if ($(document).width() >= 768) {

            $("#site").removeClass('open-respon-menu');
            $('#icon').removeClass('fa-times').addClass('fa-bars');

        }

    });
});