true || console.log("Hello");
false || console.log ("Hey");
//logical operations in Js is identical to C, but OR || can be used in such a way that it stops when it reaches the first
//truthy value

true && console.log("Hello");
false && console.log("hey");
// && operation stops when it reaches a falsey value

//alternative to if else using ? operator
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, you are a child!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

  const grade = 87;
  
//switch case of value range
switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}