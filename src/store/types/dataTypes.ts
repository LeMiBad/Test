export interface lightningDropDown {
    id: number
    period_start: string
    period_end: string
    title: string
} 

export interface redChart {
    id: number
    period_start: string
    period_end: string
    sub: any
    title: string
}

export interface yellowChart {
    id: number
    period_start: string
    period_end: string
    sub: redChart[]
    title: string
}

export interface greenChart {
    id: number
    period_start: string
    period_end: string
    sub: yellowChart[]
    title: string
}

export interface chart {
    id: number
    sub: greenChart[]
    title: string
}


export interface initalDataStateType {
    data: {
        project?: string
        period?: string
        chart: chart
    } | null
    loading: boolean
    error: null | boolean
}

export enum dataActionTypes {
    GET_DATA = 'GET_DATA',
    GET_DATA_SUCCES = 'GET_DATA_SUCCES',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
}

interface GetDataAction {
    type: dataActionTypes.GET_DATA
}
interface GetDataSuccesAction {
    type: dataActionTypes.GET_DATA_SUCCES
    payload: any
}
interface GetDataErrorAction {
    type: dataActionTypes.GET_DATA_ERROR
}

export type dataAction = GetDataAction | GetDataSuccesAction | GetDataErrorAction