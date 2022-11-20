import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
  Int,
} from '@nestjs/graphql';
import { User } from 'src/dto/user.dto';
import { UserInput } from 'src/dto/user.input';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, take } from 'rxjs';

@Resolver((of) => User)
export class UserResolver {
  constructor(private httpService: HttpService) {}

  @Query((returns) => [User])
  async users() {
    let result = await this.httpService.axiosRef.get(
      'https://node-own.herokuapp.com/users',
    );

    console.log('/*/*/*****************');
    return result.data;
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    console.log('heyy22 +++++++++++++++++++');

    console.log(reference);
    let r = await this.httpService.axiosRef.get(
      'https://node-own.herokuapp.com/users',
    );

    // console.log(r.data);
    let u = r.data.find((f: any) => f.id == reference.id);

    console.log(u);

    return u;
  }

  @Query((returns) => User, { name: 'user' })
  getUser(): User {
    console.log('i ajddjkewndwj');
    return {
      id: 1,
      username: 'dwdqwdq',
      email: 'dwqkwem#@@N@JNJ',
    };
  }

  // @Mutation((returns) => UserType)
  // async createItem(@Args('input') input: UserInput): Promise<UserType> {
  //   return Promise.resolve({
  //     id: 1,
  //     username: 'dnwqdjnw',
  //     email: '',
  //   });
  // }

  @Query((returns) => String)
  async hello() {
    return 'hello';
  }
}
