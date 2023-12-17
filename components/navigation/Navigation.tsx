import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/PaddingContainer'

function Navigation() {
    return (
        <div className="border-b sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md">
            <PaddingContainer>
                <div className='py-5 flex items-center justify-between'>
                    <Link href='/' className='font-bold text-lg'>Explorer</Link>
                    <nav className="">
                        <ul className="flex items-center gap-4 text-neutral-600">
                            <li>
                                <Link href='/cities' className="">Cities</Link>
                            </li>
                            <li>
                                <Link href='/experiences' className="">Experiences</Link>
                            </li>
                        </ul>

                    </nav>
                </div>
            </PaddingContainer>
        </div>
    )
}

export default Navigation