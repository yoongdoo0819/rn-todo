const EMAIL = 'a'; //'my@email.com';
const PASSWORD = 'a'; //'1234';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === EMAIL && password === PASSWORD) {
        resolve(email);
      } else {
        reject('The email or password is wrong.');
      }
    }, 1000);
  });
};
