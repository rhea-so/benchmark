import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BlogsInput {
	@Field(() => String, { nullable: true })
	dummy1: string;

	@Field(() => String, { nullable: true })
	dummy2: string;

	@Field(() => String, { nullable: true })
	dummy3: string;
}
