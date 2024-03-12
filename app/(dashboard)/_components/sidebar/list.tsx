"use client";

import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length)  return null;
  
  return (
    <ul>
      {userMemberships.data.map((membership) => {
        return (
          <Item
            id={membership.organization.id}
            key={membership.organization.id}
            name={membership.organization.name}
            imageUrl={membership.organization.imageUrl}
          />
        );
      })}
    </ul>
  );
};

export default List;
