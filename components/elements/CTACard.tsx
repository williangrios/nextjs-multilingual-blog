// import directus from '@/lib/directus'
import Image from 'next/image'
import React from 'react'
// import { revalidateTag } from 'next/cache'

function CTACard() {

    // const formAction = async (formData: FormData) => {
    //     'use server'
    //     try {
    //         const email = formData.get('email')
    //         await directus.items('subscribers').createOne({
    //             email,
    //         })
    //         revalidateTag('subscribers-count')
    //     } catch (error) {
    //         throw new Error('Oooops...')
    //     }
    // }

    // const subscribersCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}` ,
    //   {
    //     next: {
    //         tags: ['subscribers-count']
    //     }
    //   }
    // )
    //     .then((res) => res.json())
    //     .then((res) => res.meta.total_count)
    //     .catch((error) => {throw new Error('Oooops..')})


    return (
        <div className='rounded-md bg-slate-100 py-10 px-6 relative overflow-hidden'>
            <div className='absolute inset-0 top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 z-10' />
            <Image src='https://unsplash.com/pt-br/fotografias/um-grupo-de-palmeiras-em-uma-praia-7rXqMiPA48E' fill alt='CTA card image' className='object-center object-cover' />
            <div className='relative z-20'>
                <div className='font-medium text-lg'>#exploretheworld</div>
                <h3 className="text-4xl font-semibold mt-3">Explore the world with me</h3>
                <p className="mt-2 text-lg max-w-lg">Explore the world with me! I am travelling around the world. I have visited most of the great cities of Brazil and I am currently travelling in Italy. Join me</p>
                <form className='mt-6 flex items-center gap-2 w-full'>
                    <input name='email' type='text' className='bg-white/80 w-full md:w-auto text-base rounded-md py-2  px-3  placeholder:text-sm outline-none focus:ring-2 ring-neutral-600' placeholder='Write your email'/>
                    <button className='bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap'>Sign up</button>
                </form>
                {/* <form className='mt-6 flex items-center gap-2 w-full' key={subscribersCount + 'subscribers-form'}>
                    <input name='email' type='text' className='bg-white/80 w-full md:w-auto text-base rounded-md py-2  px-3  placeholder:text-sm outline-none focus:ring-2 ring-neutral-600' placeholder='Write your email'/>
                    <button className='bg-neutral-900 rounded-md py-2 px-3 text-neutral-200 whitespace-nowrap'>Sign up</button>
                </form>
                <div className='mt-5 text-neutral-700'>
                    Join our <span className='bg-neutral-700 rounded-md text-neutral-100 px-2 py-1 text-sm'>{subscribersCount}</span> subscribers now!
                </div> */}

            </div>
        </div>
    )
}

export default CTACard