/////////////
// SOAL 1 //
///////////

let reverse = (char) => {
    let splitChar = char.split("");

    let revChar = splitChar.reverse();

    let joinChar = revChar.join("");

    return joinChar;
}


console.log(reverse("abcde"));


/////////////
// SOAL 2 //
///////////

let fibonacci = (n) => {

    let fib = [0, 1];
    for (let i = fib.length; i < n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    console.log(fib+'');
}

fibonacci(10);


/////////////
// SOAL 3 //
///////////

let faktorial = (a) => {
    let res = 0;

    if (a<=1) {
        res = 1;
        return res;
    }
    else {
        for (let i = 1; i <= a; i++) {
            res = a*faktorial(a-1);
        }
        return res
    }
}

// console.log(faktorial(3));

let combination = (n, r) => {
    let res = 0;
    let min = n-r;
    n = faktorial(n);
    r = faktorial(r);
    min = faktorial(min);
    res = n/(min*r);
    return res
}
console.log(combination(4, 2));


// let permutator = (inputArray) => {
//     let res = []

//     let permutate = (arr, m = []) => {
//         if (arr.length == 0) {
//             res.push(m)
//         }
//         else {
//             for (let i = 0; i < arr.length; i++) {
//                 let curr = arr.slice();
//                 let next = curr.splice(i, 1);
//                 permutate(curr.slice(), m.concat(next))
//             }
//         }
//     }

//     permutate(inputArray)
//     return res;
// }

// console.log(permutator([1,2,3]));

