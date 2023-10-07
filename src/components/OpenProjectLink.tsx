import {BiLinkExternal} from "react-icons/bi";

const OpenProjectLink = ({href}: { href: string }) => {
    return (
        <a
            href={href}
            target={'_blank'}
            className={'inline-flex gap-2 mt-3 items-center px-3 py-1 border border-slate-600 rounded-lg transition-colors ' +
                'dark:hover:bg-slate-600 hover:bg-slate-300'}
        >
            Перейти на сайт <BiLinkExternal size={24}/>
        </a>
    );
};

export default OpenProjectLink;