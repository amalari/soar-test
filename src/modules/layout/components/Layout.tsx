import React, { ComponentRef, FC } from "react"
import { UserSidebar } from "./UserSidebar"
import { Outlet } from "react-router-dom"
import { UserHeader } from "./UserHeader"

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
        <UserHeader onSidebarShow={() => userSidebarRef.current?.show()} />
        <Outlet />
      </div>
    </div>
  ) 
}