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
      <UserForm className="py-10 pl-8" />
      <Button variant="primary" className="flex justify-self-end rounded-xl px-16">Save</Button>
    </div>
  )
}