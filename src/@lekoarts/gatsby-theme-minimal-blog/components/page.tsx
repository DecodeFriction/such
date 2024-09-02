/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { animated, useSpring, config } from "react-spring"
import Layout from "./layout"
import Seo from "./seo"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}


const Page = ({ data: { page } }: PageProps) => {

  const contentProps = useSpring({ config: config.slow, delay: 250, from: { opacity: 0 }, to: { opacity: 1 } })

return(
  <Layout>
    <Seo title={page.title} description={page.excerpt} />

    <section sx={{ my: 5, variant: `layout.content` }}>
      <animated.div style={contentProps}>
      <MDXRenderer>{page.body}</MDXRenderer>
      </animated.div>
    </section>
  </Layout>
)
}
export default Page
