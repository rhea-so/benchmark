import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Blog } from './blog.entity';

@Injectable()
export class BlogRepository {
	constructor(@InjectModel(Blog) private readonly repo: typeof Blog) {}

	async findAll(): Promise<Blog[]> {
		return this.repo.findAll();
	}
}
