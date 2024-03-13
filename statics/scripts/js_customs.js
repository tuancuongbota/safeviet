// Action category products left menu
$(document).ready(function() {
    $('.bota_footer_hotline').click(function () {
        $('#bota_footer_hotlines').css("display", "block");
    });
    $('.opacity_menu').click(function () {
        $('#bota_footer_hotlines').css("display", "none");
    });
});
$(document).ready(function() {
    $(".quick-buy-custom").click(function(){
        setTimeout(function() {
         $(".minicartItemPay a").trigger('click');
         console.log('ssss');
        },2000);
    });
});
$(document).ready(function(){
    $('.bota_category_heading').on('click', function(){
        $('.bota_category_menu_list').slideToggle(300);
    });
    $('.bota_icon_filter').on('click', function(){
        $('.bota_products_filter_page').slideToggle(300);
    });
	var num = 100;  
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {   
			$('.bota_header_bottom').addClass('fixed');
		}
		else
		{
			$('.bota_header_bottom').removeClass('fixed');
		}
	});
});
// End Action category products left menu

// Menu mobile
$(document).ready(function() {
    var removeClass = true;
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('.button_menu_mobile');
    
    $nav_list.click(function(e) {
        $(this).toggleClass('active');
        $('body').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
        removeClass = false;
    });
    $('html').click(function () {
        if (removeClass) {
            $('body').removeClass('pushmenu-push-toright');
            $('.pushmenu-left').removeClass('pushmenu-open');
        }
        removeClass = true;
    });

    $('.navbar-nav').find('.parent').append('<span></span>');

    $('.navbar-nav .parent span').on("click", function() {
        if ($(this).attr('class') == 'opened') {
            $(this).removeClass().parent('.parent').find('ul').slideToggle();
        } else {
            $(this).addClass('opened').parent('.parent').find('ul').slideToggle();
        }
        removeClass = false;
    });
});

// Owl Slideshow
// code tạo biến chống trùng lặp biến bị xung đột với thư viện khác
$(document).ready(function(){
    "use strict";
    $(".owl-news-item").owlCarousel({
        navigation: true,
        items:4,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        autoPlay : true,
        itemsCustom:[[480,2],[320,1],[768,2],[767,2],[991,3],[1200,4]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]
    });
	   $(".wrap_item_srv").owlCarousel({
        navigation: true,
        items:4,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        //autoPlay : true,
        itemsCustom:[[480,2],[320,2],[768,2],[767,2],[991,3],[1200,4]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]
    });
    $(".owl_video_main").owlCarousel({
        navigation: true,
        items:2,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        //autoPlay : true,
        itemsCustom:[[480,1],[320,1],[768,1],[767,1],[991,2],[1200,2]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]
    });
    $(".owl_img_product_details").owlCarousel({
        navigation: true,
        items:3,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        autoPlay : true,
        itemsCustom:[[480,2],[320,2],[768,4],[767,4],[991,4],[1024,2],[1200,3]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]

    });
    
    $(".owl-carousel-products").owlCarousel({
        navigation: true,
        items:4,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        pagination:false,
        //Autoplay
        //autoPlay : true,
        itemsCustom:[[480,2],[320,2],[768,2],[767,2],[991,2],[1024,3],[1200,4]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]

    });
    $(".owl-carousel-brands").owlCarousel({
        navigation: true,
        items:6,
        slideSpeed : 200,
        paginationSpeed : 200,
        rewindSpeed : 1000,
        //Autoplay
        autoPlay : true,
        itemsCustom:[[480,2],[320,1],[768,3],[767,3],[991,4],[1200,6]],
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]

    });
    $(".owl_customer_feedback").owlCarousel({
        navigation: true,
        items:3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [991,2],
        itemsTablet: [767,2],
        itemsMobile : [480,1],
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        //Autoplay
        autoPlay : true,
        responsive:true,
        navigationText: [
            "<a class='flex-prev-slideshow'><i class='fa fa-chevron-left'></i></a>",
            "<a class='flex-next-slideshow'><i class='fa fa-chevron-right'></i></a>"
        ]
    });     
    $(".owl_sidebar_slideshow").owlCarousel({
        navigation: true,
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,
        singleItem:true,
        transitionStyle : "goDown",
        //Autoplay
        autoPlay : true,
        responsive:true,
        navigationText:false
    }); 
});
// End Owl Slideshow
$(document).ready(function() { 
    $('.bota_search_main_btn').on('click', function(){ 
        $('.search-area').toggleClass('showSearch'); 
    });
});
// Scroll To Top
$(document).ready(function(){
  $(".bota_icon_scrolltop").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('.bota_scrolltop').addClass('fixed');
      }
      else
      {
          $('.bota_scrolltop').removeClass('fixed');
      }
  });
  
  var num = 600;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('.bota_cate_search_cart').addClass('fixed');
      }
      else
      {
          $('.bota_cate_search_cart').removeClass('fixed');
      }
  });
}); 
// End Scroll To Top  

