import * as type from "@/redux/constant"
import produce from "immer";
import {SET_MENU_LIST} from "@/redux/constant";


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
            case type.SET_MENU_LIST:
                draftState.menuList = action.menuList;
                break;
            default:
                return draftState;
        }
})

export default menu;