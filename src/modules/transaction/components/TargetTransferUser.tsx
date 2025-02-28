import { ComponentProps, FC, useState } from "react";
import { Button } from "../../common/button/components/Button";
import { IconChevronRight } from "../../common/icons";
import { cn } from "../../common/utils/cn";

type TargetUserProps = ComponentProps<"div"> & {
  value?: number
  onChangeValue?: (value: number) => void
}

export const TargetTransferUser: FC<TargetUserProps> = ({
  value,
  onChangeValue,
  className = ''
}) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Livia Bator", role: "CEO", image: "/target-user-1.jpg" },
    { id: 2, name: "Randy Press", role: "Director", image: "/target-user-2.jpg" },
    { id: 3, name: "Workman", role: "Designer", image: "/target-user-3.jpg" },
    { id: 4, name: "Workman", role: "Designer", image: "/target-user-3.jpg" },
  ])
  
  const scrollRight = () => {
    const newUsers = [...users]
    const item = newUsers.splice(0, 1)[0]; // Hapus elemen dari posisi awal
    newUsers.push(item)
    setUsers(newUsers)
  };

  return (
    <div className={cn(
      "flex w-full justify-between",
      className
    )}>
      <div className="flex gap-7">
        {users.map((user, index) => {
          if(index >= 3){
            return null
          }
          return (
            <div onClick={() => onChangeValue?.(user.id)} key={index} role="button" className={cn(
              "w-[100px] flex flex-col items-center cursor-pointer hover:font-semibold",
              value && value >= user.id && "font-semibold"
            )}>
              <img src={user.image} alt={user.name} className="w-16 h-16 rounded-full mb-2" />
              <p className="text-sm">{user.name}</p>
              <p className="text-xs text-primary-light">{user.role}</p>
            </div>
          )
        })}
      </div>
      {users.length > 3 && (
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