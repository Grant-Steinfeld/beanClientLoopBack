import { Entity, model, property } from '@loopback/repository';

@model()
export class Shipper extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  shipperId: string;


  constructor(data?: Partial<Shipper>) {
    super(data);
  }
}
