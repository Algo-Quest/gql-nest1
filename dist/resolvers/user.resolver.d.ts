import { User } from 'src/dto/user.dto';
import { HttpService } from '@nestjs/axios';
export declare class UserResolver {
    private httpService;
    constructor(httpService: HttpService);
    users(): Promise<any>;
    resolveReference(reference: {
        __typename: string;
        id: number;
    }): Promise<any>;
    getUser(): User;
    hello(): Promise<string>;
}
