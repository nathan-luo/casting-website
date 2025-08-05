import { Container } from '@/components/ui/Container'
import { getPostBySlug, getPostSlugs } from '@/lib/mdx'
import { MDXContent } from '@/components/MDXContent'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { metadata } = await getPostBySlug(slug)
    return {
      title: `${metadata.title} - Casting`,
      description: metadata.summary,
    }
  } catch {
    return {
      title: 'Post Not Found - Casting',
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post
  
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <>
      <section className="min-h-screen py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>

            {/* Main article card */}
            <article className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Header section */}
              <div className="border-b border-gray-800 p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center">
                  <h1 className="text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    {post.metadata.title}
                  </h1>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <time>
                      {new Date(post.metadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    {post.metadata.author && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span>{post.metadata.author}</span>
                      </>
                    )}
                  </div>

                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-gray-500 rounded-full border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content section */}
              <div className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="prose prose-sm prose-invert max-w-none 
                    prose-headings:font-semibold prose-headings:text-white
                    prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-orange-400 prose-a:no-underline hover:prose-a:text-orange-300
                    prose-strong:text-white prose-strong:font-semibold
                    prose-code:text-orange-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-gray-950 prose-pre:border prose-pre:border-gray-800 prose-pre:shadow-lg
                    prose-blockquote:border-orange-500 prose-blockquote:bg-gray-800/30 prose-blockquote:rounded prose-blockquote:px-4
                    prose-ul:text-gray-300 prose-ol:text-gray-300
                    prose-li:marker:text-gray-600
                    prose-img:rounded-lg prose-img:shadow-xl">
                    <MDXContent source={post.mdxSource} />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Want to join our research?
            </h3>
            <p className="text-gray-400 mb-8">
              We're always looking for passionate engineers to help build the future of autonomous AI.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Read more posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}