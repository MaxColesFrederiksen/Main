$(document).ready(function(){
	
	$("#quoteButton").on("click", function(){
		
		$.ajaxSetup({cache:false});
    
    
    		$.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
    			$(".quoteHolder").html(' &ldquo; ' + data.quote + ' &rdquo; ');
    			$(".author").html(" - " + data.author);
    			console.log(quote);

    		});
    	});

    	$("#twitterLink").click(function(){
    		var quoteTweet = $('.quoteHolder').text() + $('.author').text() + ' #quotes';

    		var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteTweet);
    		window.open(tweetLink, '_blank');

    		});
	});
