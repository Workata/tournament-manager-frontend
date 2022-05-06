import axios from 'axios';

export const getVerificationCodes = (callback, errorcallback) => {
  axios.get('/verificationcodes/').then( res => {
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
