export function formatDate(
    {
        date,
        locale = 'es-CO',
        options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        },
    }: {
        date: string | number | Date;
        locale?: Intl.LocalesArgument;
        options?: Intl.DateTimeFormatOptions;
    }
): string {
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    return new Intl.DateTimeFormat(locale, options).format(date);
}
