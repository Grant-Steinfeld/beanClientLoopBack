import { Request, RestBindings, get, post, requestBody, ResponseObject } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Shipper } from '../models';

var BlockchainClient = require('../blockchainClient.js');
//import { BlockchainClient } from '../blockchainClient';

var blockchainClient = new BlockchainClient();


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

interface iInput {
  function: string;
  id: string;
  organization: string;
  address: string;
  memberType: string;

}
/**
 * A simple controller to bounce back http requests
 */
export class ShipperController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

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

    let dataForAddMember = {
      function: 'addMember',
      id: shipper.shipperId,
      organization: shipper.organization,
      address: shipper.address,
      memberType: 'shipper'
    };

    var result = blockchainClient.submitTransaction(dataForAddMember);
    console.info(result);


    return shipper;
    //return await this.ShipperRepository.create(Shipper);
  }
}


