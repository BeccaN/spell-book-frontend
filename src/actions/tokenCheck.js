export const tokenCheck = (token) => {
  return (dispatch) => {
    if (token) {
      fetch("http://localhost:8000/api/v1/profile", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then ((resp) => resp.json())
      .then ((data) => {
        dispatch({ type: 'ADD_USER', payload: data});
      })
    } else {
      console.log("no one is logged in -- tokenCheck action")
    }
  }
}