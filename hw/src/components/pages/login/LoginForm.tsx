import React, { useContext } from 'react';
import { Alert, StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import LoginCredentials from '../../../models/loginCredentials';
import formConstraints from '../../../constants/formConstraints';
import LoginButton from './LoginButton';
import colors from '../../../constants/colors';
import { baseTextStyle, Warning } from '../../shared/Text';
import loadingContext from '../../../contexts/loading';
import AuthService from '../../../services/authService';
import User from '../../../models/user';
import delayedPromise from '../../../helpers/delayedPromise';
import authContext from '../../../contexts/auth';

interface LoginFormProps {
}

export default function LoginForm(_props: LoginFormProps) {

  const { control, handleSubmit, errors } = useForm<LoginCredentials>();

  const { setIsLoading } = useContext(loadingContext);
  const { setUser } = useContext(authContext);

  const onSubmit = (value: LoginCredentials) => {
    setIsLoading(true);
    delayedPromise(null, null, 3000)
      .then(() => AuthService.authenticate(value))
      .then((user: User | null) => {
        if (user) {
          setUser(user);
        } else {
          Alert.alert('Error', 'Invalid credentials');
        }
      })
      .catch((err) => {
        Alert.alert('Some error occurred', err.message);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  const renderInput = (inputProps: TextInputProps) => ({ onChange, onBlur, value }: any) => (
    <TextInput
      style={styles.input}
      onBlur={onBlur}
      onChangeText={val => onChange(val)}
      value={value}
      {...inputProps}
      placeholderTextColor={colors.colorPrimaryShade}
    />
  );

  const renderLoginInput = renderInput({ placeholder: 'Login' });
  const renderPasswordInput = renderInput({ placeholder: 'Password', secureTextEntry: true });

  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            render={renderLoginInput}
            name="login"
            rules={{
              required: {
                value: true,
                message: 'Login is required',
              },
              maxLength: {
                value: formConstraints.maxLoginLength,
                message: `Max login length ${formConstraints.maxLoginLength}`,
              },
            }}
            defaultValue={''}
          />

          <Controller
            control={control}
            render={renderPasswordInput}
            name="password"
            rules={{
              required: {
                value: true,
                message: 'Password is required',
              },
              maxLength: {
                value: formConstraints.maxPasswordLength,
                message: `Max password length ${formConstraints.maxPasswordLength}`,
              },
            }}
            defaultValue={''}
          />
        </View>

        <Warning size={15}>{errors.password?.message}</Warning>
        <Warning size={15}>{errors.login?.message}</Warning>

      </View>
      <View style={styles.loginButtonContainer}>
        <LoginButton title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    ...baseTextStyle,
    width: '100%',
    marginVertical: 20,
    fontSize: 16,
    backgroundColor: colors.colorSecondary,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  inputsContainer: {
    width: '100%',
  },
  formContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 10,
  },
});

