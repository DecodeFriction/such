/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import ColorModeToggle from "./colormode-toggle"
import Navigation from "./navigation"



const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5, 1] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>

        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
            a: { color: `secondary`, ":hover": { color: `heading`, textDecoration: `none` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />

      </div>
    </header>
  )
}

export default Header
