 $(function(){
 	$(window).scroll(function(){

 		if($('html,body').scrollTop()>300) {
 			$('.nonecolor').addClass('whitebar');
 			$('.nutlen').addClass('hienthi')
 		}
 		else if($('html,body').scrollTop()<=100) {
			$('.nonecolor').removeClass('whitebar');
			$('.nutlen').removeClass('hienthi');
 		}
 	})
 	$('.nutlen').click(function(){
 		$('html,body').animate({'scrollTop':0});
 		 return false;
 	})
})  
 