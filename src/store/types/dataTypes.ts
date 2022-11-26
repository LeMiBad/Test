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
    period_start: string
    period_end: string
    sub: greenChart[]
    title: string
}


export interface initalDataStateType {
    data: {
        project?: string
        period?: string
        chart: chart
    } | null
    weeks?: {
        weekName: string,
        days: number[]
    }[] | undefined
    loading: boolean
    error: null | boolean
}

export enum dataActionTypes {
    GET_DATA = 'GET_DATA',
    GET_DATA_SUCCES = 'GET_DATA_SUCCES',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
    TASK_PARSE = 'TASK_PARSE',
}

interface GetDataAction {
    type: dataActionTypes.GET_DATA
}
interface GetDataSuccesAction {
    type: dataActionTypes.GET_DATA_SUCCES
    payload: { project?: string | undefined; period?: string; chart: chart; }
}
interface GetDataErrorAction {
    type: dataActionTypes.GET_DATA_ERROR
}
interface TaskParseAction {
    type: dataActionTypes.TASK_PARSE
}

export type dataAction = GetDataAction | GetDataSuccesAction | GetDataErrorAction | TaskParseAction