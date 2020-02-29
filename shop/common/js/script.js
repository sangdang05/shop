(function($) {
	$(function() {
		/*------------------Nav mobile--------------------------------------*/
		$(".js-navHam").click(function() {
			$(".js-nav").toggleClass("nav--active");
			var menu = document.getElementsByClassName('nav-menu-content');
			menu[0].style.transform="translateX(-500px)";
			if ($(".js-nav").hasClass("nav--active")) {
				$("body").addClass("Noscroll");
				var menu = document.getElementsByClassName('nav-menu-content');
				menu[0].style.display="block";
				menu[0].style.transform="translateX(0px)";
			} else {
				$("body").removeClass("Noscroll");
			}
		});
	});

	$('.carousel').carousel({
		interval: 3000
	})

	$('.js-cartBtn').click(function(){
		var parent = $(this).closest('.product-content-list-item');
		var productName = parent.find('.product-content-list-item-detail_name').text();
		var cartNum = $('.js-cartView').attr('data-count');
		cartNum++;
		$('.js-cartView').attr('data-count',cartNum++);
		$('.js-cartView').notify("Đã thêm" + productName ,"success");
		$(".Cart_btn").notify(
			"Đã thêm vào giỏ", 
			{ position:"top", className: 'success', gap: 2}
			);
	})

	$('.js-wishBtn').click(function(){
		var parent = $(this).closest('.product-content-list-item');
		var productName = parent.find('.product-content-list-item-detail_name').text();
		var wishNum = $('.js-wishView').attr('data-count');
		wishNum++;
		$('.js-wishView').attr('data-count',wishNum++);
		$('.js-wishView-Mb').attr('data-count',wishNum++);
		$('.js-wishView').notify("Đã thêm" + productName,"success");
	})

	setTimeout(function() {
		$('.js-cart').removeClass('Cart--disable');
	}, 1000);

})(jQuery);




