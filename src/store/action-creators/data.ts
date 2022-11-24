import axios from "axios"
import { Dispatch } from "redux"
import { dataAction, dataActionTypes } from "../types/dataTypes"

export const getData = () => {
    return async (dispatch: Dispatch<dataAction>) => {
        try {
            dispatch({type: dataActionTypes.GET_DATA})
            const responce = await axios.get("http://82.202.204.94/tmp/test.php")
            dispatch({type: dataActionTypes.GET_DATA_SUCCES, payload: responce.data})
        }   catch (e) {
            dispatch({type: dataActionTypes.GET_DATA_ERROR})
        }
    }
}