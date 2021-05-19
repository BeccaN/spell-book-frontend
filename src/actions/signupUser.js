export const signupUser = (userObj) => {
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/users'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({user: userObj})
    })
      .then((resp) => resp.json())
  }
}