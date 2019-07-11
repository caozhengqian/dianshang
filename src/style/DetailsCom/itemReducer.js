export default   function itemReducer(state, action){
    switch (action.type) {
        case "ItemClick":
            return {
                ...states,
                isClick:action.index,
                clickValue:items[action.index],
                initPage:action.index
            };

        default:
            return states;
    }
}