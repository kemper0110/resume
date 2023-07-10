import {TiLocation} from "react-icons/ti";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import {ReactNode} from "react";
import {ClassNameValue, twMerge} from "tailwind-merge";
import avatar from '../assets/avatar/2.jpeg';

const Header = () => {
    return (
        <div className={'flex flex-col items-center gap-8 pt-6'}>
            <div className={"flex md:flex-row-reverse flex-col items-center gap-x-8 gap-y-3"}>
                <Avatar/>
                <div>
                    <Title/>
                    <address className={'flex flex-col gap-3'}>
                        <Contact/>
                        <Address/>
                    </address>
                </div>
            </div>
        </div>
    )
};

const Avatar = () => (
    <div className={'bg-[#77cce9] w-[210px] h-[210px]'}
         style={{clipPath: "circle(100px at 50% 50%)"}}
    >
        <img src={avatar} alt={'Данил Голосуев'}/>
    </div>
)

const Title = () => (
    <div className="flex flex-col gap-1 items-center">
        <div className="text-3xl font-extrabold">Данил Голосуев</div>
        <div className="font-medium">Full-stack Developer</div>
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