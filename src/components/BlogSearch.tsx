'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PostMetadata } from '@/lib/mdx'

interface BlogSearchProps {
  posts: PostMetadata[]
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return posts
    
    const query = searchQuery.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      post.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }, [posts, searchQuery])

  return (
    <>
      {/* Header section */}
      <div className="border-b border-gray-800 p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Blog
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            Documenting our journey building autonomous AI organizations. 
            From experiments and breakthroughs to failures and learnings.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-gray-700 rounded-lg 
            text-gray-300 placeholder-gray-500 focus:outline-none focus:border-orange-500 
            transition-colors"
        />
        <svg 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
        </div>
      </div>

      {/* Content section with posts list */}
      <div className="p-8 md:p-12">
        <div className="max-w-2xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">
                {searchQuery ? 'No posts found matching your search.' : 'No posts yet. Check back soon!'}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.slug} 
                  className="border-b border-gray-800 last:border-0 pb-8 last:pb-0 group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-400 line-clamp-2">
                      {post.summary}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-medium text-gray-500 rounded-full border border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}