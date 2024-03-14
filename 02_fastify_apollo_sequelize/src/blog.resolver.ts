import { Args, Query, Resolver } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogRepository } from './blog.repository';
import { BlogsInput } from './blog.dto';

@Resolver(() => Blog)
export class BlogResolver {
	constructor(private readonly repo: BlogRepository) {}

	@Query(() => [Blog])
	async blogs(@Args('input') input: BlogsInput) {
		return this.repo.findAll();
	}
}
