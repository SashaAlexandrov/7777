$(function() {
	
	$(window).scroll(function() {
		
		if($(this).scrollTop() >200) {
			
			$('#toTop').css({
				opacity:1
			});
			
		} else {
			
			$('#toTop').css({
				opacity:0
			});
			
		}
		
	});
	
	$('#toTop').click(function() {
		
		$('body,html').animate({scrollTop:0},800);
		
	});
	
});

$(function() {
	$(window).scroll(function() {	

		if($(this).scrollTop() <834) {			
			$('#scroll_1').prop('checked', true);			
		} 
		else {			
			$('#scroll_1').prop('checked', false);
		}	
	});

	$('#scroll_1').click(function() {
		
		$('body,html').animate({scrollTop:0},1200);
		
	});
	
});
$(function() {
	$(window).scroll(function() {

		if($(this).scrollTop()>=834 && $(this).scrollTop() <1240) {
			$('#scroll_2').prop('checked', true);
		} 
		else {
			$('#scroll_2').prop('checked', false);	
		}
		
	});
	$('#scroll_2').click(function() {
		
		$('body,html').animate({scrollTop:834},1200);
		
	});
	
});
$(function() {
	$(window).scroll(function() {

		if($(this).scrollTop()>=1240 && $(this).scrollTop() <1792) {
			$('#scroll_3').prop('checked', true);
		} 
		else {
			$('#scroll_3').prop('checked', false);	
		}
		
	});
	$('#scroll_3').click(function() {
		
		$('body,html').animate({scrollTop:1240},1200);
		
	});
	
});
$(function() {
	$(window).scroll(function() {

		if($(this).scrollTop()>=1792 && $(this).scrollTop() <2760) {
			$('#scroll_4').prop('checked', true);
		} 
		else {
			$('#scroll_4').prop('checked', false);	
		}
		
	});
	$('#scroll_4').click(function() {
		
		$('body,html').animate({scrollTop:1792},1200);
		
	});
	
});
$(function() {
	$(window).scroll(function() {

		if($(this).scrollTop()>=2760) {
			$('#scroll_5').prop('checked', true);
		} 
		else {
			$('#scroll_5').prop('checked', false);	
		}
		
	});
	$('#scroll_5').click(function() {
		
		$('body,html').animate({scrollTop:2760},1200);
		
	});
	
});