import axios from 'axios';

export const updateDuel = (duelId, body, callback, errorcallback) => {
  axios.patch(`/duels/${duelId}`, body).then( res => {
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

export const setDuelWinner = (participantId, callback, errorcallback) => {
  axios.post(`/setduelwinner/${participantId}`).then( res => {
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