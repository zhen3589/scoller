(function ($) {
	$.fn.extend({
		Scoller: function (rolling, loading_page) {
			let page = 0;
			let scller = document.querySelector($(this).selector);

			if (loading_page) {
				$(scller).append(
					`<div class="loading"><i class="iconfont icon-jiazaizhong"></i><p>加载中</p></div>`
				);
			}

			loading();
			function loading() {
				let content_height = $(scller).find("ul").height();
				let box_height = $(scller).height();

				if (content_height <= box_height) {
					console.log(rolling(page++));

					setTimeout(() => {
						loading();
					}, 800);
				}
			}

			scller.onscroll = function () {
				let scrollTop = scller.scrollTop || scller.scrollTop;
				let windowHeight =  scller.clientHeight;
				let scrollHeight = scller.scrollHeight;

				if (scrollTop + windowHeight == scrollHeight) {
					rolling(page++);
				}
			};
		},
	});
})(jQuery);
