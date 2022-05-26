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

export const generateTrees = async (callback, errorcallback) => {
    axios.post('/generatetrees/'
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
