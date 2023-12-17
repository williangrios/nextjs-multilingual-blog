import { Link } from 'lucide-react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

function SocialLink({ platform, link, isShareURL = false }: { platform: string, link: string, isShareURL: boolean }) {
    function getPlatform(platform: string) {
        switch (platform) {
            case 'facebook':
                return <Facebook size='18' />
            case 'twitter':
                return <Twitter size='18' />
            case 'instagram':
                return <Instagram size='18' />
            case 'youtube':
                return <Youtube size='18' />
        }
    }

    return (
        <Link href={link} >
            <div className={`${isShareURL ? 'py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors' : ''}`}>
                {getPlatform(platform)}
            </div>
        </Link>
    )

}

export default SocialLink