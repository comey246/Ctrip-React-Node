import * as type from "@/redux/constant"
import produce from "immer";


const menuState = {
    isCollapse: false,
    isMobile:false,
    menuList: []
};

const menu = (state = menuState,action) =>
    produce(state,draftState => {
        switch (action.type){
            case type.UPDATE_COLLAPSE:
                draftState.isCollapse = action.isCollapse;
                break;
            case type.SET_MOBILE:
                draftState.isMobile= action.isMobile;
                break;
            case type.SET_MENU_LIST:
                draftState.menuList = action.menuList;
                break;
            default:
                return draftState;
        }
})

export default menu;