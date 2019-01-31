import { Entity, model, property } from '@loopback/repository';

@model()
export class Cup extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;



  @property({
    type: 'string',
    required: true,
  })
  cupId: string;


  constructor(data?: Partial<Cup>) {
    super(data);
  }
}
