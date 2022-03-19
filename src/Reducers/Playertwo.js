const initialState={
    name:'vijju',
    score:80
}
export default function  PlayertwoReducer(state=initialState,action){
    const {type,paylode} = action;
    switch (type){
        case "INC_PLAYERTWO_SCORE":
            return{...state,score:state.score+1}
            case "DEC_PLAYERTWO_SCORE":
                return {...state,score:state.score-1}
                default:
                    return state;
    }
}