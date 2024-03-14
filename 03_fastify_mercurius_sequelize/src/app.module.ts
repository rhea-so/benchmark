import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Blog } from './blog.entity';
import { BlogResolver } from './blog.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { BlogRepository } from './blog.repository';
import { MercuriusDriverConfig, MercuriusFederationDriver, MercuriusFederationDriverConfig } from '@nestjs/mercurius';

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'mariadb',
			host: '127.0.0.1',
			port: 3306,
			username: 'root',
			password: '123qwe',
			database: 'test',
			models: [Blog],
			logging: false,
		}),
		SequelizeModule.forFeature([Blog]),
		GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
			driver: MercuriusFederationDriver,
			autoSchemaFile: { federation: 2 },
			graphiql: true,
		}),
	],
	providers: [BlogRepository, BlogResolver],
})
export class AppModule {}
