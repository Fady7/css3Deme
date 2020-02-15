$("li").on("click", function() {
    $(this).addClass("active");
    $(this).parent().addClass("cont-active");
})
$(".close").on("click", function(e) {
    // e.stopPropagation()
    $(".active").removeClass("active");
    $(".cont-active").removeClass("cont-active");
    return false;
})