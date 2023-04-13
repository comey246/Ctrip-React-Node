import * as type from "@/redux/constant"
import produce from "immer";


const menuState = {
    isCollapse: false,
    menuList: []
};

const menu = (state = menuState,action) =>
    produce(state,draftState => {
        switch (action.type){
            case type.UPDATE_COLLAPSE:
                draftState.isCollapse = action.isCollapse;
                break;
            default:
                return draftState;
        }
})

export default menu;