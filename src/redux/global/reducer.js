import * as type from "@/redux/constant"
import produce from "immer";

const globalState = {
    token: "",
	username:""
}

const global = (state = globalState,action) => 
    produce(state,draftState => {
        switch (action.type){
            case type.SET_TOKEN:
                draftState.token = action.token;
				break;
            case type.SET_USERNAME:
                draftState.username = action.username;
                break;
            default:
                return draftState;
        }
})

export default global;