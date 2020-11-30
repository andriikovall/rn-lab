export default interface AppError {
  title?: string;
  message?: string;
};

export const createError =
  ({ title = 'Some error ocurred', message = 'Please try again or restart the app' }: AppError = {}): AppError => {
    const errorTitle = title || 'Some error ocurred';
    const errorMessage = message || 'Please try again or restart the app';
    return {
      title: errorTitle,
      message: errorMessage,
    };
  };
