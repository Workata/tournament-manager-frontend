import axios from 'axios';

export const getParticipants = async (callback, errorcallback) => {
  axios.get('/participants/').then( res => {
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

export const createParticipant = async (body, callback, errorcallback) => {
  axios.post('/participants/',
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
