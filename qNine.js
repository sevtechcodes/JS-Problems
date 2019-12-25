
//9. Write a function findRepeat that very first charecter that repeats in a given string. It should return the repeated character, else if no characters are repeated it should return null.
//E.g. findRepeat(‘heythere’) should return h

function firstRepeatingLetter(str){
	for (var i = 0; i < str.length; i++){
		var count = 0;
		
		for (var j = 0; j < str.length; j++){
			
			if (str[i] === str[j]) {
				count++;
				
				if (count >= 2) {
				return str[i];
				}
			}	

		}
	}
}
console.log(firstRepeatingLetter('heythere'));