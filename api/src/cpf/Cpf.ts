export default class Cpf {
  readonly CPF_LENGTH = 11;
  readonly FACTOR_DIGIT1 = 10;
  readonly FACTOR_DIGIT2 = 11;
  value: string;

  constructor(cpf: string) {
    if (!this.validate(cpf)) {
      throw new Error('Invalid CPF');
    }
    this.value = cpf;
  }

  validate(cpf: string): boolean {
    if (!cpf) {
      return false;
    }
    const cpfConvert = this.clean(cpf);
    if (this.isValidLength(cpfConvert)) {
      return false;
    }
    if (this.isBlocked(cpfConvert)) {
      return false;
    }
    const firstDigitChecker = this.getCalculedDigit(
      cpfConvert,
      this.FACTOR_DIGIT1
    );
    const secondDigitChecker = this.getCalculedDigit(
      cpfConvert,
      this.FACTOR_DIGIT2
    );
    const digitChecker = cpfConvert.slice(9);
    const resultDigitChecker = `${firstDigitChecker}${secondDigitChecker}`;
    return digitChecker === resultDigitChecker;
  }

  clean(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  isValidLength(cpf: string): boolean {
    return cpf.length !== this.CPF_LENGTH;
  }

  isBlocked(cpf: string): boolean {
    const [firstDigit] = cpf;
    return [...cpf].every((c) => c === firstDigit);
  }

  getCalculedDigit(cpf: string, factor: number): number {
    let total = 0;
    [...cpf].forEach((digit) => {
      if (factor > 1) {
        total += Number(digit) * factor--;
      }
    });
    return this.getDigitChecker(total);
  }

  getDigitChecker(digit: number): number {
    const rest = digit % 11;
    return rest < 2 ? 0 : 11 - rest;
  }
}
