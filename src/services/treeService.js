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

export const generateTrees = async (tokenValue, callback, errorcallback) => {
    axios.post('/generatetrees/', {},
    {
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
