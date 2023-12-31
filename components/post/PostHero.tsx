import { Post } from '@/types/collection'
import React from 'react'
import PostContent from './PostContent'
import Image from 'next/image'

interface PostHeroProps {
    post: Post
    locale: string
}

function PostHero({ post, locale}: PostHeroProps) {
  return (
    <div>
        <PostContent post={post} isPostPage locale={locale}/>
        <Image src={post.image} width={1280} height={500} alt={post.title} className='rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6'/>
    </div>
  )
}

export default PostHero