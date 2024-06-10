(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armor suit',
  };

  const captainAmerica = {
    name: 'Capitan America',
    weapon: 'Escudo',
  };

  const thor = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
