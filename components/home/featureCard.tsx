// @flow
import * as React from 'react';
import {ReactElement} from "react";
import {Box, Card, Typography} from "@mui/material";
import {Stack} from "@mui/system";

type Props = {
  iconItem: ReactElement;
  iconWrapperBackgroundColor: string;
  title: string;
  description: string;
  containerSx?: object;
  containerStyle?: object;
};
export const FeatureCard = (props: Props) => {
  return (
    <Card sx={props.containerSx} style={props.containerStyle}>
      <Stack direction={"column"} gap={"30px"} alignItems={"center"} paddingY={"55px"}>
        {props.iconItem}
        <Typography sx={{fontSize: "22px", fontWeight: "500", textAlign: "center"}} maxWidth={"50%"}>{props.title}</Typography>
        {props.description && <Typography>{props.description}</Typography>}
      </Stack>
    </Card>
  );
};
