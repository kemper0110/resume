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
                    <h2 tw={'font-medium text-2xl'}>Программная инженерия — Бакалавриат и Магистратура</h2>
                    <DatePeriod>
                        <CalendarIcon/>
                        <time dateTime={'2020-09-01'}>
                            Сент 2020
                        </time>
                        <span>-</span>
                        <time dateTime={'2026-07-01'}>
                            Июнь 2026
                        </time>
                    </DatePeriod>
                </div>
                <p>
                    Донской Государственный Технический Университет
                </p>
                <p tw={'text-sm font-thin dark:text-slate-400 text-slate-500'}>
                    Красный диплом
                </p>
            </TableContent>
        </tr>
    );
};