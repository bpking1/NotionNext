import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'

const BlogPostCard = ({ post }) => {
    return (
        <div className="flex w-full">
            <Link
                href={`${BLOG.SUB_PATH}/${post.slug}`}
                passHref
                className={
                    'cursor-pointer text-lg leading-tight dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
                }>
                <div className='border-dotted border-b border-black'>
                    {post.title}
                </div>
            </Link>
            <div className="text-sm py-1 ml-auto">{post.date?.start_date}</div>
        </div>
    )
}

export default BlogPostCard
