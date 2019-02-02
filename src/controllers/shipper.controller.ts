import { Request, RestBindings, get, post, requestBody, ResponseObject, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Shipper } from '../models/shipper.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();


export class ShipperController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }


  @get('/Shipper/{shipperId}', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Shipper } } },
      },
    },
  })
  async findById(@param.path.string('shipperId') shipit: string): Promise<Shipper> {


    let networkObj = await blockchainClient.connectToNetwork();
    let dataForQuery = {
      function: 'query',
      id: shipit,
      contract: networkObj.contract,
      network: networkObj.network
    };

    let result = await blockchainClient.queryByKey(dataForQuery);
    console.log(`lookup by key $(shipit)`);

    //console.log(rez);
    var rez = JSON.parse(result.toString());
    console.log(rez)
    let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
    let shipper = new Shipper({ shipperId: rez.id, organization: rez.organization, address: address });
    return shipper;

  }

  // Map to `GET /Shipper`
  @get('/Shipper', {
    responses: {
      '200': "shippers ... ",
    },
  })
  Shipper(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'found Shipper',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  // Map to `POST`
  @post('/Shipper', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Shipper } } },
      },
    },
  })
  async create(@requestBody() shipper: Shipper): Promise<Shipper> {
    //example of how to submit args to transaction - this can be changed
    //  async addMember(ctx, id, organization, address, memberType) {

    console.log('shipper: ')
    console.log(shipper)

    let networkObj = await blockchainClient.connectToNetwork();
    let dataForAddMember = {
      function: 'addMember',
      id: shipper.shipperId,
      organization: shipper.organization,
      address: shipper.address.country,
      memberType: 'shipper',
      contract: networkObj.contract
    };

    var result = await blockchainClient.submitTransaction(dataForAddMember);
    console.info(result);
    //$to do: return blockchain hash or confirmation rather than the request


    return await shipper;
  }
}


