import { FC } from "react";
import { cn } from "../../common/utils/cn";
import { UserForm } from "./UserForm";
import { Button } from "../../common/button/components/Button";

type UserProfileEditProps = {
  className?: string;
}

export const UserProfileEdit: FC<UserProfileEditProps> = ({
  className = ''
}) => {
  return (
    <div className={cn("soar-user-profile-edit", className)}>
      <UserForm className="px-2 py-3 md:py-10 md:pl-8" />
      <Button variant="primary" className="flex justify-self-end w-full md:w-auto rounded-xl px-16">Save</Button>
    </div>
  )
}