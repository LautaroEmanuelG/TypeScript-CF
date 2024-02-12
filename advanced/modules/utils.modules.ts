export const PI = 3.14159265359;

export interface User {
  name: string;
  age: number;
  id: number;
}

export const generateRandomId = () => {
  return Math.floor(Math.random() * 100);
};
