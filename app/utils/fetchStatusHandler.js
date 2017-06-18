const fetchStatusHandler = (response) => {
  return response.json().then(json => {
      if(!response.ok){
        return Promise.reject(json)
      } else {
        return json
      }
    })
};

export default fetchStatusHandler;
