import {TiLocation} from "react-icons/ti";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import {ReactNode} from "react";
import {ClassNameValue, twMerge} from "tailwind-merge";

const Header = () => {
    return (
        <div className={'flex flex-col justify-between gap-8 pt-6'}>
            <Title/>
            <address className={'flex flex-col gap-3'}>
                <Contact/>
                <Address/>
            </address>
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

const Contact = () => (
    <div className={'flex flex-wrap gap-x-4 justify-center items-center'}>
        <div className={'flex gap-1 items-center'}>
            <TiLocation/>
            <span>Ростов-на-Дону</span>
        </div>
        <div className={'flex gap-1 items-center'}>
            <IoMail/>
            <a href="mailto:danil2003.2043@gmail.com?subject=Предложение о сотрудничестве" target='_blank'>
                danil2003.2043@gmail.com
            </a>
        </div>
    </div>
)

const Item = ({className, children, href}: { className: ClassNameValue, children: ReactNode, href: string }) => (
    <a href={href} target='_blank' role='button'
       className={
           twMerge('bg-white border-solid border px-3 py-1.5 rounded-2xl flex items-center gap-2',
               className)
       }
    >
        {children}
    </a>
)

const Address = () => (
    <div className={'flex flex-wrap gap-y-1 gap-x-3 justify-center'}>
        <Item className={'text-black border-black '} href={'https://github.com/kemper0110'}>
            <BsGithub/>
            <span className={'font-semibold'}>
                /kemper0110
            </span>
        </Item>
        <Item className={'text-blue-500 border-blue-500'} href={'https://t.me/d4n11g'}>
            <BsTelegram/>
            <span className={'font-semibold'}>
                @d4n11g
            </span>
        </Item>
        {/*<Item className={'hidden text-orange-500 border-orange-500'} href={'tel:+79525671679'}>*/}
        {/*    <BsPhoneFill/>*/}
        {/*    <span className={'font-semibold'}>*/}
        {/*        +7 (952) 567-16-79*/}
        {/*    </span>*/}
        {/*</Item>*/}
    </div>
)

export default Header;