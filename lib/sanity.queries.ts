import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "categories": categories[]->{title, slug},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

type Base = {
  _id?: string
  _rev?: string
  _type?: string
  _createdAt?: string
  _updatedAt?: string
}

export interface Author {
  name?: string
  picture?: any
}

export interface Category {
  title?: string
  slug?: string
  description?: any
}

export interface Post extends Base {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
  categories?: Category[]
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
