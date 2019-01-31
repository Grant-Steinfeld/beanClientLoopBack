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
import {Regulator} from '../models';
import {RegulatorRepository} from '../repositories';

export class RegulatorController {
  constructor(
    @repository(RegulatorRepository)
    public regulatorRepository : RegulatorRepository,
  ) {}

  @post('/Regulator', {
    responses: {
      '200': {
        description: 'Regulator model instance',
        content: {'application/json': {schema: {'x-ts-type': Regulator}}},
      },
    },
  })
  async create(@requestBody() regulator: Regulator): Promise<Regulator> {
    return await this.regulatorRepository.create(regulator);
  }

  @get('/Regulator/count', {
    responses: {
      '200': {
        description: 'Regulator model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Regulator)) where?: Where,
  ): Promise<Count> {
    return await this.regulatorRepository.count(where);
  }

  @get('/Regulator', {
    responses: {
      '200': {
        description: 'Array of Regulator model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Regulator}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Regulator)) filter?: Filter,
  ): Promise<Regulator[]> {
    return await this.regulatorRepository.find(filter);
  }

  @patch('/Regulator', {
    responses: {
      '200': {
        description: 'Regulator PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() regulator: Regulator,
    @param.query.object('where', getWhereSchemaFor(Regulator)) where?: Where,
  ): Promise<Count> {
    return await this.regulatorRepository.updateAll(regulator, where);
  }

  @get('/Regulator/{id}', {
    responses: {
      '200': {
        description: 'Regulator model instance',
        content: {'application/json': {schema: {'x-ts-type': Regulator}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Regulator> {
    return await this.regulatorRepository.findById(id);
  }

  @patch('/Regulator/{id}', {
    responses: {
      '204': {
        description: 'Regulator PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() regulator: Regulator,
  ): Promise<void> {
    await this.regulatorRepository.updateById(id, regulator);
  }

  @put('/Regulator/{id}', {
    responses: {
      '204': {
        description: 'Regulator PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() regulator: Regulator,
  ): Promise<void> {
    await this.regulatorRepository.replaceById(id, regulator);
  }

  @del('/Regulator/{id}', {
    responses: {
      '204': {
        description: 'Regulator DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.regulatorRepository.deleteById(id);
  }
}
