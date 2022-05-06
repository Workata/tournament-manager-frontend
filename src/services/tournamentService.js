import axios from 'axios';

export const getTournament = (callback, errorcallback) => {
  axios.get('/tournaments/1/').then( res => {
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
