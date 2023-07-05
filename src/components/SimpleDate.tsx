import {ReactElement} from 'react';
import {AiFillCalendar} from "react-icons/ai";

interface DateProps {
    date: ReactElement<HTMLTimeElement>
}
const SimpleDate = ({date}: DateProps) => {
    return (
        <div className={'flex gap-1 items-center'}>
            <AiFillCalendar />
            {date}
        </div>
    );
};

export default SimpleDate;