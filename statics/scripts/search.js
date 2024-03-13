var search = function() {
    var ajax_global = function(dataString, urlSend, method, type) {
        var res = '';
        $.ajax({
            url: $('base').attr('href') + urlSend,
            type: method,
            async: false,
            dataType: type,
            data: dataString,
        }).success(function(res) {
            result = res;
        }).error(function(error) {
            console.log(error);
        });
        return result;
    }
    var handleSearch = function() {
        $('body').on('keyup', '#BNC_txt_search', function(event) {
            event.preventDefault();
            var type = $('select[name="BNC_searchCategory"] option:selected').val();
            var keyword = $(this).val();
            if (keyword.trim() && event.which != 40 && event.which != 38) {
                var dataString = {
                    'keyword': keyword,
                    'type': type
                };
                var data = ajax_global(dataString, '/product-ajaxProduct-ajaxSearhAutoComplete.html', 'POST', 'json');
                console.log(data);
                var htm = '';
                if (data.status) {
                    $.each(data.message, function(k, v) {
                        htm += '<li><a href="' + v['link'] + '"><img src="'+v['img']+'" alt="'+v['title']+'">' + v['title'] + '<p><b>'+v['price']['price']+'</b></p></a></li>';
                    });
                } else {
                    htm += '<li>' + data.message + '</li>';
                }
                $('#resSearch').html(htm).show();
            } else if (keyword.trim() == false) {
                $('#resSearch').slideUp();
            }
            return false;
        });
        $('#BNC_txt_search').keypress(function(event) {
            if (event.which == 13) {
                var indx = $('#resSearch').find('.active').index();
                if (indx != -1) {
                    var href = $('#resSearch').find('li:eq(' + indx + ') a').attr('href');
                    window.location.href = href;
                    return false;
                }
            }
        });
        $("#BNC_txt_search").keyup(function(event) {
            var keycode = event.which;
            var num_active = 0;
            if (keycode == 38) { //Len 
                //Kiem tra active 
                var hasC = false;
                var countAll = 0;
                $('#resSearch').find('li').each(function(k, v) {
                    var self = $(this);
                    if (self.hasClass('active') && hasC == false) {
                        hasC = true;
                    }
                    countAll += 1;
                });
                if (hasC != false) {
                    var liAc = $('#resSearch').find('li.active');
                    var num_active = liAc.index() - 1;
                } else {
                    var liAc = $('#resSearch').find('li:first-child');
                    var num_active = countAll;
                }
                $('#resSearch').find('.active').removeClass('active');
                var elhover = $('#resSearch').find('li:eq(' + num_active + ')');
                elhover.addClass('active');
                var tmp_title = elhover.find('a').text();
                $('#BNC_txt_search').val(tmp_title);
                if (num_active == countAll) {
                    $('#resSearch').find('.active').removeClass('active');
                    $('#resSearch').find('li:first-child').addClass('active');
                    var tmp_title = $('#resSearch').find('li:first-child a').text();
                    $('#BNC_txt_search').val(tmp_title);
                }
            } else if (keycode == 40) { //Kiem tra active 
                var hasC = false;
                var countAll = 0;
                $('#resSearch').find('li').each(function(k, v) {
                    var self = $(this);
                    if (self.hasClass('active') && hasC == false) {
                        hasC = true;
                    }
                    countAll += 1;
                });
                if (hasC != false) {
                    var liAc = $('#resSearch').find('li.active');
                    var num_active = liAc.index() + 1;
                } else {
                    var liAc = $('#resSearch').find('li:first-child');
                    var num_active = 0;
                }
                $('#resSearch').find('.active').removeClass('active');
                var elhover = $('#resSearch').find('li:eq(' + num_active + ')');
                elhover.addClass('active');
                var tmp_title = elhover.find('a').text();
                $('#BNC_txt_search').val(tmp_title);
                if (num_active == countAll) {
                    $('#resSearch').find('.boxSearchRes-Hover').removeClass('boxSearchRes-Hover');
                    $('#resSearch').find('li:first-child').addClass('boxSearchRes-Hover');
                    var tmp_title = $('#resSearch').find('li:first-child a').text();
                    $('#BNC_txt_search').val(tmp_title);
                }
            }
        });
    };

    return {
        init: function() {
            handleSearch();

        }
    };
}();
$(function() {
    search.init();
})