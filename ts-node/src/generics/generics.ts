export const printObject = (argument: any): void => {
  console.log(argument);
};

// <T> -> to describe as a generic function
export function genericFunction<T>(argument: T) {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;
