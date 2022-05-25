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

export const getVerificationCodesCapacity = (callback, errorcallback) => {
  axios.get('/verificationcodescapacity/').then( res => {
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

export const sendInvitations = (body, callback, errorcallback) => {
  axios.post('/sendcode/', body).then( res => {
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


export const verifyCode = (body, callback, errorcallback) => {
  axios.post('/verifycode/', body).then( res => {
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
