export {};

// Property or signature expected error in TypeScript

// EXAMPLE 1 - Wrap hyphenated properties in quotes

interface Employee {
  'first-name': string;
}

const emp: Employee = {
  'first-name': 'Bobby',
};

// ---------------------------------------------------

// // EXAMPLE 2 - Wrap properties that contain spaces in quotes

// type Example = {
//   'two words': string;
// };

// const e: Example = {
//   'two words': 'hello world',
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Separate properties and types by a colon

// type Person = {
//   country: string;
// };

// const person: Person = {
//   country: 'Germany',
// };
