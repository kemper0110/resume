import {BsGithub} from "react-icons/bs";

const SourceLink = ({href}: {href: string}) => (
    <a
        href={href}
        target={'_blank'}
        className={'inline-flex gap-2 mt-3 items-center px-3 py-1 border border-slate-600 rounded-lg transition-colors ' +
            'dark:hover:bg-slate-600 hover:bg-slate-300'}
    >
        Code <BsGithub size={24}/>
    </a>
)

export default SourceLink;