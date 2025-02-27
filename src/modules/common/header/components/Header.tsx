import { FC } from "react"
import { HeaderTitle } from "./HeaderTitle"
import { BREAK_POINTS } from "../../utils/breakPoint"
import { useMediaQuery } from "../../hooks/useMediaQuery"

type HeaderProps = {
  title: string
  rightMenu?: React.ReactNode[]
  leftMenu?: React.ReactNode[]
  children?: React.ReactNode
} 

export const Header: FC<HeaderProps> = ({
  title,
  rightMenu = [],
  leftMenu = [],
  children
}) => {
  const isMobile = useMediaQuery(`(max-width: calc(${BREAK_POINTS.md} - 1px))`)

  return (
    <header className="soar-header bg-white min-h-24 border-b px-6 py-4 lg:px-10 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="soar-header-menu-left flex gap-4 items-center">
          {!isMobile && (
            <>
              {leftMenu}
              <HeaderTitle title={title} />
            </>
          )}
          {isMobile && leftMenu[0]}
        </div>
        <div className="soar-header-menu-center lg:hidden items-center">
          {isMobile && <HeaderTitle title={title} />}
        </div>
        <div className="soar-header-menu-right flex flex-row-reverse items-center gap-4 lg:gap-7">
          {!isMobile && rightMenu}
          {isMobile && rightMenu[0]}
        </div>
      </div>
      {children}
    </header>
  )
}