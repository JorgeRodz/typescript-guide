(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    console.log({firstName, lastName}) // {firstName: 'Tony', lastName: undefined}

    return `${firstName} ${lastName || '"----------"'}`;
  };

  const name = fullName('Tony');

  console.log({ name }); // {name: 'Tony "----------"'}
})();
