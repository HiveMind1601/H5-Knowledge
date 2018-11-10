var _ = require('lodash');
var initialState = {
    lists: {},
    carts: [],
    total:0,
    countnum:0,
    allcheck:true
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case "ALLCHECKCHANGE":
            // return {count: state.count + 1};
            return Object.assign({}, state, { allcheck: action.data });
            break;
        case "GETLISTS":
            return Object.assign({}, state, { lists: action.data })
            break;
        case "DELCART":
            return Object.assign({}, state, { carts: [] })
            break;
        case "ADDTOCART":
            var pos = _.findIndex(state.carts, { 'id': action.data.id });
            action.data["checked"]=true
            if (pos === -1) {
                if(!action.data.quantity){
                    action.data.quantity = 1;
                }
                return {
                    ...state,
                    carts: [...state.carts, action.data]
                }
            } else {
                //action.data['quantity'] = state.carts[pos].quantity + 1
                var newcarts=state.carts.slice()
                if(!action.data.quantity){
                    newcarts[pos].quantity= +state.carts[pos].quantity + 1
                    if(newcarts[pos].quantity>99){
                        newcarts[pos].quantity=99
                    }
                }else{
                    newcarts[pos].quantity= +state.carts[pos].quantity + +action.data.quantity
                    if(newcarts[pos].quantity>99){
                        newcarts[pos].quantity=99
                    }
                }
                
                return {...state,carts:newcarts}
            }
            
            break;
        case "CALTOTAL":
            return Object.assign({}, state, { total: action.data })
            break;
        case "CALCOUNTNUM":
            return Object.assign({}, state, { countnum: action.data })
            break;
        case "MODSINGLE":
            return Object.assign({}, state, { carts: action.data })
            break;
        default:
            return state;
    }
}
export default reducer;