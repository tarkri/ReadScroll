$(document).ready(function(){
	var creditArray = {
		name: "Tarun Krishnan",
		url: "http://tarunkrishnan.com",
		script_name: 'tk1z_birdhousebranding_carve_readscroll',
		created: "August 4, 2016"
	};
	var blkstr = [];
	$.each(creditArray, function(idx2,val2) {                    
	  var str = idx2 + ":" + val2;
	  blkstr.push(str);
	});
	console.log(blkstr.join(", "));

	var contentBlocks = $('.entry-content').find('.sqs-block-html');
	var $window = $(window);
	var distance;
	var mainContentBlock;
	var counter = 0;
	var contentHeight;
	contentBlocks.each(function(){
	  counter++;
	  if(counter == 2) {
	  	contentHeight = $(this).height();
	  	mainContentBlock = $(this);
	  	distance = mainContentBlock.offset().top;

	  	$window.scroll(function() {
			//console.log('scrolling');
		    if ( $window.scrollTop() >= distance ) {
		        //console.log('start counting!');
		        
		    }
		});
	  	
	  }
	});



});