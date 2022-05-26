import axios from 'axios';

export const getTree = (categoryId, callback, errorcallback) => {
  axios.get(`/gettree/${categoryId}`).then( res => {
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
