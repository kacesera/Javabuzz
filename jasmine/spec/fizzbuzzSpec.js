describe('fizzBuzz', () => {
  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  })
  
  it("it prints 'Fizz' when the number is divisible by 3", () => {
    expect(fizzbuzz.play(3)).toEqual('Fizz');
    expect(fizzbuzz.play(9)).toEqual('Fizz');
    expect(fizzbuzz.play(12)).toEqual('Fizz'); 
  })

  it("prints 'Buzz' when the number is divisible by 5", () => {
    expect(fizzbuzz.play(5)).toEqual('Buzz');
    expect(fizzbuzz.play(10)).toEqual('Buzz');
    expect(fizzbuzz.play(20)).toEqual('Buzz');
  })

  it("prints 'FizzBuzz' when the number is both divisible by 3 and 5", () => {
    expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
    expect(fizzbuzz.play(90)).toEqual('FizzBuzz');
  })

  it("returns the number if it is not divisible by 3 or 5", () => {
    expect(fizzbuzz.play(1)).toEqual(1);
    expect(fizzbuzz.play(8)).toEqual(8);
    expect(fizzbuzz.play(13)).toEqual(13);
  })
})