const shallowObjClone = require('./shallowObjClone');

test('Create a clone of the object parameter', () => {
  const runner = { name: "Shaun", bib: 69420 }
  expect(shallowObjClone(runner)).toStrictEqual(runner)
})

// Will fail becuse this needs strict equal
// test('Create a clone of the object parameter', () => {
//   const runner = { name: "Shaun", bib: 69420 }
//   expect(shallowObjClone(runner)).toBe(runner)
// })