import { Request, RestBindings, get, post, requestBody, ResponseObject, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Shipper } from '../models/shipper.model';
import { Address } from '../models/address.model';

//var BlockchainClient = require('../blockchainClient.js');
import { BlockchainClient } from '../blockchainClient';




/**
 * OpenAPI response for Shipper()
 */
const Shipper_RESPONSE: ResponseObject = {
  description: 'Pour Shipper Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          greeting: { type: 'string' },
          date: { type: 'string' },
          url: { type: 'string' },
          headers: {
            type: 'object',
            properties: {
              'Content-Type': { type: 'string' },
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};


/**
 * A simple controller to bounce back http requests
 */
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
    var blockchainClient = new BlockchainClient();
    let rez = await blockchainClient.queryByKey(dataForQuery);
    console.log("rez :: <Buffer> tbd how to work this .... ");

    console.log(rez);
    console.log(JSON.parse(rez.toString()));

    let address = new Address({ city: 'New York', country: 'USA', street: '34 Arnold Ln' });

    let x = new Shipper({ organization: 'ace', address: address, shipperId: 'shippersId' });
    return x;
    //return await this.ShipperRepository.findById(id);

  }

  // Map to `GET /Shipper`
  @get('/Shipper', {
    responses: {
      '200': Shipper_RESPONSE,
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
    debugger;
    let blockchainClient = new BlockchainClient();
    let networkObj = await blockchainClient.connectToNetwork();
    // let dataForAddMember = {
    //   function: 'addMember',
    //   id: shipper.shipperId,
    //   organization: shipper.organization,
    //   address: shipper.address,
    //   memberType: 'shipper',
    //   contract: networkObj.contract
    // };

    var result = await blockchainClient.submitTransaction(shipper);
    console.info(result);


    return await shipper;
    //return await this.ShipperRepository.create(Shipper);
  }
}


