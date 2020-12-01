import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import LoginCredentials from '../../../models/loginCredentials';
import formConstraints from '../../../constants/formConstraints';
import LoginButton from './LoginButton';
import colors from '../../../constants/colors';
import { baseTextStyle, Warning } from '../../shared/Text';
import { useDispatch, useSelector } from 'react-redux';
import AuthState from '../../../models/store/states/authState';
import AppState from '../../../models/store/appState';
import { authenticate } from '../../../store/actionCreators/auth';

interface LoginFormProps {
}

export default function LoginForm(_props: LoginFormProps) {

  const { control, handleSubmit, errors } = useForm<LoginCredentials>();
  const { error } = useSelector<AppState, AuthState>(state => state.auth);
  const dispatch = useDispatch();


  const onSubmit = (value: LoginCredentials) => {
    dispatch(authenticate(value));
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
        <Warning size={15}>{error?.title}</Warning>
        <Warning size={15}>{error?.message}</Warning>

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

