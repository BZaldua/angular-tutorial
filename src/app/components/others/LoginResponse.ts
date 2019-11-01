import {User} from './interfaces';

export interface LoginResponse {
    success: boolean,
    user: User,
    token: String
}