import Negotiator from 'negotiator'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './i18n.config'

function getLocale (request: NextRequest) : string | undefined {
    // Negotiator expects plain object so we need to transform headers
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // use negotiator and intl-localematcher to get best locale
    let languages = new Negotiator({headers: negotiatorHeaders}).languages()
    // @ts-ignore locales are readonly
    const locales: string[] = i18n.locales
    return matchLocale(languages, locales, i18n.defaultLocale)
}


export default function middleware (request: NextRequest){
    const pathName = request.nextUrl.pathname

    // check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every((locale) => !pathName.startsWith(`/${locale}`) && pathName !== `/${locale}`)

    //redirect if there is no locale
    if(pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect (new URL(`/${locale}/${pathName}`, request.url))
    }
}

export const config = {
    // matcher ignoring /_next/ and /api/
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}