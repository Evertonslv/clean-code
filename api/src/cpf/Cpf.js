function validate(cpf) {
  if (!cpf || cpf.length < 11 || cpf.length > 14) {
    return false;
  }

  const str = cpf.replace(/\D/g, '');

  if (!str.split('').every((c) => c === str[0])) {
    try {
      let d1;
      let d2;
      let dg1;
      let dg2;
      let rest;
      let digito;
      d1 = 0;
      d2 = 0;
      dg1 = 0;
      dg2 = 0;
      rest = 0;

      for (let nCount = 1; nCount < str.length - 1; nCount++) {
        digito = Number(str.substring(nCount - 1, nCount));
        d1 += (11 - nCount) * digito;
        d2 += (12 - nCount) * digito;
      }

      rest = d1 % 11;
      dg1 = rest < 2 ? (dg1 = 0) : 11 - rest;
      d2 += 2 * dg1;
      rest = d2 % 11;
      if (rest < 2) dg2 = 0;
      else dg2 = 11 - rest;

      const nDigVerific = str.substring(str.length - 2, str.length);
      const nDigResult = `${dg1}${dg2}`;
      return nDigVerific === nDigResult;
    } catch (e) {
      console.error('Erro:', e);
      return false;
    }
  } else return false;
}

module.exports = { validate };
