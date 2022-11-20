import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  readonly id: number;

  @Field()
  readonly username: string;

  @Field()
  readonly email: string;

  constructor(user: Partial<User>) {
    Object.assign(user);
  }
}
