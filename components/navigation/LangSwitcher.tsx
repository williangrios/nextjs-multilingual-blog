'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function LangSwitcher({locale} : {locale: string}) {
    const targetLanguage = locale === 'en' ? 'pt' : 'en'
    const pathName = usePathname()

    const redirectTarget = () => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments [1] = targetLanguage
        return segments.join('/')
    }
    
  return (
    <Link className='font-semibold flex gap-1 items-center' href={ redirectTarget()} locale={targetLanguage}>
         {targetLanguage.toUpperCase()}
    </Link>
  )
}

export default LangSwitcher