$(document).ready(function() {

  //Array for crystal images 

	crystals = ['assets/images/opal.jpeg','assets/images/emerald.jpeg','assets/images/aquamarine.jpeg','assets/images/ruby.jpeg', 'assets/images/peridot.jpeg'];

  //Counts the number of user points
  var counter = 0;
  
  //calculates the number of wins
  
  var wins = 0;
  
  //calculates the number of lossess 

  var losses = 0;
  
  //places the numbers of wins and losses in a class 
	$('#win').text(wins);
	$('#loss').text(losses);
  
  //Functions for assigning new crystal and game attributes
	newCrystals();
	newGame();

  //Function to assign new attributes to crystals at the start of each game 
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

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

   //Function to assign set counter, score and guess at the start of each game 
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