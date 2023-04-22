import * as type from "@/redux/constant"
import produce from "immer";

const mallState = {
    flightList: [],
    flightInfo:{},
	username:""
}

const mall = (state = mallState,action) =>
    produce(state,draftState => {
        switch (action.type){
            case type.SET_FLIGHT_LIST:
                draftState.flightList = action.flightList;
				break;
            case type.SET_FLIGHT_INFO:
                draftState.flightInfo = action.flightInfo;
                break;
            default:
                return draftState;
        }
})

export default mall;