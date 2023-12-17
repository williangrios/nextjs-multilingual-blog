import { DUMMY_POSTS } from '@/DUMMY_DATA'
import CTACard from '@/components/elements/CTACard'
import SocialLink from '@/components/elements/SocialLink'
import PaddingContainer from '@/components/layout/PaddingContainer'
import PostBody from '@/components/post/PostBody'
import PostHero from '@/components/post/PostHero'
import directus from '@/lib/directus'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateStaticParams = async () => {
   
    // try {
    //     const posts = await directus.items('posts').readByQuery({
    //         filter: {
    //             status: {
    //                 _eq: 'published'
    //             }
    //         },
    //         fields: ['slug']
    //     })

    //     const params = posts?.data?.map((post: { slug: string }) => {
    //         return {
    //             slug: post.slug as string
    //         }
    //     })

    //     return params || []
        
    // } catch (error) {
    //     throw new Error("Ooooops....")
    // }
   
    return DUMMY_POSTS.map(post => {
        return {
            slug: post.slug
        }
    })
}

export default async function Page({ params }: {
    params: {
        slug: string
    }
}) {

    // const getPostData = async () => {
    //     try {
    //         const post = await directus.items('post').readByQuery({
    //             filter: {
    //                 slug: {
    //                     _eq: params.slug
    //                 }
    //             },
    //             fields: [ 
    //                 '*',
    //                 'category.id',
    //                 'category.title',
    //                 'author.id',
    //                 'author.first_name',
    //                 'author.lat_name',
    //              ]
    //         })
    //         return post?.data?.[0]
    //     } catch (error) {
    //         throw new  Error('ooops....')
    //     }
    // }

    // const post = await getPostData()

    const post = DUMMY_POSTS.find(post => post.slug.toLocaleLowerCase() === params.slug.toLocaleLowerCase())
    if (!post) {
        notFound()
    }
    return (
        <PaddingContainer>
            <div className="space-y-10">
                <PostHero post={post} />
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="relative">
                        <div className="sticky items-center top-20 flex md:flex-col gap-5">
                            <div className="font-medium md:hidden">Share this content</div>
                            <SocialLink platform='facebook' link={`https://www.facebook.com/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL + `/post/${post.slug}`}`} isShareURL />
                            <SocialLink platform='twitter' link={`https://www.twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL + `/post/${post.slug}`}`} isShareURL />
                            {/* <SocialLink platform='whatsapp' link={`https://api.whatsapp.com/send?text=Sua+mensagem+aqui&url=${'http://localhost:3000' + `/post/${post.slug}`}`} isShareURL/> */}
                        </div>
                    </div>
                    <PostBody body={post.body} />
                </div>
                <CTACard />
            </div>
        </PaddingContainer>
    )
}
