import React, {ReactElement} from "react";
import {AiFillCalendar} from "react-icons/ai";
import {twMerge} from "tailwind-merge";


interface DatePeriodProps extends React.InputHTMLAttributes<HTMLDivElement> {
    dateFrom: ReactElement<HTMLTimeElement>
    dateTo: ReactElement<HTMLTimeElement>
}

const DatePeriod = ({dateFrom, dateTo, className, ...divProps}: DatePeriodProps) => {
    return (
        <div className={twMerge('flex flex-wrap gap-x-1 justify-end items-center', className)}
             {...divProps}
        >
            <AiFillCalendar/>
            {dateFrom}
            <span className=''>-</span>
            {dateTo}
        </div>
    );
};

export default DatePeriod;