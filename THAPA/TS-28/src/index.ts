// Bank Account Problem

// class BankAccount {
//   private _balance: number = 0;

// getter amnd setter names can be same.

//   public get balance(): number {
//     return this._balance;
//   }

//   public set balance(newBalance: number) {
//     if (newBalance < 0) {
//       throw new Error(" Invalid balance ");
//     }
//     this._balance = newBalance;
//   }
// }

// const account = new BankAccount();

// account.balance = -10; // setter is invoked

// console.log(account.balance); // getter is called

// =================================================================================================================================

// Temperature Converter

class Temperature {
  private _celsius: number = 0;
  public get celcius(): number {
    return this._celsius;
  }

  public set celcius(newCelsius) {
    this._celsius = newCelsius;
  }

  public get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  public set fahrenheit(newfarenheit) {
    this._celsius = ((newfarenheit - 32) * 5) / 9;
  }
}

const temp = new Temperature();

// celcius to fahrenheit conversion

temp.celcius = 25; // celcius setter is called

console.log(temp.fahrenheit); // celcius getter is called

// Farenheit to celcius conversion

temp.fahrenheit = 77; // fahrenheit setter is called

console.log(temp.celcius);
