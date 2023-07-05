import {TiLocation} from "react-icons/ti";
import {BsGithub, BsPhone, BsPhoneFill, BsTelegram} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import React from "react";

const Header = () => {
    return (
        <div className={'flex flex-col justify-between gap-8 pt-6'}>
            <Title/>
            <Info>
                <Contact/>
                <Address/>
            </Info>
        </div>
    )
};

const Title = () => (
    <div className="flex-col justify-start items-center gap-1 inline-flex">
        <div className="justify-start items-start gap-4 inline-flex">
            <div className="text-[28px] font-extrabold">Данил Голосуев</div>
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
            <div className="text-[14px] font-medium">Full-stack Developer</div>
        </div>
    </div>
)

const Info = ({children}: React.InputHTMLAttributes<HTMLElement>) => (
    <address className={'flex flex-col gap-3'}>
        {children}
    </address>
)

const Contact = () => (
    <div className={'flex flex-wrap gap-x-4 justify-center'}>
        <div className={'flex gap-1 items-center'}>
            <TiLocation color={''}/>
            <span className=''>Ростов-на-Дону</span>
        </div>
        <div className={'flex gap-1 items-center'}>
            <IoMail color={''}/>
            <a className=''
               href="mailto:danil2003.2043@gmail.com?subject=Предложение о сотрудничестве" target='_blank'>
                danil2003.2043@gmail.com
            </a>
        </div>
    </div>
)
const Address = () => (
    <div className={'flex flex-wrap gap-y-1 gap-x-3 justify-center'}>
        <a href='https://github.com/kemper0110' target='_blank' role='button'
           className={'bg-white border-solid border text-black border-black px-3 py-1.5 rounded-2xl flex items-center gap-2'}
        >
            <BsGithub/>
            <span className={'font-semibold'}>
                /kemper0110
            </span>
        </a>
        <a href='https://t.me/d4n11g' target='_blank'
           className={'bg-white border-solid border text-blue-500 border-blue-500 px-3 py-1.5 rounded-2xl flex items-center gap-2'}
        >
            <BsTelegram/>
            <span className={'font-semibold'}>
                @d4n11g
            </span>
        </a>
        <a href='tel:+79525671679' target='_blank'
           className={'bg-white border-solid border text-orange-500 border-orange-500 px-3 py-1.5 rounded-2xl flex items-center gap-2'}
        >
            <BsPhoneFill/>
            <span className={'font-semibold'}>
                +7 (952) 567-16-79
            </span>
        </a>
    </div>
)

export default Header;