(() => {
  const batman: string = 'Batman';
  const linternaVerde: string = 'Batman';
  const volcanNegro: string = `Heroe: Volcan Negro`;

  const abc = 123;

  console.log(` I'm ${batman}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();
