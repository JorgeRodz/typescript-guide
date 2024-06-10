(() => {
  // -------------------- Object desctructuring --------------------

  type AvengersType = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: AvengersType = {
    nick: 'Samuel L. Jackson',
    ironman: 'Rober Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500,
  };

  // const { poder, vision } = avengers

  // console.log(poder.toFixed(2), vision.toLocaleUpperCase())

  const printAvenger = ({ ironman, poder, ...resto }: AvengersType): void => {
    // console.log(ironman)
    // console.log(poder)
    // console.log(resto)
  };

  printAvenger(avengers);

  // -------------------- Array desctructuring --------------------

  const avengersArr: [string, boolean, number] = ['Cap. America', true, 99];
  const [capi,,thisIsANumber] = avengersArr;
  // console.log({thisIsANumber, capi });
})();
