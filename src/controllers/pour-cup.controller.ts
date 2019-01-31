import { Request, RestBindings, get, post, requestBody, ResponseObject } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Cup } from '../models';

var BlockchainClient = require('../blockchainClient.js');
//import { BlockchainClient } from '../blockchainClient';

var blockchainClient = new BlockchainClient();


/**
 * OpenAPI response for pourcup()
 */
const POURCUP_RESPONSE: ResponseObject = {
  description: 'Pour Cup Response',
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
export class PourCupController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  // Map to `GET /pourCup`
  @get('/pourCup', {
    responses: {
      '200': POURCUP_RESPONSE,
    },
  })
  pourCup(): object {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'poured cup',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  // Map to `POST`
  @post('/pourCup', {
    responses: {
      '200': {
        description: 'Cup model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Cup } } },
      },
    },
  })
  async create(@requestBody() cup: Cup): Promise<Cup> {


    //example of how to submit args to transaction - this can be changed
    //  async pourCup(ctx, id, organization, address, memberType) {

    let dataForpourCup = {
      function: 'pourCup',
      id: cup.cupId
    };

    blockchainClient.submitTransaction(dataForpourCup);



    return cup;
    //return await this.CupRepository.create(Cup);
  }
}


