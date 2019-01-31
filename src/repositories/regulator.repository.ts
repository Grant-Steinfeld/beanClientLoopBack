import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Regulator} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RegulatorRepository extends DefaultCrudRepository<
  Regulator,
  typeof Regulator.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Regulator, dataSource);
  }
}
