import produce from "immer";
import * as type from "@/redux/constant";

const authState= {
	authButtons: {},
	authRouter: []
};

// auth reducer
const auth = (state = authState, action) =>
	produce(state, draftState => {
		switch (action.type) {
			case type.SET_AUTH_BUTTONS:
				draftState.authButtons = action.authButtons;
				break;
			case type.SET_AUTH_ROUTER:
				draftState.authRouter = action.authRouter;
				break;
			default:
				return draftState;
		}
	});

export default auth;
