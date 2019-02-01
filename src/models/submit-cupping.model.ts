/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitCupping
 * A transaction named submitCupping
 */
@model({name: 'submitCupping'})
export class SubmitCupping {
  constructor(data?: Partial<SubmitCupping>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.submitCupping';

  /**
   * The identifier of an instance of coffeeBatch
   */
  @property({name: 'coffeeBatch', required: true})
  coffeeBatch: {
  
};

  /**
   * 
   */
  @property({name: 'date', required: true})
  date: Date;

  /**
   * 
   */
  @property({name: 'cupper', required: true})
  cupper: string;

  /**
   * 
   */
  @property({name: 'aroma'})
  aroma?: number;

  /**
   * 
   */
  @property({name: 'flavor'})
  flavor?: number;

  /**
   * 
   */
  @property({name: 'afterTaste'})
  afterTaste?: number;

  /**
   * 
   */
  @property({name: 'acidity'})
  acidity?: number;

  /**
   * 
   */
  @property({name: 'body'})
  body?: number;

  /**
   * 
   */
  @property({name: 'finalScore'})
  finalScore?: number;

  /**
   * 
   */
  @property({name: 'batchId', required: true})
  batchId: string;

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

