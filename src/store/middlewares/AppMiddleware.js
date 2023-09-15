import { AppAction } from "../actions";
import { ApiCaller } from "../../config";
import { put, delay } from "redux-saga/effects";
import { Utils } from "../../config";
import axios from "axios";
let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTMyMjE4ODksImlzcyI6Imljb25pYyIsImV4cCI6MTY5MzIyMzY4OX0.KvyBLobO7HbuAKpP6mP08BoLQUVaN1F8ryL_H-tx5hM";

export default class AppMiddleware {
  static *SignIn(params) {
    const { payload, cb } = params;



    try {
      let res = yield ApiCaller.Post("login", payload);
      cb && cb(res);
      if (res?.status == 200 && !res?.data.error) {
        yield put(AppAction.SignInSuccess(res.data));
        yield localStorage.setItem(
          "user",
          JSON.stringify(res.data.data[0].activation_code)
        );
        Utils.showMessage("success", "success");
        console.log("%cSignIn Response", "color: green", " => ", res);
      } else {
        yield put(AppAction.SignInFailure());
        console.log("fail response", res);
        Utils.showMessage("error", "Error");
        // if(res.status === 400){
          
        // }
        // // console.log(""res);
        // if (res.status === 404) {

        //   Utils.showMessage("error", "Failed To Respond Server");
        // }
        console.log("%cSignIn Response", "color: red", " => ", res);

      }
      //   cb && cb();
      //   yield delay(2000);
      //   yield localStorage.setItem("user", JSON.stringify(payload));
      //   yield put(AppAction.SignInSuccess(payload));
      //   if (cb) {
      //     cb();
      //   }
    } catch (err) {
      yield put(AppAction.SignInFailure());
      console.log(`%c${err.name}`, "color: red", " => ", err);
    }
  }

  static *Logout({ payload }) {
    try {
      // let res = yield ApiCaller.Post(
      //     "logout",
      //     payload
      // )
      // if (res.status == 200) {
      //     yield put(AppAction.LogoutSuccess())
      //     console.log('%Logout Response', "color: green", ' => ', res)
      // } else {
      //     yield put(AppAction.LogoutFailure())
      //     console.log('%Logout Response', "color: red", ' => ', res)
      // }
      yield delay(1000);
      localStorage.removeItem("user");
      yield put(AppAction.SignInSuccess(payload));
      Utils.showMessage("success", "Logout");
    } catch (err) {
      yield put(AppAction.LogoutFailure());
      console.log(`%c${err.name}`, "color: red", " => ", err);
    }
  }

  static *Register(params) {
    const { payload, cb } = params;



    try {
      let res = yield ApiCaller.Post("register_user", payload);
      cb && cb(res);
      if (res?.status == 200  && !res?.data.error) {
        yield put(AppAction.RegisterSuccess());
        Utils.showMessage("success", "success");
        console.log("%cRegister Response", "color: green", " => ", res);
      } else {
        yield put(AppAction.SignInFailure());
        console.log("%cRegister Response", "color: red", " => ", res);
      }
    } catch (err) {
      yield put(AppAction.RegisterFailure());
      Utils.showMessage("error", err);
      console.log(`%c${err.name}`, "color: red", " => ", err);
    }
  }

  static *AddPost({ payload }) {
    try {
      let res = yield ApiCaller.Post("add_posts", payload);
      if (res.status === 200) {
        console.log("%cAddPost Response", "color: green", " => ", res);
        yield put(AppAction.AddPostSuccess(res.data));
      } else {
        yield put(AppAction.AddPostFailure());
        console.log("%cAddPost Response", "color: red", " => ", res);
      }
    } catch (err) {
      yield put(AppAction.AddPostFailure());
      console.log(`%c${err.name}`, "color: red", " => ", err);
    }
  }

  static *GetPosts() {
    try {
      let res = yield ApiCaller.Post("get_products");
      if (res.status === 200) {
        console.log("%cGetPosts Response", "color: green", " => ", res.data);
        yield put(AppAction.GetPostsSuccess(res?.data?.data));
      } else {
        console.log("%cGetPosts Response", "color: red", " => ", res);
        yield put(AppAction.GetPostsFailure());
      }
    } catch (err) {
      yield put(AppAction.GetPostsFailure());
      console.log(`%c${err.name}`, "color: red", " => ", err);
    }
  }


    
}
