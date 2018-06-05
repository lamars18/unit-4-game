$(document).ready(function() {

  //Array for crystal images 

	crystals = ['assets/images/opal.jpeg','assets/images/emerald.jpeg','assets/images/aquamarine.jpeg','assets/images/ruby.jpeg', 'assets/images/peridot.jpeg'];

  //Counts the number of user points based on selected crystal values 
  var counter = 0;
  
  //calculates the number of wins
  
  var wins = 0;
  
  //calculates the number of lossess 

  var losses = 0;
  
  //Assigns the variables of wins and losses to an HTML class 
	$('#win').text(wins);
	$('#loss').text(losses);
  
  //Functions for assigning new crystal and game attributes
	newCrystals();
	newGame();

	//Function to assign new attributes to crystals at the start of each game 
	//Creates a new variable "numbers" that will contain numbers that will be assigned to each crystal. 
	//Creates new variable "random number" to generate a number 
	//Creates a Boolean variable "found" that will 
	//NOTE: The "Math.ceil" round a number upward to the nearest integer and returns a result
	//NOTE: "Math.random" returns a number from 0 (inclsive) up to but not including 1 (exclusive).
	//NOTE: The "break" statement breaks the loop and continues executing the code after the loop

	function newCrystals () {
		var numbers = []
			while(numbers.length < 5){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		//function to assign crystal images at the beginning of the game from the array of crystals
		//It also assigns one of the random "numbers" to each crystal
		//It assigns the HTML attributes to each crystal image 
		//It also assigns the crystals and numbers to the approprite HTML class 

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	 //Function to reset counter, score and guess at the start of each game 
	 //Places counter in the appropriate HTML id, number to guess in the appropriate class,
	 //Assigns function to the crystalimage class. 
	 //Initiates action when crystal image is clicked to add number from counter to score
	 //Indicates criteria for wins and losses, assigns them to HTML classes and resets the game after win or loss is determined
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}
      console.log(counter);		
		var numberToGuess = randomIntFromInterval(19,120);

		$('.number-to-guess').text(numberToGuess);

    console.log(numberToGuess);		
		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});