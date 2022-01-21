const CPF_LENGTH = 11;
const FACTOR_DIGIT1 = 10;
const FACTOR_DIGIT2 = 11;

function getDigitChecker(digit) {
  const rest = digit % 11;
  return rest < 2 ? 0 : 11 - rest;
}

function getCalculedDigit(cpf, factor) {
  let total = 0;
  let factorRaw = factor;

  [...cpf].forEach((digit) => {
    if (factorRaw > 1) {
      total += Number(digit) * factorRaw--;
    }
  });

  return getDigitChecker(total);
}

function clean(cpf) {
  return cpf.replace(/\D/g, '');
}

function isBlocked(cpf) {
  const [firstDigit] = cpf;
  return [...cpf].every((c) => c === firstDigit);
}

function isValidLength(cpf) {
  return cpf.length !== CPF_LENGTH;
}

function validate(cpf) {
  if (!cpf) return false;

  const cpfConvert = clean(cpf);

  if (isValidLength(cpfConvert)) return false;
  if (isBlocked(cpfConvert)) return false;

  const firstDigitChecker = getCalculedDigit(cpfConvert, FACTOR_DIGIT1);
  const secondDigitChecker = getCalculedDigit(cpfConvert, FACTOR_DIGIT2);
  const digitChecker = cpfConvert.slice(9);
  const resultDigitChecker = `${firstDigitChecker}${secondDigitChecker}`;
  return digitChecker === resultDigitChecker;
}

module.exports = { validate };
