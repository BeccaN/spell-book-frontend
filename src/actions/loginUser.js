export const loginUser = (userObj, history) => {
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
      .then((data) => {
        if (!data.error) {
          localStorage.setItem("token", data.jwt)
          // dispatch action to set user into store
          history.push('/')
        } else {
          console.log(data.error)
          // dispatch action to set error to reducer
        }
      })
  }
}