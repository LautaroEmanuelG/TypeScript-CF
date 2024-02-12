interface Person {
  name: string;
  age: number;
}

// interface getPerson {
//     getName: () => string;
//     getAge: () => number;
// }

// interface User {

// }

// Getter dinamico util para hacer un get de cada propiedad de un objeto
type Getter<T> = {
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};

type GetPerson = Getter<Person>;
