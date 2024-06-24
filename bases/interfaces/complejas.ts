(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 125,
      zip: 'KYI SUD',
      city: 'Ottawa',
    },
    getFullAddress(id: string) {
      return this.address.city
    },
  };

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      id: 120,
      zip: 'KYI SUD',
      city: 'Toronto',
    },
    getFullAddress(id: string) {
      return this.address.city
    },
  };
})();
