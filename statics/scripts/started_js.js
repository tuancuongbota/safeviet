function clickTabContact(tabid,tabpanel){
  //var tabpanel=tabid+"_panel";
	$(".tab-contact .tab-contact-header li a").attr("class","");
	$(tabid).attr("class","active");
	$(".tab_contact_panel").css("display","none");
 	$(tabpanel).css("display","block");
}

$(document).ready(function(){
	$( ".f-video-detail-readmorebt" ).click(function() {
	  $( ".f-video-view-detail").slideToggle( 1000, function() {
		if($(this).is(":hidden")){
			$( ".f-video-detail-readmorebt").text('Xem thêm...');
		}
        else{
            $( ".f-video-detail-readmorebt").text('Thu gọn...');
        }           
	  });
	});

    $( ".f-album-detail-readmorebt" ).click(function() {
      $( ".f-album-detail").slideToggle( 1000, function() {
    	if($(this).is(":hidden")){
    		$( ".f-album-detail-readmorebt").text('Xem thêm...');
    	}
        else{
            $( ".f-album-detail-readmorebt").text('Thu gọn...');
        }
      });
    });

    $('#slidezoompage').carousel({
	  interval: 1000000
	});
		
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

    $("#grid").click(function () {
    $(".f-product-viewid").attr('class', 'f-product-viewid f-product');
	  // $(".f-product-viewid > li").attr('class', 'col-lg-3 col-md-4');
	  // $(".f-product-viewid li .f-pr-item").attr('class', 'f-pr-item');
	  // $(".f-product-viewid .f-pr-item-img").attr('class', 'f-pr-item-img');
	  // $(".f-product-viewid .f-pr-item-img a").attr('class', '');
	  // $(".f-product-viewid .f-pr-item-boxdetail").attr('class', 'f-pr-item-boxdetail');
    });
    $("#list").click(function () {
    $(".f-product-viewid").attr('class', 'f-product-viewid viewlist');
	  // $(".f-product-viewid > li").attr('class', '');
	  // $(".f-product-viewid li .f-pr-item").attr('class', 'f-pr-item row');
	  // $(".f-product-viewid .f-pr-item-img").attr('class', 'f-pr-item-img col-md-4 col-xs-4');
	  // $(".f-product-viewid .f-pr-item-img a").attr('class', 'thumbnail');
	  // $(".f-product-viewid .f-pr-item-boxdetail").attr('class', 'f-pr-item-boxdetail col-md-8 col-xs-8');
    });

    // Compare //  
    //Kiem tra xem co ton tai cookie compare khong
      var cookie=$.cookie('compare_'+idW);
        if(cookie!=undefined && cookie!=''){
            //Ajax xem co nhung id product nao
            var dataString={
                'nxt_compare':true
            };
            var urlSend='/product-ajaxProduct-ajaxOnloadCompare.html';
            var data=ajax_global(dataString,urlSend,'POST','json');
            var htm='';
            var product='';
            if(data.status==true){
                $.each(data.product,function(k, v) {
                    htm +='<li><a class="f-compare-del" href="javascript:void()" data-product="'+k+'" title="Xóa khỏi so sánh"></a><span> '+ v +'</span></li>';
                    product +=k+',';
                });
                
                 if($('#f-compare').attr('show')!=1){
                    $('#f-compare').animate({
                        right: "0px",
                      }, 1000, function() {
                        $('#f-compare').attr('show', 1);
                        $('#f-compare').attr('status', 'open');
                      });  
                    $('.f-compare-button').slideDown();
                }
                //Dua ten san pham vao
                $('.f-compare-ul').append(htm);
                $('.f-compare-info > #compare-notify').html(data.message);
                var href=$('.f-compare-button > a').attr('href');
                $('.f-compare-button > a').attr('href',href+'?product='+product);
            }
            
        }
        $('body').on('click', '.BNC-compare', function(event){
            event.preventDefault();
            var id_product=$(this).attr('data-product');
            var category=$(this).attr('data-category');
            var title=$(this).attr('data-name');
            var res = category.split(",");
            var dataString={
                'id_product':id_product, 
                'category':res
            };
            var urlSend='/product-ajaxProduct-ajaxCheckCompare.html';
            var data=ajax_global(dataString,urlSend,'POST','json');
            if(data.status==false){
                toastr.error(data.message);
                return false;
            }else{
                var htm='<li><a class="f-compare-del" href="javascript:void()" data-product="'+id_product+'" title="Xóa khỏi so sánh"></a><span> '+ title +'</span></li>';
                if($('#f-compare').attr('show')!=1){
                    $('#f-compare').animate({
                        right: "0px",
                      }, 1000, function() {
                        $('#f-compare').attr('show', 1);
                        $('#f-compare').attr('status', 'open');
                      });  
                    $('.f-compare-button').slideDown();
                }
                //Dua ten san pham vao
                $('.f-compare-ul').append(htm);
                $('.f-compare-info > #compare-notify').html(data.message);
                var href=$('.f-compare-button > a').attr('href');
                var res = href.split("?");
                $('.f-compare-button > a').attr('href',res[0]+'?product='+data.product);
            }
        });
        $('body').on('click', '.f-compare-del', function(){
            var id_product=$(this).attr('data-product');
            var dataString={
              'id_product' :id_product
            };
            var urlSend='/product-ajaxProduct-ajaxDeleteCompare.html';
            var data=ajax_global(dataString,urlSend,'POST','json');
            if(data.status==true){
                var parent=$(this).parent();
                parent.slideUp('fast',function(){
                  parent.remove();  
                });
                $('.f-compare-info > #compare-notify').html(data.message);   
                if(data.isZero==true){
                     $('#f-compare').animate({
                        right: "-215px",
                      }, 1000, function() {
                        $('#f-compare').attr('show', 0);
                        $('#f-compare').attr('status', 'closed'); 
                      }); 
                     $('.f-compare-button').slideUp();
                }
                 var href=$('.f-compare-button > a').attr('href');
                  var res = href.split("?");
                $('.f-compare-button > a').attr('href',res[0]+'?product='+data.product);
            }
        });
        $('body').on('click', '#f-compare .f-compare-title i', function(){
           if ($('#f-compare').attr('status') == 'closed') {
                $('#f-compare').animate({
                    right: '0px'
                }, 500);
                $('#f-compare').attr('status', 'open');
            } else {
                $('#f-compare').animate({
                    right: '-149px'
                }, 500);
                $('#f-compare').attr('status', 'closed');
            }
        });
    // End Compare //  

   // Jcallros
   if($('#galleria').length > 0){
	  	 Galleria.loadTheme('resources/plugins/galleria/themes/classic/galleria.classic.min.js');
			 Galleria.run('#galleria', {
					autoplay: 3000, // will move forward every 7 seconds
					fullscreenDoubleTap:true
			});	
		}
});
      