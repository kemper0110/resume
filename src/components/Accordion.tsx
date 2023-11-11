import {ReactNode, useId} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';

export const Accordion = ({label, children}: { label: ReactNode, children: ReactNode | ReactNode[] }) => {
    const id = useId()
    return (
        <div tw="w-full overflow-hidden pt-3">
            <input tw="absolute opacity-0" className='peer' id={id} type="checkbox"/>
            <label
                tw={"flex md:flex-row flex-col-reverse gap-2 md:gap-8 border border-slate-600 rounded-lg items-center p-2 md:p-5 leading-normal cursor-pointer select-none"}
                className={'group'}
                htmlFor={id}>
                <div tw={'w-[24px] h-[14px]'}>
                    <svg className={'peer-checked:group-[]:rotate-180'} tw={'dark:invert transform transition-transform'}
                         width="24" height="14"
                         viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Down" fillRule="evenodd" clipRule="evenodd"
                              d="M23.5227 2.96707L13.1523 13.3375C12.5159 13.9739 11.4841 13.9739 10.8477 13.3375L0.477287 2.96707C-0.159095 2.33069 -0.159095 1.29891 0.477287 0.662527C1.11367 0.0261451 2.14545 0.0261451 2.78183 0.662528L12 9.8807L21.2182 0.662528C21.8546 0.026146 22.8863 0.026146 23.5227 0.662528C24.1591 1.29891 24.1591 2.33069 23.5227 2.96707Z"
                              fill="black"/>
                    </svg>
                </div>
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