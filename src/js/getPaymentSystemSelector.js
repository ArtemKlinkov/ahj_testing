/**
 * @license
 * american-express.png
 * diners-club.png
 * discover.png
 * jcb.png
 * mastercard.png
 * mir.png
 * visa.png
 */

export default function getPaymentSystemSelector(num) {
  if (/^2/.test(num)) {
    return '.mir';
  }

  if (/^3[0|6|8]/.test(num)) {
    return '.diners-club';
  }

  if (/^3[1|5]/.test(num)) {
    return '.jcb';
  }

  if (/^3[4|7]/.test(num)) {
    return '.american-express';
  }
  if (/^4/.test(num)) {
    return '.visa';
  }

  if (/^5[1-5]/.test(num)) {
    return '.mastercard';
  }

  if (/^6[0]/.test(num)) {
    return '.discover';
  }

  return null;
}
