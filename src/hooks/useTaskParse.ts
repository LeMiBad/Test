import { useTypedSelector } from "./useTypedSelector"


export const useTaskParse = (period_start: string, period_end: string) => {
    const {data} = useTypedSelector(state => state.data)
    const startPos = data?.period?.split('-')[0]

    const months: {[key: number]: string} = {1: 'Jan',2: 'Feb',3: 'March',4: 'Apr',5: 'May',6: 'Jun',7: 'Jul',8: 'Aug',9: 'Sep',10: 'Oct',11: 'Nov',12: 'Dec'}

    let difference = 0

    
    if(period_start.split('-')[1] === period_end.split('-')[1]) {
        difference = +period_end.split('-')[2] - +period_start.split('-')[2]
    }else if (period_start.split('-')[1] !== period_end.split('-')[1]) {
        let counter = 0
        for(let i = +period_start.split('-')[1]; i < +period_end.split('-')[1]; i++) {
            counter += ['Sep', 'Apr', 'Jun', 'Nov'].includes(months[i])? 30 : 31
        }
        difference = counter += Math.abs(+period_end.split('-')[2] - +period_start.split('-')[2])
    }
    
    let startDot = 0

    if(startPos?.split('.')[1] === period_start.split('-')[1]) {
        startDot += +period_start.split('-')[2]
    }else {
        if(startPos?.split('.')[1]) {
            for(let i = +startPos?.split('.')[1]; i < +period_start.split('-')[1]; i++) {
                startDot += ['Sep', 'Apr', 'Jun', 'Nov'].includes(months[i])? 30 : 31
            }
            startDot += +period_start.split('-')[2]
        }
    }

    return [difference+1, startDot-1]
}