import validateCardNumber from '../validateCardNumber';

test.each([
  ['true for valide mir card number', '2201382000000013', true],
  ['true for valide diners club card number', '38520000023237', true],
  ['true for valide jcb card number', '3530111333300000', true],
  ['true for valide american express card number', '371449635398431', true],
  ['true for valide visa card number', '4111111111111111', true],
  ['true for valide mastercard number', '5105105105105100', true],
  ['true for valide discover card number', '6011111111111117', true],
  ['false for invalide card number', '0105105105105100', false],
  ['false for invalide card number', '1234', false],
  ['false for string instead of number', 'номер', false],
])(('it should be %s'), (_, num, expected) => {
  expect(validateCardNumber(num)).toBe(expected);
});
