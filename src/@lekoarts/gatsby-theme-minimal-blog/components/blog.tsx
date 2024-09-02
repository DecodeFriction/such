/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import { animated, useSpring, config } from "react-spring"
import replaceSlashes from "../utils/replaceSlashes"
import Seo from "./seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  const contentProps = useSpring({ config: config.slow, delay: 250, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <Seo title="Blog" />
      <animated.div style={contentProps}>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
      </animated.div>
    </Layout>
  )
}

export default Blog
