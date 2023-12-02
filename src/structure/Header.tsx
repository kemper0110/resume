import {TiLocation} from "react-icons/ti";
import {BsGithub, BsTelegram} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import avatarAvif from '@/assets/avatar/2.jpeg?w=210&format=avif';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import avatarWebp from '@/assets/avatar/2.jpeg?w=210&format=webp';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import avatarJpeg from '@/assets/avatar/2.jpeg?w=210'
import tw from "twin.macro";
import {css} from "@emotion/react";

const Header = () => {
    return (
        <div tw={'flex flex-col items-center gap-8 pt-6'}>
            <div tw={"flex md:flex-row-reverse flex-col items-center gap-x-8 gap-y-3"}>
                <div css={[
                    tw`w-[210px] h-[210px]`,
                    css`clip-path: circle(100px at 50% 50%)`
                ]}
                >
                    <picture>
                        <source srcSet={avatarAvif} type='image/avif'/>
                        <source srcSet={avatarWebp} type='image/webp'/>
                        <img className={'w-[210px] h-[210px]'} loading={'eager'} src={avatarJpeg} alt={'Данил Голосуев'}/>
                    </picture>
                </div>
                <div>
                    <div tw="flex flex-col gap-1 items-center">
                        <div tw="text-3xl font-extrabold">Данил Голосуев</div>
                        <div tw="font-medium">Full-stack Developer</div>
                    </div>
                    <address tw={'flex flex-col gap-3'}>
                        <div tw={'flex flex-wrap gap-x-4 justify-center items-center'}>
                            <div tw={'flex gap-1 items-center'}>
                                <TiLocation/>
                                <span>Ростов-на-Дону</span>
                            </div>
                            <div tw={'flex gap-1 items-center'}>
                                <IoMail/>
                                <a href="mailto:danil2003.2043@gmail.com?subject=Предложение о сотрудничестве"
                                   target='_blank'>
                                    danil2003.2043@gmail.com
                                </a>
                            </div>
                        </div>
                        <div tw={'flex flex-wrap gap-y-1 gap-x-3 justify-center'}>
                            <Item target='_blank' role='button' tw={'text-black border-black '}
                                  href={'https://github.com/kemper0110'}>
                                <BsGithub/>
                                <span tw={'font-semibold'}>
                                    /kemper0110
                                </span>
                            </Item>
                            <Item target='_blank' role='button' tw={'text-blue-500 border-blue-500'}
                                  href={'https://t.me/d4n11g'}>
                                <BsTelegram/>
                                <span tw={'font-semibold'}>
                                    @d4n11g
                                </span>
                            </Item>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    )
};

const Item = tw.a`bg-white border-solid border px-3 py-1.5 rounded-2xl flex items-center gap-2`

export default Header;