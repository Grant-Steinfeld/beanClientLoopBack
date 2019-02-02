/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Retailer} from '../models/retailer.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Retailer
 * A participant named Retailer
 */
export class RetailerController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Retailer')
  async retailerCreate(@requestBody() requestBody: Retailer): Promise<Retailer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Retailer')
  async retailerFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Retailer[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Retailer/{id}')
  async retailerExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Retailer/{id}')
  async retailerFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Retailer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Retailer/{id}')
  async retailerReplaceById(@requestBody() requestBody: Retailer, @param({name: 'id', in: 'path'}) id: string): Promise<Retailer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Retailer/{id}')
  async retailerDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

