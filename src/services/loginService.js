import axios from 'axios';

export const getAccessToken = (body, callback, errorcallback) => {
  axios.post('/token/',
    body
  ).then( res => {
    if(callback != null){
      callback(res);
    }
  }
  ).catch( err => {
    if(errorcallback != null){
      errorcallback(err);
   }
  })
}
