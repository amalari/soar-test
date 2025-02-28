import { FC, useMemo } from "react";
import { cn } from "../../common/utils/cn";
import { UserForm } from "./UserForm";
import { Button } from "../../common/button/components/Button";
import { useMe } from "../hooks/useMe";

type UserProfileEditProps = {
  className?: string;
}

export const UserProfileEdit: FC<UserProfileEditProps> = ({
  className = ''
}) => {
  const { data: me } = useMe()
  const defaultForm = useMemo(() => {
    if(!me) return undefined 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, birthDate, ...rest } = me
    return {...rest, birthDate: new Date(birthDate)}
  }, [me])
    
  return (
    <div className={cn("soar-user-profile-edit", className)}>
      <UserForm defaultValues={defaultForm} className="px-2 py-3 md:py-10 md:pl-8" />
      <Button variant="primary" className="flex justify-self-end w-full md:w-auto rounded-xl px-16">Save</Button>
    </div>
  )
}