function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  let finalArr = collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );

  return finalArr;
}

const testArr = [
  { first: 'Romeo', last: 'Montague' },
  { first: 'Mercutio', last: null },
  { first: 'Tybalt', last: 'Capulet' },
];

whatIsInAName(testArr, { last: 'Capulet' });

// should return { first: 'Tybalt', last: 'Capulet' }

whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
// should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);
// should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 },
  ],
  { apple: 1, bat: 2 }
);
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
// should return []

whatIsInAName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 });
// should return []
