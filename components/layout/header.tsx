// @flow
import * as React from 'react';
import {Stack, useMediaQuery, useTheme} from "@mui/system";
import Logo from "../../assets/common/logo";
import {Button, Link} from "@mui/material";
import {Dropdown, Menu, MenuButton, MenuItem} from "@mui/base";
import  {useRouter} from "next/router";
import UkFlag from "@/assets/common/ukFlag";
import TurkeyFlag from "@/assets/common/turkeyFlag";
import useTranslation from 'next-translate/useTranslation'

export default function Header (props: any) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const { t } = useTranslation('common');

  const getCurrentFlag = () => {
    if (router.locale === "en") {
      return <UkFlag/>
    } else {
      return <TurkeyFlag/>
    }
  }

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.pathname, { locale: lang });
  }

  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"} sx={{backgroundColor: "#F74E53", paddingY: "20px", paddingX: "30px"}}>
      {!isMobile && <Logo color={"white"}/>}
      <Stack direction={"row"} spacing={{md: 2, xs: 0}}>
        <Button onClick={() => router.push("/")} sx={{color: "white", textDecorationLine: "none"}}>{t("Home")}</Button>
        <Button onClick={() => router.push("/blog")} sx={{color: "white", textDecorationLine: "none"}}>{t("Blog")}</Button>
        <Button onClick={() => router.push("/contact")} sx={{color: "white", textDecorationLine: "none"}}>{t("Contact")}</Button>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Button onClick={() => window.open("https://onelink.to/dqqvdp", "_blank")} sx={{border: "1px solid", borderRadius: "30px", borderColor: "white", color: "white", fontSize: "12px", padding: "10px", paddingX: "15px"}}>{t("Download")}</Button>
        <Dropdown>
          <MenuButton>{getCurrentFlag()}</MenuButton>
          <Menu>
            <MenuItem onClick={() => changeLanguage("en")} style={{cursor: "pointer"}}>
              <UkFlag/>
            </MenuItem>
            <MenuItem onClick={() => changeLanguage("tr")} style={{cursor: "pointer"}}>
              <TurkeyFlag/>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Stack>
    </Stack>
  );
};
