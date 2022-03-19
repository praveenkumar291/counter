const initialState = {
    name:'praveen',
    score:100
}

export default  function PlayeroneReducer(state=initialState,action){
    const {type,paylode} = action ;

    switch (type){
        case  'INC_PLAYERONE_SCORE':
            return {...state,score:state.score+1}

        case 'DEC_PLAYERONE_SCORE':
            return {...state,score:state.score-1}
                default :
                return state;
    }


}