$(".read-more").on("click", function(){
    $(".hidden").slideDown(2000);
    $(".read-more").hide();
});

$(".read-less").on("click", function(){
    $(".hidden").slideUp(2000);
    $(".read-less").hide();
    $(".read-more").show();
});