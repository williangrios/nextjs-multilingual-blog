import { DUMMY_POSTS } from '@/DUMMY_DATA'
import CTACard from '@/components/elements/CTACard'
import PaddingContainer from '@/components/layout/PaddingContainer'
import PostCard from '@/components/post/PostCard'
import PostList from '@/components/post/PostList'
// import directus from '@/lib/directus'
// import { notFound } from 'next/navigation'

export interface LangParams {
  params: {
    lang: string
  }
}

export default async function Home({params} : LangParams) {

  // const getAllPosts = async () => {
  //   try {
  //     const posts = await directus.items('posts').readByQuery({
  //       fields: [
  //         '*',
  //         'author.id',
  //         'author.first_name',
  //         'author.last_name',
  //         'category.id',
  //         'category.title',
  //       ]
  //     })
  //     return posts.data
  //   } catch (error) {
  //     throw new Error('Ooooops..')
  //   }
  // }

  // const posts = await getAllPosts()

  // if (!posts){
  //   notFound()
  // }

  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        
        <PostCard post={DUMMY_POSTS[0]} locale={params.lang}/>
        <PostList posts={DUMMY_POSTS.filter((post, index) => index > 1 && index < 4 )} layout='vertical' locale={params.lang}/>
        <PostCard post={DUMMY_POSTS[3]} reverse locale={params.lang}/>
        <PostList posts={DUMMY_POSTS.filter((post, index) => index > 3 && index < 10 )} layout='vertical' locale={params.lang}/>
        <CTACard locale={params.lang}/>
      </main>
    </PaddingContainer>
  )
}
