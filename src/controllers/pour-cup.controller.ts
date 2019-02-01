/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {PourCup} from '../models/pour-cup.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by pourCup
 * A transaction named pourCup
 */
export class PourCupController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/pourCup')
  async pourCupCreate(@requestBody() requestBody: PourCup): Promise<PourCup> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/pourCup')
  async pourCupFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<PourCup[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/pourCup/{id}')
  async pourCupFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<PourCup> {
    throw new Error('Not implemented');
  }

}

