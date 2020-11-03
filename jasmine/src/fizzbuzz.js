class fizzBuzz {
  play(number) {
    if(this._isDivisibleBy(number, 15)) {
      return 'FizzBuzz';
    }else if(this._isDivisibleBy(number, 5)) {
      return 'Buzz';
    }else if(this._isDivisibleBy(number, 3)) {
      return 'Fizz';
    }else {
      return number;
    }
  }

  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }
}

let fizzbuzz = new fizzBuzz;
let print = (arg) => console.log(arg);

for (let i=1; i<=100; i++) {
  print(fizzbuzz.play(i))
}