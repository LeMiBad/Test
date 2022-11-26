import { useOpeningSwitcher } from '../../hooks/useOpeningSwitcher'
import { useTaskParse } from '../../hooks/useTaskParse'
import Vector from '../../icons/Vector'
import { chart } from '../../store/types/dataTypes'
import GreenDropDown from '../GreenDropDown/GreenDropDown'
import css from './PurpleDropDown.module.sass'

const PurpleIcon = () => <svg width="11" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.8091 0.997923L9.52201 3.47301C9.60191 3.52628 9.66741 3.59845 9.71272 3.68311C9.75802 3.76778 9.78173 3.86232 9.78173 3.95834C9.78173 4.05436 9.75802 4.1489 9.71272 4.23357C9.66741 4.31823 9.60191 4.3904 9.52201 4.44367L5.8091 6.91934C5.56951 7.07911 5.28798 7.16436 5.00001 7.16436C4.71204 7.16436 4.43052 7.07911 4.19093 6.91934L0.478014 4.44367C0.398122 4.3904 0.332616 4.31823 0.28731 4.23357C0.242004 4.1489 0.2183 4.05436 0.2183 3.95834C0.2183 3.86232 0.242004 3.76778 0.28731 3.68311C0.332616 3.59845 0.398122 3.52628 0.478014 3.47301L4.19093 0.997923C4.43052 0.838157 4.71204 0.752899 5.00001 0.752899C5.28798 0.752899 5.56951 0.838157 5.8091 0.997923ZM9.68185 6.11201C9.59528 6.25055 9.48062 6.36938 9.34526 6.46084L5.8161 8.84317C5.57506 9.00593 5.29086 9.09289 5.00001 9.09289C4.70917 9.09289 4.42497 9.00593 4.18393 8.84317L0.654764 6.46084C0.443543 6.31835 0.284777 6.11062 0.202721 5.86941C0.120665 5.62819 0.119832 5.36674 0.200347 5.12501L4.19093 7.78501C4.41496 7.9343 4.67595 8.01867 4.94498 8.02876C5.21402 8.03885 5.48059 7.97427 5.71518 7.84217L5.80851 7.78501L9.7991 5.12501C9.8536 5.28798 9.87135 5.461 9.85108 5.63165C9.83081 5.80229 9.77302 5.96634 9.68185 6.11201ZM9.68185 8.00784C9.59528 8.14638 9.48062 8.26522 9.34526 8.35667L5.8161 10.739C5.57506 10.9018 5.29086 10.9887 5.00001 10.9887C4.70917 10.9887 4.42497 10.9018 4.18393 10.739L0.654764 8.35667C0.443543 8.21418 0.284777 8.00646 0.202721 7.76524C0.120665 7.52402 0.119832 7.26257 0.200347 7.02084L4.19093 9.68084C4.41496 9.83013 4.67595 9.9145 4.94498 9.92459C5.21402 9.93468 5.48059 9.8701 5.71518 9.73801L5.80851 9.68084L9.7991 7.02084C9.8536 7.18381 9.87135 7.35683 9.85108 7.52748C9.83081 7.69813 9.77302 7.86217 9.68185 8.00784Z" fill="#8754F6"/></svg>

const PurpleDropDown:React.FC<chart> = ({title, sub, period_start, period_end}) => {
    const {openState, switchHandler} = useOpeningSwitcher()
    const [width, start] = useTaskParse(period_start, period_end)


    return <>
        <div onClick={switchHandler} className={css.wrapper}>
            <Vector isOpen={openState}/>
            <div className={css.purpleWrapper}><PurpleIcon/></div>
            <span style={{color: '#8B8C9E'}}>{sub.length}</span>
            <span className={css.name}>{title}</span>
            <div style={{left: `calc(100% + ${start * 21}px)`, width: `${width * 21}px`}} className={css.pos}></div>
            <div style={{left: `calc(100% + ${start * 21 + width * 21 + 10}px)`, position: 'absolute', width: '100%'}}>{title}</div>
        </div>
        {(openState)? 
        sub.map(child => <GreenDropDown period_start={child.period_start} period_end={child.period_end} sub={child.sub} id={child.id} title={child.title} key={child.id}/>) 
        : <></>}
    </>
}

export default PurpleDropDown