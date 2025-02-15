import * as types from "./actionTypes";

const initialState = {
  isLogin: false,
  isProcessing: false,
  loginMessage: "",

  forgotPasswordProcessing:false,
  forgotPasswordFail:false,
  forgotPasswordmMssage:"",

  isSignup: false,
  signupMessage: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_PROCESS:
      return {
        ...state,
        isProcessing: true,
        loginMessage: "",
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isProcessing: false,
        loginMessage: "",
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
        isProcessing: false,
        loginMessage: payload,
      };
    case types.USER_SIGNUP_PROCESS:
      return {
        ...state,
        isSignup: false,
        isProcessing: true,
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignup: true,
        isProcessing: false,
        signupMessage: "User SignUp Success!",
        loginMessage:""
      };
    case types.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isSignup: false,
        isProcessing: false,
        signupMessage: payload,
      };
      case types.USER_FORGOT_PASSWORD_PROCESS:
        return {
          ...state,
          forgotPasswordProcessing:true,
          forgotPasswordFail:false,
          forgotPasswordmMssage:"",        
        };
      case types.USER_FORGOT_PASSWORD_SUCCESS:
        return {
          ...state,
          forgotPasswordProcessing:false,
          forgotPasswordFail:false,
          forgotPasswordmMssage:payload,        
        };
      case types.USER_FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          forgotPasswordProcessing:false,
          forgotPasswordFail:true,
          forgotPasswordmMssage:payload,        
        };
    default:
      return state;
  }
};
