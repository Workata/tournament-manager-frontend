import axios from 'axios';

export const getVerificationCodesCapacity = (tokenValue, callback, errorcallback) => {
  axios.get('/verificationcodescapacity/', {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenValue}`
    }
  }).then( res => {
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

export const sendInvitations = (body, tokenValue, callback, errorcallback) => {
  axios.post('/sendcode/', body, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenValue}`
    }
  }).then( res => {
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
