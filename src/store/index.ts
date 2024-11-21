import registerModalReducer from "../features/register-modal/slice";
import loginModalReducer from "../features/login-modal/slice";
import forgotPasswordModalReducer from "../features/forgot-password-modal/slice";
import resetPasswordModalReducer from "../features/reset-password-modal/slice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    registerModal: registerModalReducer,
    loginModal: loginModalReducer,
    forgotPasswordModal: forgotPasswordModalReducer,
    resetPasswordModal : resetPasswordModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
