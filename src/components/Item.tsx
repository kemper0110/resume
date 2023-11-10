import tw from "twin.macro";
import styled from "@emotion/styled";

export const Item = styled.div([
    tw`transition-colors min-w-[40px] px-1.5 py-0.5 rounded-lg text-center font-medium overflow-hidden overflow-ellipsis line-clamp-2`,
    tw`text-[#64748b] bg-[#f1f2f9] hover:(bg-[#e6e2ea] dark:bg-slate-600) dark:(bg-slate-700 text-slate-300)`
])