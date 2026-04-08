let even = 0;
let odd = 0;
let multipliesofthree = 0;
for (let count = 0; count <= 50; count++){
    if (count % 3 === 0 && count % 5 === 0){
        console.log(count + " FizzBuzz");
    }
    else if (count % 3 === 0) {
        console.log(count + " Fizz");
    }

    else if (count % 5 === 0) {

    console.log(count + " Buzz");
    }
    else {
        console.log(count)
    }


    if (count % 2 === 0){
        even++
    }
    else {
        odd++
    }
    if (count % 3 === 0){
        multipliesofthree++
    }
}
console.log("even = " + even)
console.log("odd = " + odd)
console.log("multipliesofthree = " + multipliesofthree)