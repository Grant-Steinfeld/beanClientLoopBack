/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {AddCoffee} from '../models/add-coffee.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by addCoffee
 * A transaction named addCoffee
 */
export class AddCoffeeController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/addCoffee')
  async addCoffeeCreate(@requestBody() requestBody: AddCoffee): Promise<AddCoffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/addCoffee')
  async addCoffeeFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<AddCoffee[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/addCoffee/{id}')
  async addCoffeeFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<AddCoffee> {
    throw new Error('Not implemented');
  }

}

