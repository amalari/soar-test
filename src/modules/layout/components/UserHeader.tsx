import { FC } from "react"
import { Button } from "../../common/button/components/Button"
import { Input } from "../../common/form/components/Input"
import { Header } from "../../common/header/components/Header"
import { IconMenu, IconNotificationActive, IconSearch, IconSettingOutline } from "../../common/icons"
import { UserAvatarImg } from "../../user/components/UserAvatarImg"
import { useMediaQuery } from "../../common/hooks/useMediaQuery"
import { BREAK_POINTS } from "../../common/utils/breakPoint"
import { useLocation } from "react-router-dom"

type UserHeaderProps = {
  onSidebarShow: () => void
}

const linkToTitleMap: Record<string, string> = {
  '/dashboard': 'Overview',
  '/setting': 'Setting'
}

export const UserHeader: FC<UserHeaderProps> = ({
  onSidebarShow
}) => {
  const location = useLocation();
  const isMobile = useMediaQuery(`(max-width: calc(${BREAK_POINTS.md} - 1px))`)

  return (
    <Header title={linkToTitleMap[location.pathname] || "Dashboard"}
      leftMenu={[
        (
          <Button 
            className="lg:hidden bg-transparent"
            onClick={onSidebarShow}
          >
            <IconMenu />
          </Button>
        )
      ]}
      rightMenu={[
        <UserAvatarImg key="avatar" />, 
        (
          <Button key="notification" className="h-12 w-12 rounded-full">
            <IconNotificationActive className="!h-6 !w-6 text-[#396AFF]" />
          </Button>
        ),
        (
          <Button key="setting" className="h-12 w-12 rounded-full">
            <IconSettingOutline className="!h-6 !w-6" />
          </Button>
        ),
        !isMobile && (
          <Input
            key="search"
            placeholder="Search for something"
            className="bg-background rounded-full border-0"
            icon={<IconSearch className="text-foreground" />}
          />
        ),
      ]}
    >
      {isMobile && (
        <Input
          placeholder="Search for something"
          className="bg-background rounded-full border-0"
          icon={<IconSearch className="text-foreground" />}
        />
      )}
    </Header>
  )
}