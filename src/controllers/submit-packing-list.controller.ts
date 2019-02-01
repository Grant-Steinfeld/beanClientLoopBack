/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitPackingList} from '../models/submit-packing-list.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitPackingList
 * A transaction named submitPackingList
 */
export class SubmitPackingListController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitPackingList')
  async submitPackingListCreate(@requestBody() requestBody: SubmitPackingList): Promise<SubmitPackingList> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitPackingList')
  async submitPackingListFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitPackingList[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitPackingList/{id}')
  async submitPackingListFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitPackingList> {
    throw new Error('Not implemented');
  }

}

