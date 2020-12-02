import errorAlert from '../helpers/errorAlert';
import AppError from '../models/error';

interface ErrorHandlerArgs {
  errorTitle?: string;
  errorMessage?: string;
}

// made this a hook for possible using some kind of modals
// of other display API based on hooks
const useErrorHandler = ({ errorTitle = 'Some error ocurred', errorMessage }: ErrorHandlerArgs = {}) => {
  return (error: Error | AppError | null = null, titleAndMessage: ErrorHandlerArgs = {}) => {

    const message: string =
      titleAndMessage.errorMessage ||
      errorMessage ||
      error?.message ||
      'Try restart the app';

    const title = titleAndMessage.errorTitle || (error as AppError)?.title || errorTitle;

    errorAlert(title, message);
  };
};

export default useErrorHandler;
