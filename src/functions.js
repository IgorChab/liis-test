export const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

export const getFormatedDateForApi = (date) => {
    let now = new Date(date)

    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)

    return now.getFullYear()+"-"+(month)+"-"+(day) ;
}

export const getFormatDateForCard = (date) => {
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da} ${mo} ${ye}`
}
