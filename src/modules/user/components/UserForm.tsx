import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { DeepNullable } from "../../../type";
import { userData } from "../__mock__/userData";
import { Input } from "../../common/form/components/Input";
import { cn } from "../../common/utils/cn";
import { UserFormSchema } from "../validations/userFormValidation";
import { InputAvatar } from "../../common/form/components/InputAvatar";

interface UserFormRef {
  submit: () => void;
}
interface UserFormProps {
  defaultValues?: DeepNullable<UserFormSchema>;
  className?: string;
}

export const UserForm = forwardRef<UserFormRef, UserFormProps>(({
  defaultValues,
  className = ''
}, ref) => {
  const [formData, setFormData] = useState<UserFormSchema>(userData);
  const [profilePicture, setProfilePicture] = useState<File | string>()
    
  useImperativeHandle(ref, () => ({
    submit: () => {
      return formData;
    }
  }), [formData]);
  useEffect(() => {
    const newFormData = { ...userData };
    (Object.keys(userData) as (keyof typeof userData)[]).forEach(key => {
      if (defaultValues && key in defaultValues) {
        Object.assign(newFormData, { [key]: defaultValues[key] ?? userData[key] });
      }
    });
    setFormData(newFormData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Input value={formData.fullname} onChangeValue={(fullname) => setFormData({ ...formData, fullname })} name="fullname" />
        </div>
        <div>
          <label htmlFor="username" className="block text-primary mb-1 md:mb-2">User Name</label>
          <Input value={formData.username} onChangeValue={(username) => setFormData({ ...formData, username })} name="username" />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary mb-1 md:mb-2">Email</label>
          <Input value={formData.email} name="email" onChangeValue={(email) => setFormData({ ...formData, email })} />
        </div>
        <div>
          <label htmlFor="password" className="block text-primary mb-1 md:mb-2">Password</label>
          <Input value={formData.password} type="password" name="password" onChangeValue={(password) => setFormData({ ...formData, password })} />
        </div>
        <div>
          <label htmlFor="birthDate" className="block text-primary mb-1 md:mb-2">Date of Birth</label>
          <Input 
            type="date" 
            name="birthDate" 
            selected={formData.birthDate} 
            dateFormat={"d MMMM yyyy"}
            onDateChange={(date: any) => setFormData({ ...formData, birthDate: date })}
          />
        </div>
        <div>
          <label htmlFor="presentAddress" className="block text-primary mb-1 md:mb-2">Present Address</label>
          <Input value={formData.presentAddress} name="presentAddress" onChangeValue={(presentAddress) => setFormData({ ...formData, presentAddress })}/>
        </div>
        <div>
          <label htmlFor="permanentAddress" className="block text-primary mb-1 md:mb-2">Permanent Address</label>
          <Input value={formData.permanentAddress} name="permanentAddress" onChangeValue={(permanentAddress) => setFormData({ ...formData, permanentAddress })}/>
        </div>
        <div>
          <label htmlFor="city" className="block text-primary mb-1 md:mb-2">City</label>
          <Input value={formData.city} name="city" onChangeValue={(city) => setFormData({ ...formData, city })}/>
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-primary mb-1 md:mb-2">Postal Code</label>
          <Input value={formData.postalCode} name="postalCode" onChangeValue={(postalCode) => setFormData({ ...formData, postalCode })}/>
        </div>
        <div>
          <label htmlFor="country" className="block text-primary mb-1 md:mb-2">Country</label>
          <Input value={formData.country} name="country" onChangeValue={(country) => setFormData({ ...formData, country })}/>
        </div>
      </div>
    </form>
  )
})