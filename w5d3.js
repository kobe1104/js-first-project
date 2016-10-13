// function unique(array) {
//   var unique_arr = [];
//
//   for (var i in array) {
//     if (!unique_arr.includes(array[i])) {
//       unique_arr.push(array[i]);
//     }
//   }
//   console.log(unique_arr);
// }
//
//
// function two_sum(arr) {
//   const result = [];
//
//   for (let i = 0; i < arr.length; i ++) {
//     for (let j = i + 1; j < arr.length; j ++) {
//       if ((arr[i] + arr[j] == 0) && (i != j)) {
//         result.push([i,j]);
//       }
//     }
//   }
//   // console.log(unique(result));
//
//   console.log(result);
// }


// function my_transpose(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       sub =[];
//       for (let j = 0; j < arr.length; j++) {
//         sub.push(arr[j][i]);
//       }
//       result.push(sub);
//     }
//   console.log(result);
// }


// Array.prototype.myEach = function(cb) {
//   for (let i = 0; i < this.length; i++) {
//     console.log(cb(this[i]));
//   }
//   return this;
// }
//
// //TODO: learn how to use myEach instead
// Array.prototype.myMap = function(cb) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i]));
//   }
//   console.log(result);
// }
//
// //TODO: learn how to use myEach instead. Learn how to make accumulator optional
// Array.prototype.myInject = function(cb) {
//     let result = this.shift();
//   for (let i = 0; i < this.length; i++) {
//     result = cb(result, this[i]);
//   }
//   console.log(result);
// }
//
//
// Array.prototype.bubble_sort = function() {
//   let sorted = false;
//
//   while (sorted == false) {
//     for (let i = 0; i < this.length - 1; i++) {
//       sorted = true;
//       j = i + 1;
//       if (this[i] > this[j]){
//         let temp = this[i];
//         this[i] = this[j];
//         this[j] = temp;
//         sorted = false;
//       }
//     }
//   }
//   console.log(this);
// }

// String.prototype.substring = function() {
//   const result = [];
//   for(let i = 0; i < this.length+1; i++) {
//     for(let j = i+1; j < this.length+1; j++) {
//       result.push(this.slice(i,j));
//     }
//   }
//   console.log(result);
// }

function exponentiation (base,power) {
  if (power == 0) {
    return 1;
  }
  return base * exponentiation(base, power-1);
}

function exponentiation2(base,power) {
  if (power == 0) {
    return 1;
  }
  if (power % 2 == 0) {
    return Math.pow(exponentiation2(base,(power/2)),2)

  }
  else {
    return base * Math.pow(exponentiation2(base,(power-1)/2),2);
  }
}

function fibbonacci(n) {
  if (n==1) {
    return [0];
  }
  if (n==2) {
    return [0,1];
  }
  let last_fib = fibbonacci(n-1);
  last_fib.push(last_fib[last_fib.length-2]+last_fib[last_fib.length-1]);
  return last_fib;
  console.log(last_fib);
}
