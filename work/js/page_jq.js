$(function() {
    $("#NAV_input,#open_MENU").click(function() {
        $('body').toggleClass('fixed');
        $('.MENU_btn').toggleClass('open');
    })
})


$(function() {
    $(".works_menu nav ul li").click(function() {
        $(".works_menu nav ul li").removeClass('target');
        $(this).addClass('target');
    });;
});


$(function(){
ã€€$(window).load(function(){
ã€€ã€€$(window).bind('scroll resize', function(){
ã€€ã€€var $this = $(this);
ã€€ã€€var $this_Top=$this.scrollTop();

ã€€ã€€if($this_Top < 50){
ã€€ã€€ã€€$('#MENU_trigger').removeClass('scroll_style')
ã€€ã€€ã€€}
ã€€ã€€ã€€ã€€if($this_Top > 50){
ã€€ã€€ã€€ã€€$('#MENU_trigger').addClass('scroll_style')
ã€€ã€€ã€€ }
ã€€ã€€}).scroll();
ã€€});
});




