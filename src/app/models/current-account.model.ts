import { BaseModel } from './base.model';
import { CurrencyType } from './currency-type';

export class CurrentAccount extends BaseModel{
	accountNumber: string;
	balance: number;
	currencyType: CurrencyType;

	constructor(id: number){
		super();
		super.id = id;
	}
}