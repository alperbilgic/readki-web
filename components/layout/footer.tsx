// @flow
import * as React from 'react';
import {Stack, useMediaQuery, useTheme} from "@mui/system";
import Logo from "../../assets/common/logo";
import {Link, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import useTranslation from "next-translate/useTranslation";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const {t} = useTranslation('common');

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} sx={{backgroundColor: "#F74E53", paddingY: "80px", paddingX: "30px"}}>
      <Logo color={"white"}/>
      <Stack justifyContent={"flex-start"}>
        <Typography fontWeight={"600"} fontSize={"30px"} color={"white"} marginBottom={"10px"}>{t("Pages")}</Typography>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>{t("Home")}</Link>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>{t("Blog")}</Link>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>{t("Contact")}</Link>
      </Stack>
      {!isMobile && <Stack alignItems={"flex-start"} height={"100%"} gap={"15px"} paddingTop={"10px"}>
        <Stack direction={"row"} gap={"5px"}>
          <LocationOnIcon style={{color: "white", height: "20px"}}/>
          <Typography color={"white"} fontSize={"14px"}>Aşkabat Caddesi No: 12/6 Çankaya/Ankara</Typography>
        </Stack>
        <Stack direction={"row"} gap={"5px"} alignItems={"flex-start"}>
          <PhoneIcon style={{color: "white", height: "20px"}}/>
          <Typography color={"white"} fontSize={"14px"}>+90 850 840 01 39</Typography>
        </Stack>
      </Stack>}
    </Stack>
  );
};
