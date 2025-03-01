import { FC, useCallback, useMemo, useRef, useState } from "react";
import { AvatarImg } from "../../avatar/components/AvatarImg"
import { Button } from "../../button/components/Button"
import { IconPencil } from "../../icons"
import { cn } from "../../utils/cn";
import Dialog from "../../dialog";
import Cropper, { Area } from "react-easy-crop";
import { Input } from "./Input";
import { getCroppedImg } from "../../utils/cropImage";

interface InputAvatarProps {
  className?: string;
  value?: File | string
  onChangeValue?: (value: string) => void
}

export const InputAvatar: FC<InputAvatarProps> = ({
  value,
  onChangeValue,
  className = ''
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File>()
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgSrc = useMemo(() => {
    if (!value && !uploadedFile) return "/user-avatar.png"
    if(uploadedFile) return URL.createObjectURL(uploadedFile)
    if(value && typeof value === "string") return value
    return URL.createObjectURL(value as File)
  }, [uploadedFile, value])
  
  const handleEditing = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    fileInputRef.current?.click()
  }, [])
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadedFile(file)
    setIsEditing(true)
  }, [])
  const handleCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])
  const handleClose = useCallback(() => {
    setIsEditing(false)
    setUploadedFile(undefined)
  }, [])
  const handleSave = useCallback(async () => {
    const croppedImage = await getCroppedImg(imgSrc, croppedAreaPixels as Area)
    handleClose()
    onChangeValue?.(croppedImage as string)
  }, [croppedAreaPixels, handleClose, imgSrc, onChangeValue])

  return (
    <div className={cn("soar-input-avatar relative w-20 h-20", className)}>
      <Input 
        type="file" 
        accept="image/*" 
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef} 
      />
      <AvatarImg src={imgSrc} className="w-20 h-20" />
      <Button 
        variant="primary" 
        className="h-7 w-7 rounded-full absolute -right-1 bottom-0 z-10"
        onClick={handleEditing}
      >
        <IconPencil className="!w-3 !h-3" />
      </Button>

      <Dialog open={isEditing} onOpenChange={(open) => {
        if(!open) handleClose()
        setIsEditing(open)
      }}>
        <Dialog.Content>
          <div className="relative bg-background w-full h-[200px] mb-2">
            <Cropper
              aspect={1}
              crop={crop}
              onCropChange={setCrop}
              image={imgSrc}
              zoom={1}
              onCropAreaChange={handleCropComplete}
            />
          </div>
          <Button onClick={handleSave} variant="primary" className="w-full">Save</Button>
        </Dialog.Content>
      </Dialog>
    </div>
  )
}