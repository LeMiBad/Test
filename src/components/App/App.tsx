import css from './App.module.sass'
import PurpleDropDown from '../PurpleDropDown/PurpleDropDown'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useMemo } from 'react'
import { useActions } from '../../hooks/useAction'


const App: React.FC = () => {
    const {data, error, loading} = useTypedSelector(state => state.data)
    const {getData} = useActions()

    useMemo(() => {
        getData()
    }, [])

    
    if(loading) return <h1>Загрузка</h1>

    if(error) return <h1>Ошибка</h1>


    return (data)? <>
        <h1 style={{ margin: 0, fontSize: 26 }}>{data.project}/ {data.period}</h1>
        <div className={css.wrapper}>
            <div className={css.tasks}>
                <div className={css.tasksHeader}>Work Item</div>
                <div className={css.tasksEmpty}></div>
                <PurpleDropDown title={data.chart.title} sub={data.chart.sub} id={data.chart.id}/>
                <div style={{height: '100%'}}></div>
            </div>
            <div className={css.gantChart}>
                <div className={css.timeline}>
                    <div className={css.week}>
                        <div className={css.weekTime}>01 Sep - 07 Sep</div>
                        <div className={css.days}>
                            <div className={css.day}>1</div>
                            <div className={css.day}>2</div>
                            <div className={css.day}>3</div>
                            <div className={css.day}>4</div>
                            <div className={css.day}>5</div>
                            <div className={css.day}>6</div>
                            <div className={css.day}>7</div>
                        </div>
                        <div className={css.lines}>
                            <div className={css.line}>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                            <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                            <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                            <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                            <div className={css.line}>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                                <div className={css.lineChapter}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> : <></>
}

export default App