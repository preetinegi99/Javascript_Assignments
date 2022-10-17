const numbers = [1,3,4,5,9,8,6,3];

const reqArray = numbers.filter(val => val > 5);
console.log(reqArray);

const mapNumber = numbers.map(val => ({num: val}));
console.log(mapNumber);

const multi = numbers.reduce((curResult,curVal) => curResult * curVal,1);
console.log(multi);

function findMAx(...nums){
	let curMax = nums[0];
	for (const num of nums){
		if (num > curMax){
			curMax = num;
		}
	}
	return curMax;
}
console.log(findMAx(...numbers));

function findMinMAx(...nums){
	let curMax = nums[0];
	let curMin = nums[0];
	for (const num of nums){
		if (num > curMax){
			curMax = num;
		}

		if (num < curMin){
			curMin = num;
		}
	}
	return [curMax,curMin];
}
const [max,min] = findMinMAx(...numbers);
console.log(max,min);

const names = new Set();
names.add('Preeti');
names.add('Anjali');
names.add('Preeti');

console.log(names);