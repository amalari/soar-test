import React, { FC } from "react"
import { UserSidebar } from "./UserSidebar"
import { Outlet } from "react-router-dom"

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: FC<LayoutProps> = () => {
  return (
    <div className="flex h-screen">
      <UserSidebar />
      
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  ) 
}