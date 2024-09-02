/** @jsx jsx */
import * as React from "react"
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { animated, useSpring, config } from "react-spring"
import Layout from "./layout"
import ItemTags from "./item-tags"
import Seo from "./seo"
import PostFooter from "./post-footer"

type PostProps = {
  data: {
    post: {
      slug: string
      title: string
      date: string
      tags?: {
        name: string
        slug: string
      }[]
      description?: string
      canonicalUrl?: string
      body: string
      excerpt: string
      timeToRead?: number
      banner?: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
  }
}

const px = [`32px`, `16px`, `8px`, `4px`]
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Post = ({ data: { post } }: PostProps) => {

  const contentProps = useSpring({ config: config.slow, delay: 200, from: { opacity: 0 }, to: { opacity: 1 } })

return(
  <Layout>
    <Seo
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner?.childImageSharp?.resize?.src : undefined}
      pathname={post.slug}
      canonicalUrl={post.canonicalUrl}
    />
    <animated.div style={contentProps}>
    <p sx={{ textAlign: 'center', mt: 5, fontSize: [1, 1, 3], }}>{post.title}</p>
    <p sx={{ color: `secondary`, mt: 3, a: { color: `secondary` }, fontSize: [1, 1, 2] , textAlign: 'center' }}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {post.timeToRead && ` — `}
      {post.timeToRead && <span>{post.timeToRead} min read</span>}
    </p>
    <section
      sx={{
        my: 5,
        ".gatsby-resp-image-wrapper": { my: [4, 4, 5], boxShadow: shadow.join(`, `) },
        variant: `layout.content`,
      }}
    >
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
    </animated.div>

    <PostFooter post={post} />
  </Layout>
)
}
export default Post
