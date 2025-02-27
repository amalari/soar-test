import { FC } from "react"
import { cn } from "../../common/utils/cn"

type UserAvatarImgProps = {
  className?: string
}

export const UserAvatarImg: FC<UserAvatarImgProps> = ({
  className = ''
}) => {
  return (
    <img src="/user-avatar.png" alt="User Avatar" className={cn("w-16 h-16 rounded-full", className)} />
  )
}