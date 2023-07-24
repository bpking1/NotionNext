import BLOG from '@/blog.config'
import Link from 'next/link'
import React from 'react'

const BlogPostCard = ({ post }) => {
    return (
        <div className="w-full py-1">
            <Link
                href={`${BLOG.SUB_PATH}/${post.slug}`}
                passHref
                className={
                    'cursor-pointer text-lg leading-tight dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
                }>
                <text className='border-dotted border-b border-black dark:border-gray-300'>
                    {post.title}
                </text>
                <time className="text-sm text-gray-500 dark:text-gray-300 sm:text-black  py-1 ml-3 sm:float-right">{post.date?.start_date}</time>
            </Link>
        </div>
    )
}

export default BlogPostCard
