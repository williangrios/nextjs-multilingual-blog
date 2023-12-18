import React from 'react'
import PaddingContainer from '../layout/PaddingContainer'
import { siteConfig } from '@/config/site'
import SocialLink from '../elements/SocialLink'
import { getDictionary } from '@/lib/getDictionary'

async function Footer({locale}: {locale: string}) {
    const dictionary = await getDictionary(locale)
    return (
        <div className='py-8 border-t mt-10'>
            <PaddingContainer>
                <div className="">
                    <h2 className='text-3xl font-bold'>{siteConfig.siteName}</h2>
                    <p className="max-w-md mt-2 text-neutral-700 text-lg">{dictionary.footer.description}</p>
                </div>
                <div className="mt-6 flex justify-between gap-4 flex-wrap ">
                    <div className="">
                        <div className="font-medium text-lg">
                            #explorertheworld
                        </div>
                        <div className="flex items-center gap-3 text-neutral-600 mt-2">
                            <SocialLink platform='twitter' link={siteConfig.socialLinks.twitter} isShareURL={false}/>
                            <SocialLink platform='youtube' link={siteConfig.socialLinks.youtube} isShareURL={false}/>
                            <SocialLink platform='facebook' link={siteConfig.socialLinks.facebook} isShareURL={false}/>
                            <SocialLink platform='instagram' link={siteConfig.socialLinks.instagram} isShareURL={false}/>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-sm text-neutral-400">{dictionary.footer.currentlyAtText}</div>
                        <div className="bg-white shadow-md rounded-md py-2 px-3 flex items-center gap-2 mt-16">
                            <div className='bg-emerald-400 rounded-full w-1 h-1 ' />
                            {siteConfig.currentlyAt}
                        </div>
                    </div>
                </div>
                <div className="border-t py-3 flex flex-wrap gap-4 items-center justify-between">
                    <div className="text-sm text-neutral-400">
                    {dictionary.footer.rightsText} {new Date().getFullYear()}
                    </div>
                    <div className="text-sm underline underline-offset-4">
                    {dictionary.footer.creatorText} Willian
                    </div>
                </div>
            </PaddingContainer>
        </div>
    )
}

export default Footer