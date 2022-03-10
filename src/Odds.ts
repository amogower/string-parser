export class Odds {
  private _numerator: number;
  private _denominator: number;
  private _fractionalPrice: string;

  constructor(fractionalPrice: string) {
    this._fractionalPrice = fractionalPrice;
  }

  public get numerator(): number {
    return this._numerator;
  }

  public get denominator(): number {
    return this._denominator;
  }

  public get fractionalOdds(): string {
    // returns fractional odds as string
    return null;
  }

  public get decimalOdds(): string {
    // Returns decimal price as double rounded down to two decimal places
		// Use any rounding method of your preference e.g. roundDownMethod(num/den + 1, 2)
    return null;
  }
}
