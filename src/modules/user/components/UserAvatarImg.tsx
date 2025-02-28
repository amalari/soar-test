import { ComponentProps, FC } from "react"
import { cn } from "../../common/utils/cn"

type UserAvatarImgProps = ComponentProps<'img'> & {
  className?: string
}

export const UserAvatarImg: FC<UserAvatarImgProps> = ({
  className = '',
  src = '/user-avatar.png',
  ...props
}) => {
  return (
    <img className={cn("w-16 h-16 rounded-full", className)} src={src} {...props} />
  )
}