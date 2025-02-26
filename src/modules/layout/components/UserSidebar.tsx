import Sidebar from "../../common/sidebar"
import { IconCreditCard, IconHome, IconInvestment, IconLoan, IconLogo, IconPrivilege, IconService, IconSetting, IconTransaction, IconUser } from "../../common/icons"
import { Link, useMatch } from 'react-router-dom';
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import clsx from "clsx";

interface MenuItem {
  icon: React.ReactNode
  label: string
  link?: string
}

const menuItems: MenuItem[] = [
  {
    icon: <IconHome className="w-5 h-5" />,
    label: 'Dashboard',
    link: '/dashboard'
  },
  {
    icon: <IconTransaction className="w-5 h-5" />,
    label: 'Transactions'
  },
  {
    icon: <IconUser className="w-5 h-5" />,
    label: 'Accounts'
  },
  {
    icon: <IconInvestment className="w-5 h-5" />,
    label: 'Investments'
  },
  {
    icon: <IconCreditCard className="w-5 h-5" />,
    label: 'Credit Cards'
  },
  {
    icon: <IconLoan className="w-5 h-5" />,
    label: 'Loans'
  },
  {
    icon: <IconService className="w-5 h-5" />,
    label: 'Services'
  },
  {
    icon: <IconPrivilege className="w-5 h-5" />,
    label: 'My Privileges'
  },
  {
    icon: <IconSetting className="w-5 h-5" />,
    label: 'Setting',
    link: '/setting'
  },
]

const UserSidebarMenuItem: React.FC<MenuItem> = ({ icon, label, link }) => {
  const match = useMatch(link ?? label)

  return (
    <Sidebar.MenuItem 
      active={!!match}
      prefix={icon}
      component={link ? <Link to={link} /> : undefined}
    >{label}</Sidebar.MenuItem>
  )
}
interface UserSidebarRef {
  show: () => void
  close: () => void
}
export const UserSidebar = forwardRef<UserSidebarRef, unknown>((_, ref) => {
  const [hidden, setHidden] = useState(false)
  const [broken, setBroken] = useState(false)

  const handleBreakPoint = useCallback((val: boolean) => {
    if(!broken && val) setHidden(true)
    if(!val) setHidden(false)
    setBroken(val)
  }, [broken])
  const handleBackdropClick = useCallback(() => setHidden(true), [])

  useImperativeHandle(ref, () => ({
    show: () => setHidden(false),
    close: () => setHidden(true)
  }), [])

  return (
    <Sidebar 
      className={clsx(
        "user-sidebar",
        hidden && "hidden"
      )} 
      toggled
      breakPoint="xs"
      onBackdropClick={handleBackdropClick}
      onBreakPoint={handleBreakPoint}
    >
      <div className="flex px-9 gap-4 h-24 items-center">
        <IconLogo className="h-7" />
        <h4 className="font-bold text-2xl text-blue-[#343C6A]">Soar Task</h4>
      </div>
      <Sidebar.Menu>
        {menuItems.map(({ ...props }, i) => (
          <UserSidebarMenuItem key={i} {...props} />
        ))}
      </Sidebar.Menu>
    </Sidebar>
  )
})