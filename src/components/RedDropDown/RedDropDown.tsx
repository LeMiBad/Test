import { useOpeningSwitcher } from "../../hooks/useOpeningSwitcher"
import Vector from "../../icons/Vector"
import { yellowChart } from "../../store/types/dataTypes"
import LightningDropDown from "../LightningDropDown/LightningDropDown"
import css from './RedDropDown.module.sass'

const RedIcon = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.66449 6C0.66449 3.05386 3.05276 0.665596 5.99889 0.665596C8.94502 0.665596 11.3333 3.05386 11.3333 6C11.3333 8.94613 8.94502 11.3344 5.99889 11.3344C3.05276 11.3344 0.66449 8.94613 0.66449 6ZM5.99889 1.4656C5.40342 1.4656 4.81379 1.58288 4.26365 1.81076C3.71351 2.03863 3.21364 2.37263 2.79258 2.79369C2.37153 3.21475 2.03753 3.71462 1.80965 4.26476C1.58178 4.81489 1.46449 5.40453 1.46449 6C1.46449 6.59546 1.58178 7.1851 1.80965 7.73524C2.03753 8.28537 2.37153 8.78524 2.79258 9.2063C3.21364 9.62736 3.71351 9.96136 4.26365 10.1892C4.81379 10.4171 5.40342 10.5344 5.99889 10.5344C7.20149 10.5344 8.35483 10.0567 9.20519 9.2063C10.0556 8.35594 10.5333 7.20259 10.5333 6C10.5333 4.7974 10.0556 3.64406 9.20519 2.79369C8.35483 1.94333 7.20149 1.4656 5.99889 1.4656Z" fill="#BE385E"/></svg>

const RedDropDown: React.FC<yellowChart> = ({title, sub, id}) => {
    const {openState, switchHandler} = useOpeningSwitcher()

    return <>
            <div onClick={switchHandler} className={css.wrapper}>
                <Vector isOpen={openState}/>
                <div className={css.redWrapper}><RedIcon/></div>
                <span style={{color: '#8B8C9E'}}>{sub.length}</span>
                <span className={css.name}>{title}</span>
            </div>
            {(openState)? 
            sub.map(child => <LightningDropDown title={child.title} id={child.id} period_start={child.period_start} period_end={child.period_end} key={child.id}/>) 
            : <></>}
        </>
}

export default RedDropDown