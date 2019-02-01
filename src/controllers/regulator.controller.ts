/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Regulator} from '../models/regulator.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Regulator
 * A participant named Regulator
 */
export class RegulatorController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Regulator')
  async regulatorCreate(@requestBody() requestBody: Regulator): Promise<Regulator> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Regulator')
  async regulatorFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Regulator[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Regulator/{id}')
  async regulatorExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Regulator/{id}')
  async regulatorFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Regulator> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Regulator/{id}')
  async regulatorReplaceById(@requestBody() requestBody: Regulator, @param({name: 'id', in: 'path'}) id: string): Promise<Regulator> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Regulator/{id}')
  async regulatorDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

