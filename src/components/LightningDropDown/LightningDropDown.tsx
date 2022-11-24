import { lightningDropDown } from "../../store/types/dataTypes"
import css from './LightningDropDown.module.sass'

const LightningIcon = () => <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.02344 7.06666L1.08104 10.8363C0.981308 11.2341 1.47357 11.5061 1.75784 11.2101L8.15464 4.544C8.20902 4.48748 8.24559 4.41621 8.25979 4.33908C8.27398 4.26194 8.26519 4.18233 8.2345 4.11015C8.20381 4.03797 8.15258 3.9764 8.08717 3.93311C8.02176 3.88982 7.94508 3.86671 7.86664 3.86666H5.48797L6.37971 1.19306C6.39974 1.13292 6.40519 1.06888 6.39561 1.00621C6.38603 0.943549 6.36169 0.884059 6.32461 0.832648C6.28752 0.781237 6.23874 0.739376 6.1823 0.710517C6.12586 0.681659 6.06337 0.666628 5.99997 0.666664H2.26664C2.17973 0.666682 2.09518 0.695008 2.0258 0.747356C1.95642 0.799705 1.90598 0.873226 1.88211 0.956797L0.282108 6.5568C0.265105 6.61632 0.262149 6.67898 0.273473 6.73984C0.284797 6.80069 0.310092 6.85809 0.347366 6.90752C0.384641 6.95694 0.432877 6.99704 0.488279 7.02465C0.543682 7.05227 0.604738 7.06665 0.666641 7.06666H2.02344Z" fill="#8754F6"/></svg>


const LightningDropDown: React.FC<lightningDropDown> = ({title, id}) => {

    return <>
        <div className={css.wrapper}>
            <div className={css.lightningWrapper}><LightningIcon/></div>
            <span style={{color: '#8B8C9E'}}>0</span>
            <span className={css.name}>{title}</span>
        </div>
    </>
}

export default LightningDropDown