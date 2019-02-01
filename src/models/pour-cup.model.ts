/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - pourCup
 * A transaction named pourCup
 */
@model({name: 'pourCup'})
export class PourCup {
  constructor(data?: Partial<PourCup>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.pourCup';

  /**
   * 
   */
  @property({name: 'cupId', required: true})
  cupId: string;

  /**
   * 
   */
  @property({name: 'timeStamp'})
  timeStamp?: string;

  /**
   * The instance identifier for this type
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: Date;

}

