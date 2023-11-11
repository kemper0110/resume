import {TableContent, TableHeader} from "./Table.tsx";
import {CalendarIcon, DatePeriod} from "@/components/DatePeriod.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";

export const Education = () => {
    return (
        <tr>
            <TableHeader>
                Образование
            </TableHeader>
            <TableContent>
                <div tw={'flex flex-wrap justify-between'}>
                    <h2 tw={'font-medium text-2xl'}>Донской Государственный Технический Университет</h2>
                    <DatePeriod>
                        <CalendarIcon/>
                        <time dateTime={'2020-09-01'}>
                            Сент 2020
                        </time>
                        <span>-</span>
                        <time dateTime={'2024-06-01'}>
                            Июнь 2024
                        </time>
                    </DatePeriod>
                </div>
                <p>
                    Бакалавриат - Программная инженерия
                </p>
                <p tw={'text-sm font-thin dark:text-slate-400 text-slate-500'}>
                    4 курс, средний балл - 5.0
                </p>
            </TableContent>
        </tr>
    );
};