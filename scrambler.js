class Scrambler{
	//word shuffle
	shuffleWord(array) {
		var currentIndex = array.length, randomIndex;

  		// While there remain elements to shuffle...
 		 while (0 !== currentIndex) {

    		// Pick a remaining element...
    		randomIndex = Math.floor(Math.random() * currentIndex);
   		 currentIndex--;
			
    		// And swap it with the current element.
    		[array[currentIndex], array[randomIndex]] = [
      		array[randomIndex], array[currentIndex]];
  		}

  		return array.join("");
	}

	//array shuffle
	shuffleArray(array) {
		var currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	  }
	  
	
	//shuffle sentence
	shuffleSentence(sentence) {
		if( sentence.indexOf(' ') == -1 ) {
			return this.shuffleWord(sentence.split(""))
		}
		else{ 
			var final = ''
			var wordarr  =  this.shuffleArray(sentence.split(' '))
			for( let i=0; i<wordarr.length; i++ ){
				var res = this.shuffleWord(wordarr[i].split(""))
				final += res + " "
				
			}
						
			return final
			
		}
	}
}