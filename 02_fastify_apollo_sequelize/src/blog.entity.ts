import { Column, Model, Table } from 'sequelize-typescript';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { DataTypes } from 'sequelize';

@ObjectType()
@Table({ tableName: 'blog' })
export class Blog extends Model {
	@Field(() => Int)
	@Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
	id: number;

	@Field(() => Date)
	@Column({ type: DataTypes.DATE, field: 'created_at' })
	createdAt: Date;

	@Field(() => Date)
	@Column({ type: DataTypes.DATE, field: 'updated_at' })
	updatedAt: Date;

	@Field(() => String)
	@Column({ type: DataTypes.CHAR })
	title: string;

	@Field(() => String)
	@Column({ type: DataTypes.TEXT })
	content: string;

	@Field(() => Int)
	@Column({ type: DataTypes.INTEGER, field: 'review_count' })
	reviewCount: number;
}
