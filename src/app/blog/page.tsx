import { Container } from '@/components/ui/Container'
import { BlogSearch } from '@/components/BlogSearch'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="min-h-screen py-20">
        <Container>
          <div className="max-w-3xl mx-auto pt-12">
            {/* Main article card */}
            <article className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
              <BlogSearch posts={posts} />
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}