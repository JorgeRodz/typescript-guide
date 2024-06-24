(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): void;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutanPower(id: number): void {
      console.log(this.name + ' ' + this.realName);
    }
  }
})();
