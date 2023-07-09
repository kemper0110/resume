import React from "react";
import {twMerge} from "tailwind-merge";
const Content = ({className, ...mainProps} : React.InputHTMLAttributes<HTMLElement>) => {
    return (
        <main {...mainProps} className={twMerge('container mx-auto', className)}>

        </main>
    );
};

export default Content;