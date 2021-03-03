
import { format, parseISO } from 'date-fns';

function convertDate(date) {
    if (date) {
        return format(parseISO(date), 'dd/MM/yyyy');
    }
}

function dateCalculateYear(date) {
    if (date) {
        const birthyear = new Date(date).getFullYear();
        const actualyear = new Date().getFullYear();
        return actualyear - birthyear;
    }
}

export { convertDate, dateCalculateYear };