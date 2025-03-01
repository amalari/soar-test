import { ComponentProps, ComponentRef, FC, useCallback, useMemo, useRef } from "react";
import { cn } from "../../common/utils/cn";
import { UserForm } from "./UserForm";
import { Button } from "../../common/button/components/Button";
import { useMe } from "../hooks/useMe";
import { useUpdateUser } from "../hooks/useUpdateUser";

type UserProfileEditProps = {
  className?: string;
}

export const UserProfileEdit: FC<UserProfileEditProps> = ({
  className = ''
}) => {
  const formRef = useRef<ComponentRef<typeof UserForm>>(null)
  const { data: me, isFetched } = useMe()
  const { mutateAsync: updateUser } = useUpdateUser()
  const defaultForm = useMemo(() => {
    if(!me) return undefined 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, birthDate, ...rest } = me
    return {...rest, birthDate: new Date(birthDate)}
  }, [me])

  const handleSubmit: NonNullable<ComponentProps<typeof UserForm>['onSubmit']> = useCallback(async (data) => {
    await updateUser({
      ...data,
      birthDate: data.birthDate.toISOString(),
    })
  }, [updateUser])
    
  return (
    <div className={cn("soar-user-profile-edit", className)}>
      {isFetched && <UserForm ref={formRef} onSubmit={handleSubmit} defaultValues={defaultForm} className="px-2 py-3 md:py-10 md:pl-8" />}
      <Button onClick={() => formRef.current?.submit()} variant="primary" className="flex justify-self-end w-full md:w-auto rounded-xl px-16">Save</Button>
    </div>
  )
}