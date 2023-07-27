let arr1 = [4,504,64,84,7,4,94]
function sumEvenNumber(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += arr[i];
		}
	}
	return result;
}
	
function sumEvenCase(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];
		}
	}
	return result;
}

console.log(sumEvenNumber(arr1));
console.log(sumEvenCase(arr1));
// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau
function f3(arr){
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += i;
		}
	}
	return result;
}
console.log(f3(arr1));
console.log("Le résultat doit être",1+2+3+5+6);

