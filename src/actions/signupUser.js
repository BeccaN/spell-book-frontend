export const signupUser = (data) => {
  return (dispatch)  => {
    const apiUrl = 'http://localhost:8000/api/v1/users'
    fetch (apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((resp) => resp.json())
      .then(console.log)
  }
}