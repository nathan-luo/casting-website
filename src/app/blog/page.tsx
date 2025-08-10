'use client'

import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import Link from 'next/link'
import { useState } from 'react'

// Categories for filtering
const categories = [
  "All",
  "AI Research",
  "Technical",
  "Ethics",
  "Engineering",
  "Tutorials",
  "Opinion"
]

// Sample blog posts data - organized like a library catalog
const blogPosts = [
  {
    id: 1,
    title: "Building Autonomous AI Agents",
    excerpt: "Exploring the architecture behind self-directed AI systems that can pursue complex goals independently.",
    author: "Sarah Chen",
    date: "Nov 15, 2024",
    readTime: "5 min",
    category: "AI Research",
    featured: true
  },
  {
    id: 2,
    title: "Memory Architectures for LLMs",
    excerpt: "How we implemented persistent memory systems that allow AI agents to learn and adapt over time.",
    author: "Alex Kumar",
    date: "Nov 10, 2024",
    readTime: "8 min",
    category: "Technical"
  },
  {
    id: 3,
    title: "Ethics in Autonomous Systems",
    excerpt: "A philosophical exploration of responsibility and accountability in self-governing AI organizations.",
    author: "Maria Rodriguez",
    date: "Nov 5, 2024",
    readTime: "6 min",
    category: "Ethics"
  },
  {
    id: 4,
    title: "Multi-Agent Coordination",
    excerpt: "Lessons learned from orchestrating dozens of specialized AI agents working toward common objectives.",
    author: "James Park",
    date: "Oct 28, 2024",
    readTime: "7 min",
    category: "Engineering"
  },
  {
    id: 5,
    title: "Getting Started with LangChain",
    excerpt: "A beginner's guide to building your first AI application with LangChain and Python.",
    author: "Emma Watson",
    date: "Oct 20, 2024",
    readTime: "10 min",
    category: "Tutorials"
  },
  {
    id: 6,
    title: "The Future of AI Education",
    excerpt: "Why students should be at the forefront of AI research and development.",
    author: "David Lee",
    date: "Oct 15, 2024",
    readTime: "4 min",
    category: "Opinion"
  },
  {
    id: 7,
    title: "Vector Databases Explained",
    excerpt: "Understanding how vector databases power modern AI applications.",
    author: "Sarah Chen",
    date: "Oct 10, 2024",
    readTime: "12 min",
    category: "Technical"
  },
  {
    id: 8,
    title: "AI Safety Fundamentals",
    excerpt: "Core concepts every AI developer should understand about safety and alignment.",
    author: "Maria Rodriguez",
    date: "Oct 5, 2024",
    readTime: "8 min",
    category: "Ethics"
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("date") // date, title, readTime
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts by category and search
  let filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)
  
  // Apply search filter
  if (searchQuery) {
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title)
    } else if (sortBy === "readTime") {
      return parseInt(a.readTime) - parseInt(b.readTime)
    }
    return 0
  })

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50">
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="transition-transform hover:scale-105">
              <Logo size="sm" />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/blog" className="text-orange-400 font-medium">
                Articles
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 min-h-screen">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Page Header - Library Style */}
            <div className="mb-12 border-b border-gray-800 pb-8">
              <h1 className="text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Article Library
                </span>
              </h1>
              <p className="text-gray-400">
                Browse our collection of {blogPosts.length} articles on AI and technology
              </p>
            </div>

            {/* Featured Article */}
            {featuredPost && (
              <div className="mb-12 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-orange-400 uppercase">Featured</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{featuredPost.category}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">{featuredPost.title}</h2>
                <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            )}

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl">
                <input
                  type="text"
                  placeholder="Search articles by title, content, or author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-gray-800/70 transition-all"
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Library Controls */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-6 justify-between">
                {/* Category Filter */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Browse by Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-orange-400/10 text-orange-400 border border-orange-400/30'
                            : 'bg-gray-900/30 text-gray-400 border border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        {category}
                        {category === "All" && (
                          <span className="ml-2 text-xs opacity-60">({blogPosts.length})</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Sort by</label>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none hover:bg-gray-800/70 cursor-pointer transition-all"
                  >
                    <option value="date" className="bg-gray-900">Latest First</option>
                    <option value="title" className="bg-gray-900">Title A-Z</option>
                    <option value="readTime" className="bg-gray-900">Read Time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Articles Grid - Library Catalog Style */}
            <div className="grid grid-cols-1 gap-4">
              {sortedPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group flex flex-col sm:flex-row gap-4 p-4 bg-gray-900/20 border border-gray-800/50 rounded-lg hover:bg-gray-900/40 hover:border-gray-700/50 transition-all"
                >
                  {/* Date Column */}
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="text-sm text-gray-500">{post.date}</div>
                    <div className="text-xs text-gray-600 mt-1">{post.readTime} read</div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full border border-orange-400/30">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">by {post.author}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      {/* Read Arrow */}
                      <div className="flex-shrink-0">
                        <span className="text-gray-600 group-hover:text-orange-400 transition-colors">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Results Summary */}
            <div className="mt-8 text-center text-sm text-gray-500">
              Showing {sortedPosts.length} of {blogPosts.length} articles
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}