import { BaseModel } from './base.model';
import { OperationType } from './operation-type';

export class MovementType extends BaseModel{
	code: string;
	name: string;
	description: string;
	operationType: OperationType;
}