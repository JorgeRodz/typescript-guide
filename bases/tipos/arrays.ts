(() => {
  // const numbers: (string | number | boolean)[] = [ 1, 2, 3, 4, 5, '6', 7, 8, 9, 10, ];
  const numbers1: number[] = [ 1, 2, 3, 4, 5, 7, 8, 9, 10, ];
  const numbers2: Array<number> = [ 1, 2, 3, 4, 5, 7, 8, 9, 10, ];

  // implicit string[]
  // implicit Array<string>
  const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

  villians.forEach(v => console.log(v.toUpperCase()))
})();
