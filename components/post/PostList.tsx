import { Post } from '@/types/collection'
import React from 'react'
import PostCard from './PostCard'

interface PostListProps {
    posts: Post[]
    layout?: 'vertical' | 'horizontal'
}

function PostList({posts, layout = 'vertical'} : PostListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr'>
        {posts.map((post) => <PostCard layout={layout} key={post.id} post={post} />)}
    </div>
  )
}

export default PostList