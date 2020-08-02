import IBaseRepository from './IBaseRepository';
import { User } from '../../model/user/user';

export default interface IUserRepository extends IBaseRepository<User> {

}

