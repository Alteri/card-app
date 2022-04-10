import React from "react";
import { useDispatch } from "react-redux";
import { removeTeam } from "../../actions/teamActions";
import { TeamItemStyled, IdentyWrapper } from "./styled";
import { TeamProps } from "../../types";
import { MemberItem } from "../MemberItem";
import { Text } from "../Text";
import { Colors } from "../Global";
import { TeamIcon } from "../TeamIcon";
import { CardMenu } from "../CardMenu";
import { Separator } from "../Separator";

export type TeamItemProps = { teamList: TeamProps[] };

export const TeamItem = ({ teamList }: TeamItemProps) => {
  const dispatch = useDispatch();
  function teamRemove(id: number) {
    dispatch(removeTeam(id));
  }
  return (
    <>
      {teamList.map(({ name, members, color, iconId, id }, index) => (
        <TeamItemStyled color={color} key={index} as="li" gap="16px">
          <CardMenu removeCard={() => teamRemove(id)} color={color} />
          <IdentyWrapper>
            <TeamIcon iconId={iconId} color={color} />
            <div>
              <Text textType="caption" color={Colors.gray400}>
                Team
              </Text>
              <Text textType="h3">{name}</Text>
            </div>
          </IdentyWrapper>
          <Separator />
          <MemberItem members={members} />
        </TeamItemStyled>
      ))}
    </>
  );
};
