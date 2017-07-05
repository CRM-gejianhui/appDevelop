export default {
  request(url, data = {}, method = "GET", isBodyParam = false, token) {
    let headers = {
      "Content-Type": 'application/json'
    };
    if(token) {
      headers["x-auth-token"] = token;
      headers["version"] = "3.0";
    }
    let config = {
      method,
      mode: "cors",
      headers,
    };
    if(isBodyParam){
      config.body = JSON.stringify(data);
    } else {
      const keys = Object.keys(data);
      let urlFrag = "";
      if(keys.length > 0) {
        for(let key of keys) {
          urlFrag = `${urlFrag}&${key}=${data[key]}`;
        }
        urlFrag = urlFrag.substr(1);
        url=`${url}?${urlFrag}`
      }
    }
    return fetch(url, config).then(response => {
      return response.json()
    })
  }
}
