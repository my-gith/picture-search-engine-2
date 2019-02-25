$(function(){

	$('.search form').submit(function() {
		var search = $(this).find('input[name="search"]').val();

		// alert(search);


	 	$.ajax({
			url: 'http://foxk.ru/search.php?count=3&string='+search,
			type:"GET",//POST/GET
			crossDomain : true,
			async: false,
			dataType: "json",
			//data: {//для метода POST
			//string: search,
			//count:10
			//}
			success: function(json) {
			// $( ".content" ).remove( ".items" );//не работает
			// $( "div" ).remove( ".items" );
			$( ".items" ).remove();
			console.log(json);
			//json.data.result.items

				for (var i = 0; i <json.data.result.items.length; i++) {
					// console.log (json.data.result.items[i].media);

					var title = json.data.result.items[i].title;
					var full = json.data.result.items[i].media;
					var thumb = json.data.result.items[i].thumbnail;

				
					$('.content').append('<div class="items"><img src="'+full+'"><div class="img_option"><p class="name">'+title+'</p><a href="'+full+'" download>Скачать файл</a>');
				}
			}
		});

		return false;
	});

});














