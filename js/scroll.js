(function ($) {
	$.fn.extend({
		Scoller: function (rolling) {
			let page = 0;
            let scller = document.querySelector($(this).selector);
            console.log(scller);

			loading();
			function loading() {
				let content_height = $(scller).find("ul").height();
				let box_height = $(scller).height();

				if (content_height <= box_height) {
					rolling(page++);

					setTimeout(() => {
						loading();
					}, 500);
				}
			}

			scller.onscroll = function () {
				let scrollTop = scller.scrollTop || scller.scrollTop;
				let windowHeight = scller.clientHeight || scller.clientHeight;
				let scrollHeight = scller.scrollHeight || scller.scrollHeight;

				if (scrollTop + windowHeight == scrollHeight) {
					rolling(page++);
				}
			};
		},
	});
})(jQuery);
