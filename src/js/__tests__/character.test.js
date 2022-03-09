import Character from '../character/Character';

test('test fails for invalid name', () => {
  try {
    const a = new Character('l', 'Swordsman');
    console.log(a);
  } catch (e) {
    expect(e.message).toEqual('Invalid name value');
  }
});

test('test fails for invalid type', () => {
  try {
    const a = new Character('Potter', 'Wizard');
    console.log(a);
  } catch (e) {
    expect(e.message).toEqual('Invalid type value');
  }
});

test('test not fails for valid name and type', () => {
  const a = new Character('Leon', 'Swordsman');

  expect(a).toBeDefined();
});
