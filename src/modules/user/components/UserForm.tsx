import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

import { Input } from "../../common/form/components/Input";
import { cn } from "../../common/utils/cn";
import { userFormSchema, UserFormSchema } from "../validations/userFormValidation";
import { InputAvatar } from "../../common/form/components/InputAvatar";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot"

interface UserFormRef {
  submit: () => void;
}
interface UserFormProps {
  onSubmit?: (data: UserFormSchema & { profilePicture: File | string | undefined }) => void;
  defaultValues?: UserFormSchema;
  className?: string;
}

export const UserForm = forwardRef<UserFormRef, UserFormProps>(({
  onSubmit,
  defaultValues,
  className = ''
}, ref) => {
  const { register, control, handleSubmit: handleFormSubmit, formState: { errors } } = useForm({ 
    resolver: valibotResolver(userFormSchema),
    defaultValues: {
      ...defaultValues,
      password: undefined
    },
  });
  const [profilePicture, setProfilePicture] = useState<File | string>()
  
  const handleSubmit = useCallback((data: UserFormSchema) => {
    onSubmit?.({ ...data, profilePicture })
  }, [onSubmit, profilePicture])
  useImperativeHandle(ref, () => ({
    submit: handleFormSubmit(handleSubmit)
  }), [handleFormSubmit, handleSubmit]);

  return (
    <form className={cn("flex flex-col md:flex-row gap-4 md:gap-14", className)}>
      <div className="flex justify-center">
        <InputAvatar
          value={profilePicture}
          onChangeValue={setProfilePicture}
        />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
        <div>
          <label htmlFor="fullname" className="block text-primary mb-1 md:mb-2">Your Name</label>
          <Input {...register("fullname")} name="fullname" errorMessage={errors.fullname?.message} />
        </div>
        <div>
          <label htmlFor="username" className="block text-primary mb-1 md:mb-2">User Name</label>
          <Input {...register("username")} name="username" errorMessage={errors.username?.message} />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary mb-1 md:mb-2">Email</label>
          <Input {...register("email")} autoComplete="username" name="email" errorMessage={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="password" className="block text-primary mb-1 md:mb-2">Password</label>
          <Input {...register("password")} autoComplete="new-password" type="password" name="password" placeholder="********" errorMessage={errors.password?.message} />
        </div>
        <div>
          <label htmlFor="birthDate" className="block text-primary mb-1 md:mb-2">Date of Birth</label>
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <Input 
                ref={field.ref}
                type="date" 
                name="birthDate" 
                selected={field.value} 
                dateFormat={"d MMMM yyyy"}
                onDateChange={(date: unknown) => field.onChange(date as Date)}
                errorMessage={errors.birthDate?.message}
              />
            )}
          >
          </Controller>
        </div>
        <div>
          <label htmlFor="presentAddress" className="block text-primary mb-1 md:mb-2">Present Address</label>
          <Input {...register("presentAddress")} name="presentAddress" errorMessage={errors.presentAddress?.message} />
        </div>
        <div>
          <label htmlFor="permanentAddress" className="block text-primary mb-1 md:mb-2">Permanent Address</label>
          <Input {...register("permanentAddress")} name="permanentAddress" errorMessage={errors.permanentAddress?.message} />
        </div>
        <div>
          <label htmlFor="city" className="block text-primary mb-1 md:mb-2">City</label>
          <Input {...register("city")} name="city" errorMessage={errors.city?.message} />
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-primary mb-1 md:mb-2">Postal Code</label>
          <Input {...register("postalCode")} name="postalCode" errorMessage={errors.postalCode?.message} />
        </div>
        <div>
          <label htmlFor="country" className="block text-primary mb-1 md:mb-2">Country</label>
          <Input {...register("country")} name="country" errorMessage={errors.country?.message} />
        </div>
      </div>
    </form>
  )
})