$(document).ready(function(){
	var slideIndex = 0;
	showPhotos();

	function showPhotos(){
		var i;
		var slides = $('.photo img');
		console.log(slides);
		console.log(slides.length); //12

		//Запускаем цикл для скрытия фотографий
		for (i=0; i<slides.length; i++){
			console.log(i);
			$(slides[i]).hide();
		}


		slideIndex++;
		console.log(slideIndex);
		if(slideIndex>slides.length){
			slideIndex = 1
		}
		$(slides[slideIndex-1]).show();

		setTimeout(showPhotos, 500);

	}
});
