export const Item = ({label}: { label: string }) => (
    <button type={'button'}
        className={"transition-colors w-min-[40px] px-1.5 py-0.5 bg-[#f1f2f9] hover:bg-[#e6e2ea] dark:bg-slate-700 dark:hover:bg-slate-600 rounded-lg text-center "}>
        <span className={"text-[#64748b] dark:text-slate-300 font-medium overflow-hidden overflow-ellipsis line-clamp-2"}>
            {label}
        </span>
    </button>
)