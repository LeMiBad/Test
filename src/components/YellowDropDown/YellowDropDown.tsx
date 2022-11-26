import { useOpeningSwitcher } from "../../hooks/useOpeningSwitcher"
import { useTaskParse } from "../../hooks/useTaskParse"
import Vector from "../../icons/Vector"
import { greenChart } from "../../store/types/dataTypes"
import RedDropDown from "../RedDropDown/RedDropDown"
import css from './YellowDropDown.module.sass'

const YellowIcon = () => <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.901301 10.2555C0.841504 10.2985 0.770988 10.3242 0.69753 10.3296C0.624071 10.3351 0.550521 10.3202 0.484991 10.2866C0.419461 10.2529 0.364495 10.2019 0.326153 10.139C0.287812 10.0761 0.267584 10.0038 0.267701 9.93013V1.93333C0.267701 1.47362 0.450319 1.03274 0.775382 0.707678C1.10045 0.382615 1.54133 0.199997 2.00103 0.199997H6.0005C6.46002 0.200138 6.90069 0.382746 7.22562 0.707678C7.55055 1.03261 7.73316 1.47327 7.7333 1.9328V9.93066C7.73332 10.0043 7.71302 10.0765 7.67464 10.1393C7.63626 10.2021 7.58128 10.2531 7.51577 10.2867C7.45026 10.3203 7.37675 10.3352 7.30334 10.3296C7.22993 10.3241 7.15946 10.2985 7.0997 10.2555L4.0005 8.0256L0.900768 10.2549L0.901301 10.2555Z" fill="#F0C752"/></svg>

const YellowDropDown:React.FC<greenChart> = ({title, sub, id, period_start, period_end}) => {
    const {openState, switchHandler} = useOpeningSwitcher()
    const [width, start] = useTaskParse(period_start, period_end)

    return <>
        <div onClick={switchHandler} className={css.wrapper}>
            <Vector isOpen={openState}/>
            <div className={css.yellowWrapper}><YellowIcon/></div>
            <span style={{color: '#8B8C9E'}}>{sub.length}</span>
            <span className={css.name}>{title}</span>
            <div style={{left: `calc(100% + ${start * 21}px)`, width: `${width * 21}px`}} className={css.pos}></div>
            <div style={{left: `calc(100% + ${start * 21 + width * 21 + 10}px)`, position: 'absolute', width: '100%'}}>{title}</div>
        </div>
        {(openState)? 
        sub.map(child => <RedDropDown period_start={child.period_start} period_end={child.period_end} sub={child.sub} title={child.title} id={child.id} key={child.id}/>) 
        : <></>}
    </>
}

export default YellowDropDown