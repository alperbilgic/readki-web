// @flow
import * as React from 'react';
import {Card, Link, Typography} from "@mui/material";
import {Stack} from "@mui/system";

type Props = {
  blogInfo: any
};
export const BlogCard = (props: Props) => {
  return (
    <Link href={"https://www.kidolog.com/blog/" + props.blogInfo.slug} sx={{textDecorationLine: "none"}}>
      <Card sx={{padding: "10px", maxWidth: "400px", boxShadow: "none"}}>
        <Stack gap={"15px"}>
          <img src={props.blogInfo.image} alt={""}
               style={{width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px"}}/>
          <Typography fontSize={"20px"}>{props.blogInfo.name}</Typography>
        </Stack>
      </Card>
    </Link>
  );
};
