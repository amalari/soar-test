import { FC } from "react"
import { cn } from "../../utils/cn"

type AvatarImgProps = {
  className?: string
  src?: string
}

export const AvatarImg: FC<AvatarImgProps> = ({
  className = '',
  src = "/user-avatar.png"
}) => {
  return (
    <img src={src} alt="User Avatar" className={cn("w-16 h-16 rounded-full", className)} />
  )
}