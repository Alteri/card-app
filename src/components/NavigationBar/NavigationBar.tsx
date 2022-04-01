import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavigationBarStyled,
  MenuList,
  MenuItem,
  MenuItemLink,
} from "./styled";
import { IconButton } from "../IconButton";
import { Plus } from "../Icon";
import { HomePageUrl, TeamsPageUrl } from "../../url";

export type NavigationBarProps = {
  modalAction: () => void;
};

const menuItems = [
  { title: "Tasks", path: HomePageUrl },
  { title: "Teams", path: TeamsPageUrl },
];

export const NavigationBar = ({ modalAction }: NavigationBarProps) => {
  const router = useRouter();
  return (
    <NavigationBarStyled>
      <MenuList>
        {menuItems.map(({ title, path }, index) => (
          <MenuItem key={index}>
            <Link href={path}>
              <MenuItemLink active={router.pathname == path}>
                {title}
              </MenuItemLink>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
      <IconButton onClick={modalAction}>
        <Plus />
      </IconButton>
    </NavigationBarStyled>
  );
};