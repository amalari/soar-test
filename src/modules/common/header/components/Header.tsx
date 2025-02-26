import { FC } from "react"
import { HeaderTitle } from "./HeaderTitle"
import { BREAK_POINTS } from "../../utils/breakPoint"
import { useMediaQuery } from "../../hooks/useMediaQuery"

type HeaderProps = {
  title: string
  rightMenu?: React.ReactNode
  leftMenu?: React.ReactNode
} 

export const Header: FC<HeaderProps> = ({
  title,
  rightMenu,
  leftMenu
}) => {
  const isMobile = useMediaQuery(`(max-width: ${BREAK_POINTS.md})`)

  return (
    <header className="soar-header bg-white h-24 flex items-center px-6 md:px-10 border-b justify-between">
      <div className="soar-header-menu-left">
        {!isMobile && <HeaderTitle title={title} />}
        {leftMenu}
      </div>
      <div className="soar-header-menu-center md:hidden">
        {isMobile && <HeaderTitle title={title} />}
      </div>
      <div className="soar-header-menu-right">
        {rightMenu}
      </div>
    </header>
  )
}