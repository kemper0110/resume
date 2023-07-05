import {ReactNode, useId, useState} from "react";
import downOpenIcon from '../assets/downOpen.svg';
import downClosedIcon from '../assets/downClosed.svg';

export const Accordion = ({label, children}: { label: ReactNode, children: ReactNode | ReactNode[] }) => {
    const [open, setOpen] = useState(false)
    const id = useId()
    return (
        <div className="w-full overflow-hidden pt-3">
            <input className="absolute opacity-0 peer" id={id} type="checkbox"
                   onChange={e => setOpen(e.target.checked)}/>
            <label className={"flex md:flex-row flex-col-reverse gap-2 md:gap-8 border border-slate-600 rounded-lg items-center p-2 md:p-5 leading-normal cursor-pointer select-none"}
                   htmlFor={id}>
                {
                    open ?
                        <img className={'dark:invert'} src={downOpenIcon} alt={'down'}/> :
                        <img className={'dark:invert'} src={downClosedIcon} alt={'down'}/>
                }
                {label}
            </label>
            <div className="grid transition-all overflow-hidden grid-rows-[0fr] peer-checked:grid-rows-[1fr]">
                <div className={'min-h-0 border-l pl-3 dark:bg-gray-800 border-slate-600 leading-normal'}>
                    {children}
                </div>
            </div>
        </div>
    )
}