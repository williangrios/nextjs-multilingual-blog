import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/PaddingContainer'
import { getDictionary } from '@/lib/getDictionary'
import LangSwitcher from './LangSwitcher'

async function Navigation({locale}: {locale: string}) {
    const dictionary = await getDictionary(locale)
    return (
        <div className="border-b sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md">
            <PaddingContainer>
                <div className='py-5 flex items-center justify-between'>
                    <Link href={`/${locale}`} className='font-bold text-lg'>Explorer</Link>
                    <nav className="">
                        <ul className="flex items-center gap-4 text-neutral-600">
                            <li className="">
                                <LangSwitcher locale={locale}/>
                            </li>
                            <li>
                                <Link href={`/${locale}/cities`} className="">{dictionary.navigation.links.cities}</Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/experiences`} className="">{dictionary.navigation.links.experience}</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </PaddingContainer>
        </div>
    )
}

export default Navigation