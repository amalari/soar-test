import { useState } from "react";
import Tabs from "../../common/tabs"
import { UserProfileEdit } from "../../user/components/UserProfileEdit";

export const SettingPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="soar-setting-page mx-10 my-7 p-7 bg-white">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="gap-14">
          <Tabs.Trigger value="profile">Edit Profile</Tabs.Trigger>
          <Tabs.Trigger value="preferences">Preferences</Tabs.Trigger>
          <Tabs.Trigger value="security">Security</Tabs.Trigger>
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