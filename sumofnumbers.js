function sumFor(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
function sumWhile(numbers){
  let sum = 0;
  let i = 0;
  while (i < numbers.length){
    sum += numbers[i];
    i++;
  }
  return sum;
}
function sumRecursion(numbers){
  if(numbers.length === 0){
    return 0
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
function  sumTheSimpleWay(numbers){
  return _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));