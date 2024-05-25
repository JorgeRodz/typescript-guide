(() => {
  const addNumbers = (a: number, b: number) => a + b;
  let mathAddOperacion: (num1: number, num2: number) => number;
  mathAddOperacion = addNumbers;
  console.log(mathAddOperacion(1,2))

  const greet = (name: string) => `Hola ${name}`;
  let stringGreet: (varible: string) => string;
  stringGreet = greet;
  console.log(stringGreet('Fernando'))


  const saveTheWorld = () => `El mundo esta salvado`;
  let returnString: () => string;
  returnString = saveTheWorld;
  console.log(returnString())
})();
