interface SocialLinks {
    twitter: string;
    instagram: string;
    youtube: string;
    facebook: string;
}

interface SiteConfigInterface {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: SocialLinks;
}

export const siteConfig: SiteConfigInterface = {
    siteName: 'Explorer',
    description: 'Site description',
    currentlyAt: 'Brazil',
    socialLinks: {
        twitter: 'https://www.twitter.com',
        instagram: 'https://www.instagram.com',
        youtube: 'https://www.youtube.com',
        facebook: 'https://www.facebook.com'
    }
}