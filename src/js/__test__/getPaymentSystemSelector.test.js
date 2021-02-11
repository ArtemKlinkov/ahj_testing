import getPaymentSystemSelector from '../getPaymentSystemSelector';

test.each([
  ['mir card selector', '2201382000000013', '.mir'],
  ['diners club card selector', '38520000023237', '.diners-club'],
  ['jcb card selector', '3530111333300000', '.jcb'],
  ['american express card selector', '371449635398431', '.american-express'],
  ['visa card selector', '4111111111111111', '.visa'],
  ['mastercard selector', '5105105105105100', '.mastercard'],
  ['discover card selector', '6011111111111117', '.discover'],
  ['null for other card numbers', '5610591081018250', null],
])(('it should be %s'), (_, num, expected) => {
  expect(getPaymentSystemSelector(num)).toBe(expected);
});
