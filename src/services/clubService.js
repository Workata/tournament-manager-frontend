import axios from 'axios';

export const getClubs = async (callback, errorcallback) => {
  axios.get('/clubs/').then( res => {
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

export const createClub = async (body, callback, errorcallback) => {
  axios.post('/clubs/',
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
