import Image from 'next/image'
import React from 'react'

function CTACard() {
    return (
        <div className='rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden'>
            <div className='absolute inset-0 top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 z-10' />
            <Image src='https://unsplash.com/pt-br/fotografias/um-grupo-de-palmeiras-em-uma-praia-7rXqMiPA48E' fill alt='CTA card image' className='object-center object-cover' />
            <div className='relative z-20'>
                <div className='font-medium text-lg'>#exploretheworld</div>
                <h3 className="text-4xl font-semibold mt-3">Explore the world with me</h3>
                <p className="mt-2 text-lg max-w-lg">Explore the world with me! I am travelling around the world. I have visited most of the great cities of Brazil and I am currently travelling in Italy. Join me</p>
                <form className='mt-6 flex items-center gap-2 w-full'>
                    <input type='text' className='bg-white/80 w-full md:w-auto text-base rounded-md py-2  px-3  placeholder:text-sm outline-none focus:ring-2 ring-neutral-600' placeholder='Write your email'/>
                    <button className='bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap'>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default CTACard