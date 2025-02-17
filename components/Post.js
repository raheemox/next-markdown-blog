import Link from 'next/link';
import Image from 'next/image';

export default function Post({ post }) {
  return (
    <div className='card'>
      <Link href={`/blog/${post.slug}`} passHref>
      <img src={post.frontmatter.cover_image} alt='image' />
      </Link>
      <div className='post-date'>Posted on {post.frontmatter.date}</div>

      <h3 className='post-title'>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>

        <a className='btn'>Read More </a>
      </Link>
    </div>
  )
}
