/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitCupping} from '../models/submit-cupping.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitCupping
 * A transaction named submitCupping
 */
export class SubmitCuppingController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitCupping')
  async submitCuppingCreate(@requestBody() requestBody: SubmitCupping): Promise<SubmitCupping> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitCupping')
  async submitCuppingFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitCupping[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitCupping/{id}')
  async submitCuppingFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitCupping> {
    throw new Error('Not implemented');
  }

}

