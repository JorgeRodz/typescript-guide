(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0)); // only works with any

  avenger = 150.233214;
  console.log(<number>avenger.toFixed()); // another way to casting

  console.log(exists);
  console.log(power);
})();
