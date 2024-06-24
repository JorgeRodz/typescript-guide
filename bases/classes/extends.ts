(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log('Constructor avenger llamado');
    }

    protected getFullname(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, private isMutant: boolean) {
      super(name, realName);
      // console.log('Constructor xmen llamado');
    }

    get getIsMutan() {
      return this.isMutant;
    }

    set setIsMutant(isMutantParam: boolean) {
      this.isMutant = isMutantParam;
    }

    getFullNameDesdeXmen() {
      // console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log(wolverine.getIsMutan)

  class Person {
    constructor(private firstName: string, private secondName: string, private age: number) {
    }

    get getFirstName(): String {
      return this.firstName;
    }

    get getSecondName(): String {
      return this.secondName;
    }

    get getAge(): number {
      return this.age;
    }

    set setAge(ageParam: number) {
      this.age = ageParam;
    }

    set setFirstName(firstNameParam: string) {
      this.firstName = firstNameParam;
    }

    set setSecondName(secondNameParam: string) {
      this.secondName = secondNameParam;
    }
  }

  const Jorge = new Person('Jorge', 'Alberto', 32)
  // console.log(Jorge.getAge)
  // console.log(Jorge.getFirstName)
  // console.log(Jorge.getSecondName)

  Jorge.setAge = 40;
  // console.log(Jorge.getAge)
})();
