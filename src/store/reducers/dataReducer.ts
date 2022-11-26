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
            const periodParse = (period: string) => {
                const months: {[key: number]: string} = {1: 'Jan',2: 'Feb',3: 'March',4: 'Apr',5: 'May',6: 'Jun',7: 'Jul',8: 'Aug',9: 'Sep',10: 'Oct',11: 'Nov',12: 'Dec'}
        
                
                const period_start = period.split('-')[0]
                const period_end = period.split('-')[1]
    
                const monthNames = []
    
                for(let i = +period_start.split('.')[1]; i < +period_end.split('.')[1]; i++) {
                    if(['Sep', 'Apr', 'Jun', 'Nov'].includes(months[i])) {
                        for(let j = 1; j < 31; j++) {
                            monthNames.push({month: months[i], day: j})
                        }
                    }
                    else {
                        for(let j = 1; j < 32; j++) {
                            monthNames.push({month: months[i], day: j})
                        }
                    }
                }
    
                let weeks = []
    
                for(let i = 0; i < monthNames.length; i+=7) {
                    if(monthNames[i+6]) {
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i+6].day < 10)? `0${monthNames[i+6].day}` : monthNames[i+6].day} ${monthNames[i+6].month}`
                            }
                        )
                    }
                    else if(monthNames[i+5]) {
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i+5].day < 10)? `0${monthNames[i+6].day}` : monthNames[i+5].day} ${monthNames[i+5].month}`
                            }
                        )
                    }
                    else if(monthNames[i+4]) {
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i+4].day < 10)? `0${monthNames[i+4].day}` : monthNames[i+4].day} ${monthNames[i+4].month}`
                            }
                        )
                    }
                    else if(monthNames[i+3]) {
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i+3].day < 10)? `0${monthNames[i+3].day}` : monthNames[i+3].day} ${monthNames[i+3].month}`
                            }
                        )
                    }
                    else if(monthNames[i+2]) {
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i+2].day < 10)? `0${monthNames[i+2].day}` : monthNames[i+2].day} ${monthNames[i+2].month}`
                            }
                        )
                    }
                    else{
                        weeks.push({
                            weekName: `${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month} - ${(monthNames[i].day < 10)? `0${monthNames[i].day}` : monthNames[i].day} ${monthNames[i].month}`
                            }
                        )
                    }
                }
    
                
                return weeks.map(week => {
                    const days = []
                    for(let i = +week.weekName.split(' ')[0]; i <= +week.weekName.split(' ')[0] + 6; i++) {
                        if(i > 30 && !['Sep', 'Apr', 'Jun', 'Nov'].includes(week.weekName)) days.push(i - 30)
                        else if(i > 31) days.push(i-31) 
                        else days.push(i)
                    }
                    return {
                        weekName: week.weekName,
                        days
                    }
                })
            }
            return {data: action.payload, weeks: periodParse(action.payload.period? action.payload.period : ''), loading: false, error: null}
        case dataActionTypes.GET_DATA_ERROR:
            return {data: state.data, loading: false, error: true}
        case dataActionTypes.TASK_PARSE:
            return {data: state.data, loading: false, error: true}
        default:
            return state
    }
}