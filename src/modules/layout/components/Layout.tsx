import React, { ComponentRef, FC } from "react"
import { UserSidebar } from "./UserSidebar"
import { Outlet } from "react-router-dom"
import { Header } from "../../common/header/components/Header"
import { UserAvatarImg } from "../../user/components/UserAvatarImg"
import { Button } from "../../common/button/components/Button"
import { IconMenu } from "../../common/icons"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: FC<LayoutProps> = () => {
  const userSidebarRef = React.useRef<ComponentRef<typeof UserSidebar>>(null)

  return (
    <div className="flex h-screen">
      <UserSidebar
        ref={userSidebarRef}
      />
      
      <div className="flex-1 flex flex-col">
        <Header title="Overview"
          leftMenu={(
            <>
              <Button 
                className="min-md:hidden bg-transparent"
                onClick={() => userSidebarRef.current?.show()}
              >
                <IconMenu />
              </Button>
            </>
          )}
          rightMenu={(
            <>
              <UserAvatarImg />
            </>
          )}
        />
        <Outlet />
      </div>
    </div>
  ) 
}