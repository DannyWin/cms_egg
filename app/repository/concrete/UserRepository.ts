import IUserRepository from '../abstract/IUserRepository';
import BaseRepository from './BaseRepository';
import { User } from '../../model/user/user';
import { Model as OriginalModel } from 'sequelize';

export default class UserRepository extends BaseRepository<User>{
    constructor(model: typeof OriginalModel) {
        super(model)
    }
        
}