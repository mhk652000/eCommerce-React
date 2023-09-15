import Axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
import { AppAction } from "../../store/actions";
import Store from "../../store";
import variables from "../variables";

const { baseUrl } = variables;
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTMyMjE4ODksImlzcyI6Imljb25pYyIsImV4cCI6MTY5MzIyMzY4OX0.KvyBLobO7HbuAKpP6mP08BoLQUVaN1F8ryL_H-tx5hM";

// Axios.interceptors.response.use((response) => {
//     return response
// }, ({ response }) => {
//     if (response.status == 401) {
//         try {
//             AsyncStorage.removeItem("user").then(() => {
//                 Store.dispatch(AppAction.SignoutSuccess());
//                 NavigationService.reset_0("Signin")
//             })
//             console.log('%c{Error 401}', "color: red", response)
//         }
//         catch (err) {
//             console.log(`%c${err.name}`, "color: red", err?.message)
//         }
//     }
//     return response
// })

// Axios.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     ({ response }) => {
//       if (response.status == 401) {
//         try {
//           localStorage.removeItem("authUser");
//           Store.dispatch(AuthAction.signInSuccess());
//           window.location.reload();
//         } catch (err) {}
//       }
//       return response;
//     }
//   );




// Axios.interceptors.request.use(
//   function (config) {
//     console.log(config);
//     config.headers = {
//       ...config?.headers,
//       Authorization: `Bearer ${token}`,
//     };
//     // config.timeout = 60000;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );




Axios.interceptors.request.use(
  function (config) {
    //   if (localStorage.getItem("authUser")) {
    config.headers = {
      ...config?.headers,
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    };
    // config.timeout = 600000;
    // return config;
    //   } else {
    // config.timeout = 600000;
    // return config;
    //   }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Axios.interceptors.request.use(function (config) {
//   // const token = store.getState().session.token;
//   //   config.headers.Authorization = `Bearer ${token}`;
//   config.headers = {
//     ...config?.headers,
//     Authorization: `Bearer ${token}`,
//   };

//   return config;
// });

// Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// Axios.interceptors.request.use((req) => {
//   // if(localStorage.getItem('profile')) {
//   req.headers.Authorization = `Bearer ${token}`;
//   req.headers["Content-Type"] = "application/json"

//   // }
//   return req;
// });

// Axios.interceptors.request.use(
//   function (config) {
//     //   if (localStorage.getItem("authUser")) {
//     config.headers = {
//       ...config?.headers,
//       Authorization: `Bearer ${token}`,
//     };
//     config.timeout = 600000;
//     return config;
//     //   } else {
//     // config.timeout = 600000;
//     // return config;
//     //   }
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// const CancelToken = Axios.CancelToken;

export default class ApiCaller {
  static Get = (endPoint = "", headers = {}) => {
    return Axios.get(`${baseUrl}${endPoint}`, {
      headers,
    })
      .then((res) => res)
      .catch((err) => err.response);
  };

  static Post = (endPoint = "", body = {}, headers = {}) => {
    return Axios.post(`${baseUrl}${endPoint}`, body, {
      headers,
    })
      .then((res) => res)
      .catch((err) => err.response);
  };
}
