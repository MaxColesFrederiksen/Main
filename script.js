$(document).ready(function(){
	
	$("#quoteButton").on("click", function(){
		
		$.ajaxSetup({cache:false});
    
    
    		$.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote) {
    			$(".quoteHolder").html(' &ldquo; ' + quote[0].content + ' &rdquo; ');
    			$(".author").html(" - " + quote[0].title);
    			console.log(quote);

    		});
    	});

    	$("#twitterLink").click(function(){
    		var quoteTweet = $('.quoteHolder').text() + $('.author').text() + ' #quotes';

    		var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteTweet);
    		window.open(tweetLink, '_blank');

    		});
	});
