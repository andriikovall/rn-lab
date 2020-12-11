import React, { useEffect, useState } from 'react';
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
// import { getGenericPassword, setGenericPassword } from 'react-native-keychain';

interface LoginFormProps {
}

export default function LoginForm(_props: LoginFormProps) {

  // used for keychain and removed for linter
  // const [initialValue, setInitialValue] =
  const [initialValue] =
    useState<LoginCredentials>({ login: '', password: '' });

  const { control, handleSubmit, errors } = useForm<LoginCredentials>({
    defaultValues: initialValue,
  });
  const { error } = useSelector<AppState, AuthState>(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // couldn't complete this task due to lagging and performance
    // I thing it is because of my slow PC, but data is stored on the phone...
    // so here this code is, it has to work, but I can't use it for some reason

    // getGenericPassword()
    //   .then(creds => {
    //     if (creds) {
    //       setInitialValue({ login: creds.username, password: creds.password });
    //     }
    //   })

  }, []);


  const onSubmit = (value: LoginCredentials) => {
    // ignore promise result, not crucial here
    // setGenericPassword(value.login, value.password);
    //
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

  const renderLoginInput = renderInput({
    placeholder: 'Login',
    testID: 'LoginForm.LoginInput',
  });
  const renderPasswordInput = renderInput({
    placeholder: 'Password',
    secureTextEntry: true,
    testID: 'LoginForm.PasswordInput',
  });

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

        <Warning testID="LoginForm.PasswordWarning" size={15}>{errors.password?.message}</Warning>
        <Warning testID="LoginForm.LoginWarning" size={15}>{errors.login?.message}</Warning>
        <Warning testID="LoginForm.ErrorTitle" size={15}>{error?.title}</Warning>
        <Warning testID="LoginForm.ErrorMessage" size={15}>{error?.message}</Warning>

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

