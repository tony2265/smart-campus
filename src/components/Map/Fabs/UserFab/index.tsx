import React from "react";
import { Avatar, Dropdown, DropdownTrigger } from "@nextui-org/react";

import { useGetUserQuery } from "../../../../api/user";
import SwitchLanguage from "../../../modal/SwitchLanguage";
import SwitchResource from "../../../modal/SwitchResource";
import SwitchTheme from "../../../modal/SwitchTheme";

import UserFabMenu from "./UserFabMenu";
import Login from "../../../modal/Login";

const Trigger: React.FC = () => {
  const { data: user } = useGetUserQuery();

  return (
    <DropdownTrigger>
      <Avatar
        isBordered
        className="absolute top-6 right-4"
        src={user?.auth.photoURL || ""}
        name={user?.auth.displayName || ""}
      />
    </DropdownTrigger>
  );
};

const UserFab: React.FC = () => {
  return (
    <>
      <Dropdown>
        <Trigger />
        <UserFabMenu />
      </Dropdown>
      <Login />
      <SwitchLanguage />
      <SwitchResource />
      <SwitchTheme />
    </>
  );
};

export default UserFab;
