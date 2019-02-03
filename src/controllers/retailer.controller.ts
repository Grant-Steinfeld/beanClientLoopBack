/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Retailer} from '../models/retailer.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
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

    //example of how to submit args to transaction - this can be changed
    //  async addMember(ctx, id, organization, address, memberType) {

      console.log('retailer: ')
      console.log(requestBody)
  
      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.retailerId,
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
  @operation('get', '/Retailer/{id}', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Retailer } } },
      },
    },
  })

  async retailerFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Retailer> {
    
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


    //console.log(rez);
    var rez = JSON.parse(result.toString());
    console.log(rez)
    let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
    let retailer = new Retailer({ retailerId: rez.id, organization: rez.organization, address: address });
    return retailer;

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

