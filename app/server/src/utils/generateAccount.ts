function generateAccount() {
  const digits = "0123456789";
  let accountNumber = "";

  for (let i = 0; i < digits.length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const randomDigit = digits[randomIndex];
    accountNumber += randomDigit;
  }

  return accountNumber;
}

export default generateAccount;
