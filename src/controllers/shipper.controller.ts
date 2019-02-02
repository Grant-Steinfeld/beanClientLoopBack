import { Request, RestBindings, get, operation, post, requestBody, ResponseObject, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Shipper } from '../models/shipper.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();


export class ShipperController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }


  /**
   *
   * @param id the shipperId
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Shipper/{id}', {
    //@get('/Shipper/{id}', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Shipper } } },
      },
    },
  })


  async shipperFind(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<Shipper> {
    let networkObj = await blockchainClient.connectToNetwork();
    let dataForQuery = {
      function: 'query',
      id: id,
      contract: networkObj.contract,
      network: networkObj.network
    };

    let result = await blockchainClient.queryByKey(dataForQuery);
    console.log(`lookup by key ${id}`);


    //console.log(rez);
    var rez = JSON.parse(result.toString());
    console.log(rez)
    let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
    let shipper = new Shipper({ shipperId: rez.id, organization: rez.organization, address: address });
    return shipper;
  }


  /**

  * @param requestBody Model instance data
  * @returns Request was successful
  */
  // generated code uses @operation decorator
  //@operation('post', '/Shipper')
  @post('/Shipper', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Shipper } } },
      },
    },
  })

  async shipperCreate(@requestBody() requestBody: Shipper): Promise<Shipper> {

    //example of how to submit args to transaction - this can be changed
    //  async addMember(ctx, id, organization, address, memberType) {

    console.log('shipper: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    let dataForAddMember = {
      function: 'addMember',
      id: requestBody.shipperId,
      organization: requestBody.organization,
      address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
      memberType: 'shipper',
      contract: networkObj.contract
    };

    var result = await blockchainClient.submitTransaction(dataForAddMember);

    console.info(result);

    //$to do: return blockchain hash or confirmation rather than the request
    return await requestBody;
  }


  // generated code follows ... note promise
  /**
   *
   *
   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Shipper/{id}')
  async shipperExists(@param({ name: 'id', in: 'path' }) id: string): Promise<{
    exists?: boolean;
  }> {
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
  async shipperReplaceById(@requestBody() requestBody: Shipper, @param({ name: 'id', in: 'path' }) id: string): Promise<Shipper> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Shipper/{id}')
  async shipperDeleteById(@param({ name: 'id', in: 'path' }) id: string): Promise<{

  }> {
    throw new Error('Not implemented');
  }

}
