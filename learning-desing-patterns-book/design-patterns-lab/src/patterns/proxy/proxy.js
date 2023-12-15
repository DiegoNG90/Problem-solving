const diego = {
  name: 'Diego',
  lastName: 'Gandara',
  age: 33,
  interests: ['basket', 'programming', 'boxing', 'eating'],
};

const proxyDiego = new Proxy(diego, {
  get: (obj, prop) => {
    if (!Object.keys(obj).includes(prop)) {
      return console.error(
        `[GET-ERROR] - the prop ${prop} doesn't exist inside object Diego`
      );
    }
    console.log(`The value of prop ${prop} is ${obj[prop]}`);
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      return console.error(
        '[SET-ERROR] - Cannot change age with a typeof value different from number'
      );
    }
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return (obj[prop] = value);
  },
});

console.log('diego', diego);
proxyDiego.name;
proxyDiego.color;
proxyDiego.age = true;
proxyDiego.name = 'Manuel';
console.log('diego', diego);
