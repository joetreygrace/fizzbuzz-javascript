describe("FizzBuzz", () => {
  it("Returns '1' when given 1", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
  it("Returns '2' when given 2", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
  it("Returns 'Fizz' when given 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("Returns 'Buzz' when given 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("Returns 'Fizz' when given 6", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
});
