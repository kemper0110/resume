import {ReactNode, useId} from "react";
import downClosedIcon from '../assets/downClosed.svg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const Accordion = ({label, children}: { label: ReactNode, children: ReactNode | ReactNode[] }) => {
    const id = useId()
    return (
        <div tw="w-full overflow-hidden pt-3">
            <input tw="absolute opacity-0" className='peer' id={id} type="checkbox"/>
            <label tw={"flex md:flex-row flex-col-reverse gap-2 md:gap-8 border border-slate-600 rounded-lg items-center p-2 md:p-5 leading-normal cursor-pointer select-none"}
                   className={'group'}
                   htmlFor={id}>
                <img className={'peer-checked:group-[]:rotate-180'} tw={'dark:invert transform transition-transform'} src={downClosedIcon} alt={'down'}/>
                {label}
            </label>
            <div tw="peer-checked:grid-rows-[1fr] grid transition-all overflow-hidden grid-rows-[0fr]">
                <div tw={'min-h-0 border-l pl-3 dark:bg-gray-800 border-slate-600 leading-normal'}>
                    {children}
                </div>
            </div>
        </div>
    )
}
/*

css`
                        input:checked + label & {
                          transform: rotate(180deg);
                        }
                    `
 */