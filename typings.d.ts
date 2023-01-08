interface Image {
  _type: 'image'
  asset: Reference
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Block {
  _key: string
  _type: Block
  children: Span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}
