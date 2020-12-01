import LoginCredentials from '../models/loginCredentials';
import User from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import delayedPromise from '../helpers/delayedPromise';

class AuthService {

  private userStorageKey = 'user';
  private cachedUser: User | null = null;

  private users: User[] = [
    { age: 20, name: 'Andrii', login: 'aaa', password: 'aaa' },
    { age: 123, name: 'Bob', login: 'bob', password: 'bob_password' },
  ];

  public async authenticate({ login, password }: LoginCredentials): Promise<User | null> {
    const user = this.users.find(u => u.password === password && u.login === login.trim());
    if (user === undefined) {
      return null;
    }
    await this.cacheUser(user);
    return user;
  }

  public async getUser(): Promise<User | null> {
    // just for loading UI. Otherwise the animation is too fast
    await delayedPromise(null, null, 500);
    if (this.cachedUser) {
      return this.cachedUser;
    }
    return this.getUserFromStorage();
  }

  public async cacheUser(user: User): Promise<any> {
    this.cachedUser = user;
    await AsyncStorage.setItem(this.userStorageKey, JSON.stringify(user));
  }

  private async getUserFromStorage(): Promise<User | null> {
    const userJSON = await AsyncStorage.getItem(this.userStorageKey);
    if (userJSON === null) {
      return null;
    }
    try {
      return JSON.parse(userJSON);
    } catch (err) {
      // can ignore this, we will just make user to relogin
      return null;
    }
  }
}

export default new AuthService();
