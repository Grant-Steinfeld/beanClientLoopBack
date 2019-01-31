import {Entity, model, property} from '@loopback/repository';

@model()
export class Regulator extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  organization: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;


  constructor(data?: Partial<Regulator>) {
    super(data);
  }
}
