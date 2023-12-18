import readingTime from 'reading-time'
import { DateTime } from 'luxon'

export const getReadingTime = (text: string, locale: string) => {
    const minutes = readingTime(text).minutes
    const minutesRounded = Math.floor(minutes * 10) 
    if (locale === 'pt') {
        if (minutesRounded === 1)
            return `${minutesRounded} minuto`
        else
            return `${minutesRounded} minutos`
    } else {
        if (minutesRounded === 1)
            return `${minutesRounded} minute`
        else
            return `${minutesRounded} minutes`
    }
}

export const getRelativeDate = (date: string, locale: string) => {
    return DateTime.fromISO(date).setLocale(locale).toRelative()
}