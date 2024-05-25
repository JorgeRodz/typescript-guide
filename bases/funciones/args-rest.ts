(() => {
  const fullName = (firstNmae: string, ...restArgs: string[]): string => {
    return `${firstNmae} ${restArgs.join(' ')}`;
  };

  const superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');

  console.log({ superman });
})();
