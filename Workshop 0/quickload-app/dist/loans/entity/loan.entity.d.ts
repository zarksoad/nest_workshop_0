import { User } from 'src/users/users.entity';
export declare class Loan {
    id: number;
    amount: number;
    currency: string;
    user: User;
}
