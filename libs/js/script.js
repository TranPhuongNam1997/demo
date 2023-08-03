
$(document).ready(function (event) {
    $( ".menu-parent > li" ).hover(function () {
        $( ".menu-parent > li" ).removeClass('active')
        $(this).addClass('active')
    });

    $(".view-menu-mb").click(function () {
        $(this).toggleClass("change-icon-mb");
        $(".nav-block").toggleClass("open-mb");


    });
    if(innerWidth < 576){
        $('.menu-child').hide();
        $(".has-child > a").click(function () {
            $('.menu-child').slideUp();
            if (!$(this).next(".menu-child").is(":visible")) {
                $(this).next(".menu-child").slideDown();
            }
        });
    }
    
    $('.datepicker').datepicker({
        language: "vi",
        autoclose: true,
        format: "dd/mm/yyyy"
      });
});