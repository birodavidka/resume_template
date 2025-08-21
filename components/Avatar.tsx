import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const DATA = {
  name: "John Doe",
  avatarUrl: "https://example.com/avatar.jpg",
  initials: "JD",
};

const AvatarComponent = (props: Props) => {
  return (
    <div>
      <Avatar className="size-28 border">
        <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
        <AvatarFallback>{DATA.initials}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarComponent;
