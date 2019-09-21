var fadeTime = 400;

$('#content')
	.delay( 500 )
	.fadeIn( fadeTime, function()
		{
			reset();
		});

function opacity_1( el )
{
	el.animate({
		opacity: 1
	}, fadeTime );
}

function opacity_0( el )
{
	el.animate({
		opacity: 0
	}, fadeTime );
}

function reset()
{
	opacity_1( $('h1') );
	$('#q').fadeIn( fadeTime );
	$('#q input').val('').focus();
	$('#q-sub').css( 'opacity', 0 );
	$('#answer').hide().css( 'height', $('#q').outerHeight() );
	$('#timer').width(0);
}

var answers = Array(
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful"
	);

function return_answer()
{
	$('h1').css( 'opacity', 0 );
	$('#q-sub').css( 'opacity', 0 );
	$('#q').hide();

	var answer = answers[Math.floor(Math.random()*answers.length)];

	$('#a-text').text( answer );
	$('#answer').fadeIn( fadeTime*3 );

	$('#timer')
		.animate({
			width: $('#content').width()
		},
		5000,
		function()
		{
			reset();			
		});	
}

$('#q input').keyup( function()
{	
	if ( $(this).val().length > 2 )
		//opacity_1( $('#q-sub') );
		$('#q-sub').css( 'opacity', 1 );
	else
		//opacity_0( $('#q-sub') );
		$('#q-sub').css( 'opacity', 0 );
});

$('form').on('submit', function(e)
{
	return_answer();
	e.preventDefault();
});