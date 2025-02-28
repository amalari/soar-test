import { useState } from "react";
import Tabs from "../../common/tabs"
import { UserProfileEdit } from "../../user/components/UserProfileEdit";

export const SettingPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="soar-setting-page m-3 md:mx-10 md:my-7 p-4 md:p-7 bg-white">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="gap-7 md:gap-14">
          <Tabs.Trigger value="profile" className="text-sm md:text-base">Edit Profile</Tabs.Trigger>
          <Tabs.Trigger value="preferences" className="text-sm md:text-base">Preferences</Tabs.Trigger>
          <Tabs.Trigger value="security" className="text-sm md:text-base">Security</Tabs.Trigger>
        </Tabs.List>
        <hr className="-mt-1" />
        <Tabs.Content value="profile">
          <UserProfileEdit />
        </Tabs.Content>
        <Tabs.Content value="preferences">
          <h3>Preferences</h3>
        </Tabs.Content>
        <Tabs.Content value="security">
          <h3>Security</h3>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}