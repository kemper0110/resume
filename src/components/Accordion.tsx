import {ReactNode, useId, useState} from "react";
import downOpenIcon from '../assets/downOpen.svg';
import downClosedIcon from '../assets/downClosed.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";

export const Accordion = ({label, children}: { label: ReactNode, children: ReactNode | ReactNode[] }) => {
    const [open, setOpen] = useState(false)
    const id = useId()
    return (
        <div tw="w-full overflow-hidden pt-3">
            <input tw="absolute opacity-0 peer" id={id} type="checkbox"
                   onChange={e => setOpen(e.target.checked)}/>
            <label tw={"flex md:flex-row flex-col-reverse gap-2 md:gap-8 border border-slate-600 rounded-lg items-center p-2 md:p-5 leading-normal cursor-pointer select-none"}
                   htmlFor={id}>
                <img tw={'dark:invert'} src={open ? downOpenIcon : downClosedIcon} alt={'down'}/>
                {label}
            </label>
            <div tw="grid transition-all overflow-hidden grid-rows-[0fr] peer-checked:grid-rows-[1fr]">
                <div tw={'min-h-0 border-l pl-3 dark:bg-gray-800 border-slate-600 leading-normal'}>
                    {children}
                </div>
            </div>
        </div>
    )
}