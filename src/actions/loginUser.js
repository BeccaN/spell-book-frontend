export const loginUser = (userObj) => {
  console.log("loggin in", userObj)
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/login'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: userObj})
    })
      .then((resp) => resp.json())
      .then(console.log)
  }
}