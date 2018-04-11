
const users = {
  username: 'some_user',
  password: '12345'
};

export function loginRequest (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const {username, password} = data;
      if (username === users.username && password === users.password) {
        return resolve({message: 'Login successful'});
      } else {
        if (username !== users.username) {
          return reject({message: 'Username does not match'});
        }
        if (password !== users.message) {
          return reject({message: 'Password does not match'});
        }
        return reject({message: 'Invalid login'});
      }
    }, 2000);
  });
}
