(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	//Animate Text box
	$("input").focus(function(){
		$(this).css("background-color", "#cccccc");
		});
	$("input").blur(function(){
		$(this).css("background", "#ffffff");
	});
	// Add Twitter Account Card and Delete Button
	addAccount = ()=>{
		var textVal = $("#myText").val();
		if (textVal[0] == '@') {
			textVal = textVal.slice(1,)
		}
		if ($("#" + textVal).length == 0){
			$('<div></div>').attr({
				id: textVal,
				class: 'col-4 col-12-medium'
			}).appendTo("#account-div");
			$('<section></section>').attr({
				id: textVal+'-section',
				class: 'box feature'
			}).appendTo("#"+textVal);
			$('<a>Delete Account</a>').attr({
				id: 'my-delete-button-' + textVal,
				class: 'button delete-button'
			}).appendTo("#"+textVal);	
			$('<a></a>').attr({
				class: 'twitter-timeline',
				'data-height': '700',
				href: 'https://twitter.com/' +textVal+ '?ref_src=twsrc%5Etfw',
				'data-aria-polite': "assertive"
			}).appendTo("#"+textVal+"-section");
			var twitterScript = document.createElement("script");
			twitterScript.async;
			twitterScript.src = 'https://platform.twitter.com/widgets.js';
			twitterScript.charset = 'utf-8';
			$("#"+textVal+"-section").append(twitterScript);
			$('<br/>').appendTo("#"+textVal);
			var textVal = $("#myText").val("");
		} else {
			alert('This account is already in added');
			var textVal = $("#myText").val("");
		}			
	};
	$("#my-addon-button").on("click", addAccount);
	$("#myText").keypress(function(e) {
		var keyCode = (e.keyCode ? e.keyCode : e.which);
		if(keyCode == 13 && $("#myText").val().length > 1)  // the enter key code
		{
			addAccount();
		}
	});  
	
	//Delete Twitter Cards
	$(document).on("click", "a.delete-button", function(){
		$(this).parents(".col-4").remove();
	});

})(jQuery);