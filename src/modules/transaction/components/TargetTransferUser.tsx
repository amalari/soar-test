import { ComponentProps, FC, useEffect, useState } from "react";
import { Button } from "../../common/button/components/Button";
import { IconChevronRight } from "../../common/icons";
import { cn } from "../../common/utils/cn";
import { useUsers } from "../../user/hooks/useUsers";
import { useMe } from "../../user/hooks/useMe";

type TargetUserProps = ComponentProps<"div"> & {
  value?: number
  onChangeValue?: (value: number) => void
}
type TargetTransferUserItem = {
  id: number, 
  fullname: string, 
  position?: string, 
  profilePicture?: string
}
export const TargetTransferUser: FC<TargetUserProps> = ({
  value,
  onChangeValue,
  className = ''
}) => {
  const { data: me } = useMe()
  const { data: users, isFetched } = useUsers()
  const [targetUsers, setTargetUsers] = useState<TargetTransferUserItem[]>([])
  useEffect(() => {
    if(!isFetched) return
    const newUsers = users!.filter(({ id }) => id !== me!.id).map(
      ({ id, fullname, position, profilePicture }) => ({ id, fullname, position, profilePicture })
    )
    setTargetUsers(newUsers)
  }, [isFetched, me, users])
  
  const scrollRight = () => {
    const newUsers = [...targetUsers!]
    const item = newUsers.splice(0, 1)[0];
    newUsers.push(item)
    setTargetUsers(newUsers)
  };

  return (
    <div className={cn(
      "flex w-full justify-between",
      className
    )}>
      <div className="flex gap-7">
        {targetUsers.map(({ fullname, profilePicture, position, id }, index) => {
          if(index >= 3){
            return null
          }
          return (
            <div onClick={() => onChangeValue?.(id)} key={index} role="button" className={cn(
              "w-[100px] flex flex-col items-center cursor-pointer hover:font-semibold",
              value && value >= id && "font-semibold"
            )}>
              <img src={profilePicture} alt="profile image" className="w-16 h-16 rounded-full mb-2" />
              <p className="text-sm">{fullname}</p>
              <p className="text-xs text-primary-light">{position}</p>
            </div>
          )
        })}
      </div>
      {targetUsers.length > 3 && (
        <div className="flex items-center">
          <Button
            onClick={scrollRight}
            style={{ width: 40, height: 40 }}
            className="bg-white p-0 rounded-full shadow-md"
          >
            <IconChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}