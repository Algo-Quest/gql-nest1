import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly id: number;

  @Field()
  readonly username: string;

  @Field()
  readonly email: string;
}
