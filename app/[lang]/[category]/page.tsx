import React from 'react'
import { DUMMY_CATEGORIES, DUMMY_POSTS } from '@/DUMMY_DATA'
import PaddingContainer from '@/components/layout/PaddingContainer'
import PostList from '@/components/post/PostList'
// import directus from '@/lib/directus'
// import { notFound } from 'next/navigation'
// import { Post } from '@/types/collection'

export const generateStaticParams = async () => {
    
    // try {
    //     const categories = await directus.items('category').readByQuery({
    //         filter: {
    //             status: {
    //                 _eq: 'published'
    //             }
    //         },
    //         fields: ['slug']
    //     })

    //     const params = categories?.data?.map((category: { slug: string }) => {
    //         return {
    //             category: category.slug as string
    //         }
    //     })
    //     return params || []
    // } catch (error) {
    //     throw new Error('Ooooops....')
    // }
    
    return DUMMY_CATEGORIES.map(category => {
        return {
            category: category.slug
        }
    })
}

async function Page({ params }: {
    params: {
        category: string
        lang: string 
    }
}) {

    // const getCategoryData = async () => {
    //     try {
    //         const category = await directus.items('categoyr').readByQuery({
    //             filter: {
    //                 slug: {
    //                     _eq: params.category
    //                 },
    //             },
    //             fields: [
    //                 '*', 
    //                 'posts.*',
    //                 'posts.author.id',
    //                 'posts.author.first_name',
    //                 'posts.author.last_name',
    //                 'posts.category.id',
    //                 'posts.category.title'
    //             ]
    //         })
    //         return category?.data?.[0]
    //     } catch (error) {
    //         throw new Error ('Ooooops....')
            
    //     }
    // }

    // const categoryData = await getCategoryData()

    // if (!categoryData){
    //     notFound()
    // }

    // const category = categoryData as unknown as {
    //     id: string,
    //     title: string,
    //     description: string,
    //     slug: string,
    //     posts: Post[]
    // }
    const locale = params.lang
    const posts = DUMMY_POSTS.filter(dummyPost => dummyPost.category.title.toLocaleLowerCase() === params.category.toLocaleLowerCase())
    const category = DUMMY_CATEGORIES.find( category => category.slug === params.category)
    return (
        <PaddingContainer>
            <div className="mb-6">
                <h1 className='text-4xl font-semibold'>{category?.title}</h1>
                <p className="text=lg text-neutral-600">{category?.description}</p>
            </div>
            <PostList posts = {posts} locale={locale}/>
        </PaddingContainer>
    )
}

export default Page