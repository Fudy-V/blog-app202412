"use client";

import * as React from "react";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DropdownProp } from "@/type/dashboard";

export function Dropdown(props: DropdownProp) {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className=" cursor-pointer block w-[100%]">{props.title}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href={props.url}>
            <DropdownMenuRadioItem value="dashboard">ダッシュボード</DropdownMenuRadioItem>
          </Link>
          <DropdownMenuRadioItem className="flex flex-row" value="setting">
            <Link href={props.url}>設定</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex flex-row" value="logout">
            <Link href={props.url}>ログアウト</Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
