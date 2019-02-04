/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Regulator} from '../models/regulator.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
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
//example of how to submit args to transaction - this can be changed
    //  async addMember(ctx, id, organization, address, memberType) {

      console.log('retailer: ')
      console.log(requestBody)
  
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.regulatorId,
        organization: requestBody.organization,
        address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
        memberType: 'retailer',
        contract: networkObj.contract
      };
  
      var result = await blockchainClient.addMember(dataForAddMember);
  
      console.log('result from blockchainClient.submitTransaction in controller: ')
      console.log(result.toString())
  
      //$to do: return blockchain hash or confirmation rather than the request
      return result;    
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

    let networkObj = await blockchainClient.connectToNetwork();
    let dataForQuery = {
      function: 'query',
      id: id,
      contract: networkObj.contract,
      network: networkObj.network
    };

    console.log('before blockchainClient.queryByKey')
    let result = await blockchainClient.queryByKey(dataForQuery);
    console.log(`lookup by key ${id}`);
    console.log('result after calling client.queryByKey: ')
    console.log(result)
    if (result.id) {
      var rez = JSON.parse(result.toString());
      console.log(rez)
      let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
      let regulator = new Regulator({ regulatorId: rez.id, organization: rez.organization, address: address });
      return regulator;
    } 
    return result;
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

