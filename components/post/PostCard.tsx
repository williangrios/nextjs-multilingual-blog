import { Post } from '@/types/collection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostContent from './PostContent'

interface PostProps {
    post: Post
    layout?: 'vertical' | 'horizontal'
    reverse?: boolean
}

function PostCard({post, layout = 'horizontal', reverse = false}: PostProps) {
  return (
    <Link href={`/post/${post.slug}`} className={`@container ${layout === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-2 gap-10 items-center' : 'space-y-10'}`}>
        <Image className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${reverse ? 'md:order-last' : ''}`} src={post.image} alt={post.title} width={600} height={300}/>
        <PostContent post={post} />
    </Link>
  )
}

export default PostCard