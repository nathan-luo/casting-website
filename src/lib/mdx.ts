import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrismPlus from 'rehype-prism-plus'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export type PostMetadata = {
  title: string
  date: string
  summary: string
  author?: string
  tags?: string[]
  slug: string
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
      rehypePlugins: [
        [rehypePrismPlus, { ignoreMissing: true }],
      ],
    },
    scope: data,
  })

  return {
    slug: realSlug,
    metadata: { ...data, slug: realSlug } as PostMetadata,
    mdxSource,
    content,
  }
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => {
      const realSlug = slug.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, slug)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        ...data,
        slug: realSlug,
      } as PostMetadata
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return posts
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  
  return fs.readdirSync(postsDirectory)
    .filter((slug) => slug.endsWith('.mdx'))
    .map((slug) => slug.replace(/\.mdx$/, ''))
}