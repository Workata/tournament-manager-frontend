import axios from 'axios';

export const getCategories = async (callback, errorcallback) => {
  axios.get('/categories/').then( res => {
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

export const createCategory = async (body, tokenValue, callback, errorcallback) => {
  axios.post('/categories/', body, {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenValue}`
    }
  }
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
