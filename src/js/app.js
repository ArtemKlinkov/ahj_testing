import getPaymentSystemSelector from './getPaymentSystemSelector';
import validateCardNumber from './validateCardNumber';

const validateBtn = document.querySelector('.validate-button');
const inputField = document.querySelector('.card-number-input');
const messageField = document.querySelector('.error-message-container');

function refreshWidget() {
  messageField.innerHTML = '';
  const activeCard = document.querySelector('.active');

  if (activeCard) {
    activeCard.classList.remove('active');
  }
}

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  refreshWidget();

  const num = inputField.value;

  if (validateCardNumber(num) && num !== '') {
    const selector = getPaymentSystemSelector(num);
    const card = document.querySelector(selector);
    card.classList.add('active');
  } else {
    const messageEl = document.createElement('p');
    messageEl.className = 'error-message';
    messageEl.textContent = 'invalid card number';
    messageField.appendChild(messageEl);
  }
});

inputField.addEventListener('input', () => {
  refreshWidget();
  const selector = getPaymentSystemSelector(inputField.value);
  const card = document.querySelector(selector);
  card.classList.add('active');
});
