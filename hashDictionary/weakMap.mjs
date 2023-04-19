const map = new WeakMap();

const obj1 = { name: 'Gustavo'};
const obj2 = { middleName: 'de Almeida'};
const obj3 = { lastName: 'Venceslau'};

map.set(obj1, 'name@mail.com');
map.set(obj2, 'middleName@mail.com');
map.set(obj3, 'lastName@mail.com');

console.log(map.has(obj1));
console.log(map.get(obj3));
map.delete(obj2);
console.log(map);