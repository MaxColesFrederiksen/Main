$(document).ready(function(){
	
	$("#quoteButton").on("click", function(){
		
		$.ajaxSetup({cache:false});
    
    
    		$.getJSON("https://talaikis.com/api/quotes/random/", function(quote) {
    			$(".quoteHolder").html(' &ldquo; ' + quote + ' &rdquo; ');
    			$(".author").html(" - " + author);
    			console.log(quote);

    		});
    	});

    	$("#twitterLink").click(function(){
    		var quoteTweet = $('.quoteHolder').text() + $('.author').text() + ' #quotes';

    		var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteTweet);
    		window.open(tweetLink, '_blank');

    		});
	});
