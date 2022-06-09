import axios from 'axios';

export const setDuelWinner = (participantId, tokenValue, callback, errorcallback) => {
  axios.post(`/setduelwinner/${participantId}`, {}, {
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