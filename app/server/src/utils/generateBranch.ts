function generateBranch(accountNumber: string) {
  // Logic for generating the verification digit (Modulo 11)
  const weights = [2, 3, 4, 5, 6, 7, 8, 9]; // Weights for each digit of the account number
  const reversedAccountNumber = accountNumber.split("").reverse(); // Reverse the account number
  let sum = 0;

  for (let i = 0; i < reversedAccountNumber.length; i++) {
    sum += parseInt(reversedAccountNumber[i]) * weights[i % weights.length];
  }

  const digit = (11 - (sum % 11)).toString();

  // The digit should be 0-9 or 'X' (if it's 10)
  return digit === "10" ? "X" : digit;
}

export default generateBranch;
