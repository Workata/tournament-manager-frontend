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

export const createCategory = async (body, callback, errorcallback) => {
  axios.post('/categories/',
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
