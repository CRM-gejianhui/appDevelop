export default {
  request(url, data, method = "GET", isBodyParam) {
    if(isBodyParam) {

    }
    return fetch(url, {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
      return response.json()
    })
    // let config = {
    //   type: method,
    //   url: url,
    //   timeout: 10000,
    //   contentType: "application/json",
    //   dataType: "json"
    // };
    // //接口请求或资产包接口时加token的header
    // if (url.indexOf(NRB_API) >= 0 || url.indexOf(FUNDER_API) >= 0) {
    //   config.headers = {
    //     "x-auth-token": Storage.get("token")
    //   };
    // }
    // if (isBodyParam) {
    //   config.contentType = "application/json";
    //   config.data = typeof data == "string"
    //     ? data
    //     : JSON.stringify(data, replacer);
    // } else {
    //   let values = "";
    //   for (let key in data) {
    //     values += key + "=" + encodeURI(data[key]) + "&";
    //   }
    //
    //   if (values) {
    //     values = values.substr(0, values.length - 1);
    //   }
    //   config.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
    //   config.data = values;
    // }
    // return new Promise(resolve => {
    //   $.ajax(config)
    //     .done(result => {
    //       //console.log('request success, response=', JSON.stringify(result));
    //       if (result.retCode == 16777218) {
    //         Storage.removeSession();
    //         Message.emit("push", "/login", null, { url: location.href });
    //         message.error("您的会话已过期,请重新登陆");
    //       } else {
    //         result.success = this.isFunderApi(url)
    //           ? result.retCode == "10000"
    //           : result.retCode == 0;
    //         result.code = result.retCode;
    //         result.message = result.retMsg || result.message;
    //         resolve(result);
    //       }
    //     })
    //     .fail(jqXHR => {
    //       console.log("request fail,statusCode=", jqXHR.status);
    //       resolve({
    //         success: false,
    //         code: jqXHR.status,
    //         message: `服务请求失败(${jqXHR.status})`
    //       });
    //     });
    // });
  }
}
