/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitInboundWeightTally} from '../models/submit-inbound-weight-tally.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitInboundWeightTally
 * A transaction named submitInboundWeightTally
 */
export class SubmitInboundWeightTallyController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitInboundWeightTally')
  async submitInboundWeightTallyCreate(@requestBody() requestBody: SubmitInboundWeightTally): Promise<SubmitInboundWeightTally> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitInboundWeightTally')
  async submitInboundWeightTallyFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitInboundWeightTally[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitInboundWeightTally/{id}')
  async submitInboundWeightTallyFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitInboundWeightTally> {
    throw new Error('Not implemented');
  }

}

