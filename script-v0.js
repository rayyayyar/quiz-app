$(document).ready(function(){
	var allQuestions = [
		{
			question: "What color is the sky?",
			choices: ["blue", "red", "purple"],
			correctAnswer: 0
		},
		{
			question: "What is the meaning of life?",
			choices: ["42", "50", "100", "none"],
			correctAnswer: 0
		}
	];
	i = 0;

	$(".next-btn").click(function() {
		$(".next-btn").remove();
		setup();
		i += 1;
	})

	function setup(solution) {
			question = allQuestions[i].question;
			options = allQuestions[i].choices;
			answer = allQuestions[i].choices[allQuestions[i].correctAnswer];
			console.log("question:", question);
			console.log("answer:", answer);
			console.log("allQuestions[i].correctAnswer:", allQuestions[i].correctAnswer);
			nextQuestion();
			nextOptions(solution);

			//check user's answer on click
			$(".choice").click(function() {
				console.log("choice clicked");
				var selectedChoice = $(this);
				checkAnswer(selectedChoice);
			});
	}

	function nextQuestion() {
		$(".question")
				// hide first to fade in
				.hide()
				.text(question)
				.fadeIn("slow");
	}

	function nextOptions(solution) {
		// consider using frag for performance
		$(".choice").not(solution).fadeOut("fast");
		$(solution)
			.css("color", "#50E3C2")
			.delay(2000)
			.fadeOut("fast", function() {});
		$.each(options, function(i, choice) {
			var newChoice = "<li class='choice'>" + choice + "</li>";
			$(".choices")
				.append(newChoice)
		});
	}

	function checkAnswer(userAnswer) {
			console.log("userAnswer:", userAnswer.text());
			if ( userAnswer.text() == answer ) {
				console.log("correct!");
				console.log("this:",this);
				setup(userAnswer);
			}
			else console.log("nope");			
	}
 

});