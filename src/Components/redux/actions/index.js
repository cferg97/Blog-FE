export const GET_POST_DATA = "GET_POST_DATA";
export const GET_CURRENT_USER = "GET_CURRENT_USER";

export const getPostDataAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/posts");
      let fetchedData = await response.json();
      if (response.ok) {
        dispatch({
          type: GET_POST_DATA,
          payload: fetchedData.posts.reverse(),
        });
      } else {
        console.log("Error fetching posts");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCurrentUserAction = () => {
  const storageToken = localStorage.getItem("User");
  const token = storageToken.split('"').join("");
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/authors/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: GET_CURRENT_USER,
          payload: fetchedData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const logInAction = (userInput) => {
  return async () => {
    try {
      let response = await fetch("http://localhost:3001/authors/login", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        localStorage.setItem(
          "User",
          JSON.stringify(fetchedData.accessToken.toString())
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerAction = (userInput) => {
  return async () => {
    try {
      let response = await fetch("http://localhost:3001/authors/register", {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("user registered successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const newPostAction = (postToSend) => {
  const storageToken = localStorage.getItem("User");
  const token = storageToken.split('"').join("");
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        body: JSON.stringify(postToSend),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("success!");
        dispatch(getPostDataAction());
      } else {
        console.log("Error posting");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
