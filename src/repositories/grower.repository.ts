import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Grower} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GrowerRepository extends DefaultCrudRepository<
  Grower,
  typeof Grower.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Grower, dataSource);
  }
}
