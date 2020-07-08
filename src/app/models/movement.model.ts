import { BaseModel } from './base.model';
import { CurrentAccount } from './current-account.model';
import { MovementType } from './movement-type';

export class Movement extends BaseModel{
	movementDate: Date;
	movementType: MovementType;
	currentAccount: CurrentAccount;
	description: string;
	amount: number;
}