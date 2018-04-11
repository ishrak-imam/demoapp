
export const LOGIN_FORM = {
  name: 'login',
  submitText: 'LOGIN',
  fields: [
    {
      name: 'username',
      placeholder: 'Username *',
      autoCapitalize: 'none'
    },
    { name: 'password',
      secureTextEntry: true,
      placeholder: 'Password *',
      autoCapitalize: 'none'
    }
  ],
  validate: values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Enter username';
    }
    if (values.username && values.username.length < 5) {
      errors.username = 'Username is at least 5 characters';
    }
    if (!values.password) {
      errors.password = 'Enter password';
    }
    return errors;
  }
};
