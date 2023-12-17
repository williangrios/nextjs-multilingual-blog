import { getReadingTime, getRelativeDate } from '@/lib/helpers'
import { Post } from '@/types/collection'
import React from 'react'

interface PostContentProps {
    post: Post
    isPostPage?: boolean
}

function PostContent({ post, isPostPage = false }: PostContentProps) {
    return (
        <div className='space-y-2'>
            <div className={`flex items-center flex-wrap text-neutral-400 gap-2 ${isPostPage ? ' text-sm ' : ' text-xs @md:text-sm'}`}>
                <div className={`font-medium ${post.category.title === 'Cities' ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {post.category.title}
                </div>
                <div className="w-2 h-2 rounded-full bg-neutral-200" />
                <div className="">{`${post.author.first_name} ${post.author.last_name}`}</div>
                <div className="w-2 h-2 rounded-full bg-neutral-200" />
                <div className="">{getReadingTime(post.body)}</div>
                <div className="w-2 h-2 rounded-full bg-neutral-200" />
                <div className="">{getRelativeDate(post.date_created)}</div>
            </div>
            <h2 className={` ${isPostPage ? 'text-2xl md:text-3xl lg:text-4xl font-bold' : '@lg:text-3xl text-xl @md:text-2xl font-medium'} `}>{post.title}</h2>
            <p className="text-base @lg:text-lg text-neutral-600 leading-snug">{post.description}</p>
            {!isPostPage && <div className="flex items-center gap-2 pt-3">Read more</div>}
            
        </div>
    )
}

export default PostContent