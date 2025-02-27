import { FC } from "react"
import { cn } from "../../utils/cn"

type HeaderTitleProps = {
  title: string
  className?: string
}
export const HeaderTitle: FC<HeaderTitleProps> = ({
  title,
  className = ""
}) => {
  return <h1 className={cn("text-2xl lg:text-3xl font-semibold text-primary", className)}>{title}</h1>
}