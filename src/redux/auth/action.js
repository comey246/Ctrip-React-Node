import * as type from "@/redux/constant";

// * setAuthButtons
export const setAuthButtons = (authButtons) => ({
	type: type.SET_AUTH_BUTTONS,
	authButtons
});

// * setAuthRouter
export const setAuthRouter = (authRouter) => ({
	type: type.SET_AUTH_ROUTER,
	authRouter
});
