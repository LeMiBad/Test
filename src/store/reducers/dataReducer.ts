import { initalDataStateType, dataAction, dataActionTypes} from './../types/dataTypes'

const dataState: initalDataStateType = {
    data: null,
    loading: false, 
    error: null
}



export const dataReducer = (state = dataState, action: dataAction): initalDataStateType=> {
    switch (action.type) {
        case dataActionTypes.GET_DATA:
            return {data: state.data, loading: true, error: null}
        case dataActionTypes.GET_DATA_SUCCES:
            return {data: action.payload, loading: false, error: null}
        case dataActionTypes.GET_DATA_ERROR:
            return {data: state.data, loading: false, error: true}
        default:
            return state
    }
}