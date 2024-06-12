// @flow
import * as React from 'react';
import {Stack} from "@mui/system";
import Star from "@/assets/home/star";
import EmptyStar from "@/assets/home/emptyStar";
import {Typography} from "@mui/material";

type Props = {
  stars?: number;
  comment: string;
  image: string;
  name: string;
};
export const Comment = ({
                          stars = 0,
                          comment,
                          image,
                          name
                        }: Props) => {
  return (
    <Stack direction={"column"} gap={"20px"} sx={{paddingX: "20px"}}>
      <Stack direction={"row"} gap={"5px"} justifyContent={"flex-end"} sx={{marginBottom: "20px"}}>
        {stars && Array.from({length: 5}, (_, index) => (
          index < stars ? <Star key={index} size={20}/> : <EmptyStar key={index} size={20}/>
        ))}
      </Stack>
      <Typography color={"darkgray"}>{comment}</Typography>
      <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
        <img
          src={image}
          alt={name.length > 0 ? name[0] : ""}
          style={{width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover"}}
        />
        <Typography color={"darkgray"}>{name}</Typography>
      </Stack>
    </Stack>
  );
};
