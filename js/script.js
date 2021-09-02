$(document).ready(function(){

	// hide
	$('.h_btn').click(function(){

		$('.d_text').hide(1000);

	});

	// show
	$('.s_btn').click(function(){

		$('.d_text').show(1000);

	});

	// toggle
	$('.t_btn').click(function(){

		$('.d_text').toggle(1000);

	});


	// fadeOut
	$('.fout_btn').click(function(){

		$('.f_text').fadeOut(1000);

	});

	// fadeIn
	$('.fin_btn').click(function(){

		$('.f_text').fadeIn(1000);

	});

	// fadeToggle
	$('.ft_btn').click(function(){

		$('.f_text').fadeToggle(1000);

	});

	// fadeTo
	$('.fto_btn').click(function(){

		$('.f_text').fadeTo(1000, .3);

	});

	// resetFade
	$('.fr_btn').click(function(){

		$('.f_text').fadeTo(1000, 1);

	});



	// jq accordion

	$('.flip').click(function(){

		$('.panel').slideToggle(1000);

	});


	// slide up

	$('.flip2').click(function(){

		$('.panel2').slideUp(1000);

	});

	// slide up

	$('.flip2').dblclick(function(){

		$('.panel2').slideDown(1000);

	});



	// animate
	$( ".clickme" ).click(function() {
	  $( ".box" ).animate({
	    opacity: 1,
	    left: "+=50",
	  }, 500, function() {
	    // Animation complete.
	  });
	});










// interactions start


// draggable
$( function() {
    $("#draggable").draggable();
  } );


// droppable
$( function() {
    $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass("ui-state-highlight")
          .find("p")
            .html("Dropped!");
      }
    });
  } );

// resizable
$( function() {
    $( "#resizable" ).resizable();
  } );


// selectable
$( function() {
    $( "#selectable" ).selectable();
  } );


// sortable
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );


// widgets start

// accordion
$( function() {
    $("#accordion").accordion(1000);
  } );


$( function() {
    var availableTags = [
      "Accordion",
      "BASIC",
      "C",
      "C++",
      "Erlang",
      "Fortran",
      "Groovy",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      "Scheme",
      "Widgets"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


// checkboxradio
$( function() {
    $( "input" ).checkboxradio();
  } );

// datepicker
$( function() {
    $( "#datepicker" ).datepicker();
  } );


// spinner
$( function() {
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  } );













});