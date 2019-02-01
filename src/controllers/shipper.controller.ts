/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Shipper} from '../models/shipper.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Shipper
 * A participant named Shipper
 */
export class ShipperController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Shipper')
  async shipperCreate(@requestBody() requestBody: Shipper): Promise<Shipper> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Shipper')
  async shipperFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Shipper[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Shipper/{id}')
  async shipperExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Shipper/{id}')
  async shipperFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Shipper> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Shipper/{id}')
  async shipperReplaceById(@requestBody() requestBody: Shipper, @param({name: 'id', in: 'path'}) id: string): Promise<Shipper> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Shipper/{id}')
  async shipperDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

