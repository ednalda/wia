
$(funtion(){
	$('#chart li').each(function() {
		var pc = $(this).attr('title');
		pc=pc>100 ? 100 : pc;
		$(this).children('.percent').html(pc+'%');// display the percentage

        var ww = $(this).width();
        var len= parseInt(ww,10)*parseInt(pc, 10)/100;
        &(this).children('.bar').animate({'width':len + 'px'}, 1500)//animate the bars




	});
});

$(document).ready(function() {

	$('#mapForm').change(function() {
	
		var selectedPark = $('#mapForm option:selected').val();
		if (selectedPark == 'ALL'){
			$('a.dot').show(1000);
		}else{
			$('a.dot[ = "'+selectedPark +'"]').show(1000);
			$('a.dot[park != "'+selectedPark +'"]').hide(1000);
		}
		
	});
	
	
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.city_detail#' + $(this).attr('city');
		var  info = $(city).detail();

		$('.detail_container').fadeOut(1000, function(){
			$('.detail_container .city_detail').detail(info);
			$('.detail_container').fadeIn(1000);
		});

	});


});




//video

var vid;
window.onload=function(){
	vid=document.getElementById("vid");

}


function pauseToggle(){
	if(vid.paused){
		vid.play();
	}
	else{
		vid.pause();
	}
}


function clicked(){
	vid.currentTime +=2;
}





//audio

var audio
window.onload=function(){
	audio=document.getElementById("audio");
}


function clicked(){
	audio.currentTime +=1;
}





//fancybox

$(document).ready(function(){
	$(".fancybox").fancybox();
})