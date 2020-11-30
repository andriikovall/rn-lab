import AppError from '../../error';
import User from '../../user';

export default interface AuthState {
  user: User | null;
  fetchingUser: boolean;
  error?: AppError;
};
