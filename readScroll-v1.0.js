$(document).ready(function(){
	var creditArray = {
		name: "Tarun Krishnan",
		url: "http://tarunkrishnan.com",
		script_name: 'ReadScroll',
		created: "August 4, 2016"
	};
	var blkstr = [];
	$.each(creditArray, function(idx2,val2) {                    
	  var str = idx2 + ":" + val2;
	  blkstr.push(str);
	});
	console.log(blkstr.join(", "));

	var contentBlocks = $('.entry-content').find('.sqs-block-html');
	var counter = 0;
	contentBlocks.each(function(){
	  counter++;
	  if(counter == 2) {
	    console.log($(this).height());
	  }
	});

});