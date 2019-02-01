/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitFairTradeData} from '../models/submit-fair-trade-data.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitFairTradeData
 * A transaction named submitFairTradeData
 */
export class SubmitFairTradeDataController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitFairTradeData')
  async submitFairTradeDataCreate(@requestBody() requestBody: SubmitFairTradeData): Promise<SubmitFairTradeData> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitFairTradeData')
  async submitFairTradeDataFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitFairTradeData[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitFairTradeData/{id}')
  async submitFairTradeDataFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitFairTradeData> {
    throw new Error('Not implemented');
  }

}

