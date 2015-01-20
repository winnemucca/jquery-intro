$(document).on('ready', function() {
  $('.textFinder').on('click', function(e) {
  	e.preventDefault();
  	$('.one').append('<h1>Welcome to jQuery <h1>')
  	console.log('clicked');
  });

  $('.listFinder').on('click',function(e) {
  	e.preventDefault();
  	console.log('second button');

  	// .eq is great for singling out list items
  	// $("li").eq(2).css('color','white');
  	// $('li').eq(2).append('<li>list item 4</li>');
  	// $('.list').append(\'<ul>
  	// 	<li> new item 1</li>
  	// 	<li> new item 2</li>
  	// 	<li> new item 3</li>
  	// 	</ul>
  	// '\);

  $('.list').append($('<ul>')
  			.append('<li>list 1</li>')
  			.append('<li>list 2</li>')
  			.append('<li>list 3</li>')
  			.append('</ul>')
  			.addClass('builtList'))
  			// .addClass('builtList')
  })

  // ************** html filler page
  $('header').hover(function() {
  	$(this).addClass('hov');
  }, function() {
  	$(this).removeClass('hov');
  });

  $('h1').hover(function() {
  	$(this).append('<span>!</span>');
  }, function() {
  	// $(this).remove('<span>!</span>');
  	$('span').remove();
  });

  $('.link').hover(function() {
  	var response =confirm(' do you want to proceed to link');

  	console.log(confirm());

  	if( response === false) {
  		// $('li').remove('.link');
  		$(this).remove();
  	}
  	else {
  		return true;
  	}

  })

  $('.bigButton').on('click', function() {
  	$('.mainBox').prepend('<div class="popUp">  Here is the pop up</div>');

  	$('.popUp').append('<button class="popButton">Hide</button>');


  	// Here i am removing the entire div from the dom 

	  	$('.popButton').on('click',function() {
	  	$('.popUp').remove();
	  	console.log('popButton');
	  });

  })


});