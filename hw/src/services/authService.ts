import LoginCredentials from '../models/loginCredentials';
import User from '../models/user';

class AuthService {

  private users: User[] = [
    { age: 20, name: 'Andrii', login: 'aaa', password: 'aaa' },
    { age: 123, name: 'Bob', login: 'bob', password: 'bob_password' },
  ];

  public async authenticate({ login, password }: LoginCredentials): Promise<User | null> {
    const user = this.users.find(u => u.password === password && u.login === login.trim());
    if (user === undefined) {
      return null;
    }
    return user;
  }
}

export default new AuthService();
