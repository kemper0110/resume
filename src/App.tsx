import Header from "./structure/Header.tsx";
import Content from "./structure/Content.tsx";
import Table from "./blocks/table/Table.tsx";
import Projects from "./blocks/projects/Projects.tsx";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {useEffect, useState} from "react";

const DarkModeButton = () => {
    const [dark, setDark] = useState(true)
    useEffect(() => {
        if(dark)
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')
    }, [dark])
    return (
        <button className={'absolute md:right-5 md:top-3 right-0'}
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
        <div className={'dark:bg-bgDark bg-bgLight min-h-screen pb-20 dark:text-primaryDark text-primaryLight'}>
            <div className={' mx-auto'}>
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
