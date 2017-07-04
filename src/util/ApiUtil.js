export default {
  request(url, data, method = "GET") {
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
  }
}
