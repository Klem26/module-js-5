const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;
console.log(parent.isPrototypeOf(child));
console.log(parent.surname);
console.log(parent.hasOwnProperty('heritage'));
console.log(ancestor.isPrototypeOf(parent))
console.log(child.heritage )
console.log(child.surname)
console.log(child.hasOwnProperty('heritage'))
console.log(ancestor.surname)