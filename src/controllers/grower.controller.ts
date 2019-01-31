import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Grower} from '../models';
import {GrowerRepository} from '../repositories';

export class GrowerController {
  constructor(
    @repository(GrowerRepository)
    public growerRepository : GrowerRepository,
  ) {}

  @post('/Grower', {
    responses: {
      '200': {
        description: 'Grower model instance',
        content: {'application/json': {schema: {'x-ts-type': Grower}}},
      },
    },
  })
  async create(@requestBody() grower: Grower): Promise<Grower> {
    return await this.growerRepository.create(grower);
  }

  @get('/Grower/count', {
    responses: {
      '200': {
        description: 'Grower model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Grower)) where?: Where,
  ): Promise<Count> {
    return await this.growerRepository.count(where);
  }

  @get('/Grower', {
    responses: {
      '200': {
        description: 'Array of Grower model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Grower}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Grower)) filter?: Filter,
  ): Promise<Grower[]> {
    return await this.growerRepository.find(filter);
  }

  @patch('/Grower', {
    responses: {
      '200': {
        description: 'Grower PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() grower: Grower,
    @param.query.object('where', getWhereSchemaFor(Grower)) where?: Where,
  ): Promise<Count> {
    return await this.growerRepository.updateAll(grower, where);
  }

  @get('/Grower/{id}', {
    responses: {
      '200': {
        description: 'Grower model instance',
        content: {'application/json': {schema: {'x-ts-type': Grower}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Grower> {
    return await this.growerRepository.findById(id);
  }

  @patch('/Grower/{id}', {
    responses: {
      '204': {
        description: 'Grower PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() grower: Grower,
  ): Promise<void> {
    await this.growerRepository.updateById(id, grower);
  }

  @put('/Grower/{id}', {
    responses: {
      '204': {
        description: 'Grower PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() grower: Grower,
  ): Promise<void> {
    await this.growerRepository.replaceById(id, grower);
  }

  @del('/Grower/{id}', {
    responses: {
      '204': {
        description: 'Grower DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.growerRepository.deleteById(id);
  }
}
