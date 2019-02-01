/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Condition} from './condition.model';

/**
 * The model class is generated from OpenAPI schema - submitInboundWeightTally
 * A transaction named submitInboundWeightTally
 */
@model({name: 'submitInboundWeightTally'})
export class SubmitInboundWeightTally {
  constructor(data?: Partial<SubmitInboundWeightTally>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.submitInboundWeightTally';

  /**
   * The identifier of an instance of coffeeBatch
   */
  @property({name: 'coffeeBatch', required: true})
  coffeeBatch: {
  
};

  /**
   * 
   */
  @property({name: 'dateStripped'})
  dateStripped?: Date;

  /**
   * 
   */
  @property({name: 'marks'})
  marks?: string;

  /**
   * 
   */
  @property({name: 'bagsExpected'})
  bagsExpected?: number;

  /**
   * A concept named Condition
   */
  @property({name: 'condition', required: true})
  condition: Condition;

  /**
   * 
   */
  @property({name: 'insectActivity', required: true})
  insectActivity: boolean;

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

