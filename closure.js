const bank = owner => {
   balance = 0;
   return amount => {
      balance = balance + amount;
      return balance;
   }
}
const mofijBank = bank('mofiz');
console.log(mofijBank(100));
