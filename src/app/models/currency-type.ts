import { BaseModel } from './base.model';

export class CurrencyType extends BaseModel{
	code: string;
	name: string;
	description: string;
}