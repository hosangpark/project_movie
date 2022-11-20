$(function(){
  
slide()
$('.mainvisual').removeAttr("style");



function subslide() {
  $('.sub_slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.mainvisual',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});
}
function bookslide(){
  $(document).ready(function(){
    $('.mainvisual').booklet({
      width: '80%',
      height: 820,
      auto: true,
      delay: 3000,
      speed: 1000,
      next: '#custom-next',
      prev: '#custom-prev',      
      play: '#play',
      pause: '#pause',
      })      
  })
}

function slide(){
  if($(window).width() <= 1279){
    $('.mainvisual').slick({
      width: '100%',
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.sub_slide',
      arrows: true,
      pageNumbers: false,
      prevArrow: '<div class="slide_left_arrow"><i class="xi-angle-left"></i></div> ',
      nextArrow: '<div class="slide_right_arrow"><i class="xi-angle-right"></i></div> '
    });
  
    subslide();
  
    if($(window).width() <= 760) {
      $('.sub_slide').hide();
    } else if($(window).width() >= 761){
      $('.sub_slide').show();
    }
  
  } else {
    $('.label_menu_box').hide();
    $('.sub_slide').hide();
    bookslide();
    }}



$(window).resize(function(){
  if($(window).width() <= 760) {
    $('.label_menu_box').hide();
    $('.sub_slide').hide();
    if($('.mainvisual').hasClass("booklet")){
      $('.mainvisual').booklet("destroy")}
    $('.mainvisual').removeAttr("style");
    slide()
  } else if($(window).width() <= 1279 && $(window).width() >= 761 ){
    $('.label_menu_box').show();
    $('.sub_slide').show();
    $('.mainvisual').removeAttr("style");
    $('.mainvisual').css("width", "");
    if($('.mainvisual').hasClass("booklet")){
      $('.mainvisual').booklet("destroy")}
    slide()
  } else if($(window).width() >= 1280){
    $('.label_menu_box').hide();
    $('.sub_slide').hide();
    if($('.mainvisual').hasClass("slick-slider")){
      $('.mainvisual').slick("unslick")}
    $('.mainvisual').removeAttr("style");
    bookslide();
  }
})

// if($('#wrap page.main').hasClass('active')){
//   $('.page-pagination').hide();
// }else{
//   $('.page-pagination').show();
// }

// $(function() {
//   $("div").click(function() {
      // if($('mainvisual').hasClass("booklet")){
      //     $(this).removeClass("toggleStyle");}
//   });
// });

$("#bgndVideo").YTPlayer({
  videoURL: 'RimwxOwk9I0',
  containment: '.video_img_box3',
  autoPlay: true,
  mute: true,
  starAt: 0,
  opacity: 1,
  showControls: false,
  playOnlyIfVisible: true,
});


$('.sheet_ul li').on('click', function () {
  var idx = $(this).index();
  $(this).addClass('mapon').siblings().removeClass('mapon');
  $('.maps>div').eq($(this).index()).addClass('mapon').siblings().removeClass('mapon');
});


/*
    $('.mainvisual').removeAttr("style");
    $('div').remove(".b-page");
    $('div').removeAttr(".b-wrap");
    $('div').removeAttr(".b-shadow-f");
    

    $('.mainvisual').removeAttr("style");
    $('.b-page').removeAttr("style");
    $('.b-wrap').removeAttr("style");
    $('.b-shadow-f').removeAttr("style");


    $('.mainvisual').removeClass("booklet");
    $('.mainvisual').removeAttr("style");
    $('.b-page').removeAttr("style");
    $('.b-wrap').removeAttr("style");
    $('.b-shadow-f').removeAttr("style");
    $('div').remove(".b-controls");
    $('.mainvisual').booklet("destroy")
*/


})