import { User, UserName } from "../model/user";

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}
