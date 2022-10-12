// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

const sayHello = (name) => console.log('Hi' + " " + name);

const sayHello2 = (name,phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Preeti');
const sayHello4 = (name) => 'Hi'+ ' ' + name;

sayHello('Preeti');
sayHello2('Preeti', 'Hi');
sayHello3();
console.log(sayHello4('Preeti'));

const sayHello5 = (name,phrase ='Hello') => console.log(phrase + " " + name);

sayHello5('Preeti');

function checkInput(a,...strings){
	let emptyText = false;
	for(const text of strings){
		if(!text){
			emptyText = true;
			break;
		}
	}
	if(!emptyText){
		a();
	}
}
checkInput(()=>{
	console.log("All not empty");
}, 
'Preeti',
'Anjali',
'1233'
);