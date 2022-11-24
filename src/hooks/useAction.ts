import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as DataActionCreator from '../store/action-creators/data'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(DataActionCreator, dispatch)
}