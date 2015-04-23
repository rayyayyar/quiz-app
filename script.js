$(document).ready(function() {

	// create all questions and options in an array
	var allQuestions = [
		{
			question: 'What color is the sky?',
			choices: ['grey', 'blue', 'purple'],
			answer: 1
		},
		{
			question: 'What is the meaning of life?',
			choices: ['love', 'happiness', 'none', '42'],
			answer: 3
		},
		{
			question: 'What year was 2001: A Space Odyssey released?',
			choices: ['2001', '2015', '1918', '1968'],
			answer: 3
		}
	];

	// function to set up the first / next question
	i = -1;
	score = 0;

	function setup() {
		console.log('i:',i);
		console.log('setup');
		console.log('question:', allQuestions[i].question);
		question = allQuestions[i].question;
		choices = allQuestions[i].choices;
		answer = allQuestions[i].choices[allQuestions[i].answer];
		load(question);
		listen();
		console.log('score:', score);
	}

	// listen for user action
	function listen() {
		$('.choice').on('click', function(){
			console.log('click');
			if (i >= 0) {
				check($(this).text());
				if (i < allQuestions.length-1) {
					i++;
					setup();
				}
				else {
					showScore();
				}
			}
			else {
				i++;
				setup();
			}
		});
	}
	listen();
	
	// load question and choices
	function load(question) {
		console.log('load');
		$('.choice').remove();
		$('.question').text(question);
		$.each(choices, function(i, choice) {
			var newChoice = "<li class='choice'>" + choice + '</li>';
			$('ul.choices')
				.append(newChoice)
		});
	}

	function unload() {
		$('.choice').remove();
		$('.question').remove();
	}

	// function to check if user clicked on the correct answer
	function check(userAnswer)  {
		console.log('check it');
		if ( userAnswer == answer ) {
			console.log('correct');
			score++;
			return;
		}
		else { console.log('nope'); score--; }
	}

	// show final tally
	function showScore() {
		console.log('show score');
		unload();
		console.log('Your Score:',score);
		$(document.body).append('You scored: ', score, ' points');

	}

});