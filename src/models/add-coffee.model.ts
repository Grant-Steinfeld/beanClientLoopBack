/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - addCoffee
 * A transaction named addCoffee
 */
@model({name: 'addCoffee'})
export class AddCoffee {
  constructor(data?: Partial<AddCoffee>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.addCoffee';

  /**
   * 
   */
  @property({name: 'size', required: true})
  size: 'SMALL' | 'MEDIUM' | 'LARGE';

  /**
   * 
   */
  @property({name: 'roast', required: true})
  roast: 'LIGHT' | 'MEDIUM' | 'DARK';

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState: 'READY_FOR_DISTRIBUTION' | 'ORGANIC_CERTIFICATION_APPROVED' | 'REGULATION_TEST_PASSED' | 'IMPORTED' | 'READY_FOR_SALE';

  /**
   * The identifier of an instance of grower
   */
  @property({name: 'grower', required: true})
  grower: {
  
};

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

