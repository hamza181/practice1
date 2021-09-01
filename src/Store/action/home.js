import * as constant from "../constant/constant";
import axios from "axios";

export function add() {
  return {
    type: constant.ADD,
  };
}

export function getAPI() {
  return (dispatch) => {
    console.log("getAPI");
    dispatch({ type: constant.START });
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        dispatch({ type: constant.SUCCESS, payload: { data: response.data } });
        // response.json();
      })
      // .then((json) => console.log(json))

      .catch((err) => {
        console.log(err);
      });
  };
}

export function postAPI(props) {
  return (dispatch) => {
    console.log("post", props);
    // dispatch({ type: constant.START });
    axios
      .post("https://jsonplaceholder.typicode.com/posts", props)
      .then((response) => console.log(response));
  };
}

export function patchAPI(body, id) {
  {

  }
  return (dispatch) => {
    console.log("post", body);
    // dispatch({ type: constant.START });
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/`, body, {hesder})
      .then((response) => console.log(response));
  };
}

// export function addsss(a) {
//   return (dispatch) => {
//     dispatch({ type: constant.ADDSTART });
//   };
// }
// dispatch(sum());

// export function PostAPI(body) {
//   return (dispatch) => {
//     dispatch({ type: 'ADDSTART' });
//     axios
//       .post("api", body, { h })
//       .then((res) => {
//         console.log(res);
//         dispatch({ type: 'ADD_SUCCESS', payload: { data: res.data } });
//       })
//       .catch((err) => {
//         console.log(err.response);
//         dispatch({
//           type: 'ADD_ERROR',
//           payload: { error: err.response },
//         });
//         console.log(err);
//       });
//   };
// }

// export function LOGOUT() {
//   return (dispatch) => {
//     localStorage.clear();
//     dispatch({ type: 'Logout' });
//   };
// }

// export function GETAPI(body) {
//   return (dispatch) => {
//     dispatch({ type: 'GTSTART' });
//     let userInfo = JSON.parse(localStorage.getItem("user"));
//     const h = { Authorization: userInfo?.user?.token };
//     axios
//       .get("login", { h })
//       .then((res) => {
//         // res = {
//         //   name,
//         //   email,
//         //   token,
//         // };
//         console.log(res);
//         dispatch({ type: 'GETSUCCESS', payload: { data: res.data } });
//         // localStorage.setItem()
//       })
//       .catch((err) => {
//         console.log(err.response);
//         dispatch({
//           type: 'GETERROR',
//           payload: { error: err.response },
//         });
//         console.log(err);
//       });
//   };
// }

// const dispatch = useDispatch();
// dispatch(sum(body));
// // let userInfo = JSON.parse(localStorage.getItem("user"));
// // const headers = { Authorization: userInfo?.user?.token };
// // const body = {
// //     a: "djk",
// //   };
// //   dispatch(addBannerStart());
// //   axios
// //     .post(
// //       `${process.env.REACT_APP_FRONTEND_URI}/api/admin/banner/create`,
// //       body
// //     )
// //     .then((res) => {
// //       console.log("jkjdkljl");
// //     })
// //     .catch((error) => {
// //       console.log(error.response);
// //     });

// let user = localStorage.getItem();

// {
//   user?.token ? User : Login;
// }
