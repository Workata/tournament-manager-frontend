import axios from 'axios';

export const getAccessToken = async (email, password) => {
  console.log('Email');
  console.log(email);
  axios.post('/token/', {
      username: email,
      password: password
    }
  ).then( (data) =>
    console.log(data)
  )
}
