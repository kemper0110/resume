import Header from "./structure/Header.tsx";
import Content from "./structure/Content.tsx";
import Table from "./blocks/table/Table.tsx";
import Projects from "./blocks/projects/Projects.tsx";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";


type CbFn = (dark: boolean) => boolean
const useDarkState = (): [boolean, (cb: CbFn) => void] => {
    const [dark, _setDark] = useState(
        localStorage && localStorage.theme === 'dark' ||
        (!(localStorage && 'theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
    const setDark = (cb: CbFn) => {
        _setDark(dark => {
            const new_dark = cb(dark)
            if (new_dark) {
                document.documentElement.classList.add('dark')
                if(localStorage) localStorage.theme = 'dark'
            } else {
                document.documentElement.classList.remove('dark')
                if(localStorage) localStorage.theme = 'light'
            }
            return new_dark
        })
    }
    return [dark, setDark]
}

const DarkModeButton = () => {
    const [dark, setDark] = useDarkState()
    return (
        <button name={'Темная тема / Светлая тема'} tw={'absolute md:right-5 md:top-3 right-0'}
                onClick={() => setDark(d => !d)}
        >
            {
                dark ? <MdDarkMode size={'50px'}/> : <MdLightMode size={'50px'}/>
            }
        </button>
    )
}

function App() {
    return (
        <div tw={'dark:bg-bgDark bg-bgLight min-h-screen pb-20 dark:text-primaryDark text-primaryLight'}>
            <div tw={'mx-auto'}>
                <DarkModeButton/>
                <Header/>
                <Content>
                    <Table/>
                    <Projects/>
                </Content>
            </div>
        </div>
    )
}

export default App
