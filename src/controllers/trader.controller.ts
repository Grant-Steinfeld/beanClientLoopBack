/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Trader} from '../models/trader.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Trader
 * A participant named Trader
 */
export class TraderController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Trader')
  async traderCreate(@requestBody() requestBody: Trader): Promise<Trader> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Trader')
  async traderFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Trader[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Trader/{id}')
  async traderExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
  exists?: boolean;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Trader/{id}')
  async traderFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Trader> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Trader/{id}')
  async traderReplaceById(@requestBody() requestBody: Trader, @param({name: 'id', in: 'path'}) id: string): Promise<Trader> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Trader/{id}')
  async traderDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

