import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../types'
import PortableText from 'react-portable-text'
import { Children } from 'react';

interface Props {
    post: Post
}

function Post( {post}: Props) {
//   console.log(post);

  return (
      <main> 
        <Header />

        <img 
        className='w-full h-40 object-cover'
        src={urlFor(post.mainImage).url()}>
        </img>

        <article className='max-w-3xl mx-auto p-5'>
            <h1 className='text-3xl mt-8 mb-3'>
                {post.title}</h1>
            <h1 className='text-xl font-light text-gray-500'>
                {post.description}</h1>

            {/* Author */}
            <div className='mt-2 flex items-center'>
                <img className='h-10 w-10 rounded-full'
                    src={
                        urlFor(post.author.image).url() || ''
                    }

                    alt="imagem blog author" />

                <p className=' mx-2 font-extralight text-sm'>
                    Blog post by {""}
                    <span className='text-green-500'>{post.author.name}</span>
                </p>
                    {post._createdAt ? 
                    <p>- Published at {new Date(post._createdAt).toLocaleString} </p> : ''}
            </div>

            <div className='mt-10'>
                <PortableText
                dataset={ process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={post.body}
                serializers={{
                    h1: (props: any) => (
                        <h1 className='text-2xl font-bold my-5'{...props}/>
                    ),
                    h2: (props: any) => (
                        <h1 className='text-xl font-bold my-5' {...props}/>
                    ),
                    li: ({children}: any) => (
                        <li className='ml-4 list-disc'>{children}</li>
                    ),

                    link: ({href, children}: any) => (
                        <a href={href} className="text-blue-50 hover:underline">
                            {children}
                        </a>
                    )
                }}
                />
            </div>

        
        </article>
      </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
          current
        }
    }
    `;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }  ) => {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        createdAt,
        title,
        author-> {
           name,
           image
       },
       'comments': *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true],
        description,
        mainImage,
        slug,
        body
     }`;

     const post = await sanityClient.fetch(query, {
         slug: params?.slug,
     });

     if(!post){
         return {
             notFound: true
         }
     }

     return {
         props: {    
            post,
         }
     }
}