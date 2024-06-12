// @flow
import * as React from 'react';
import {Stack} from "@mui/system";
import Logo from "../../assets/common/logo";
import {Button, Link} from "@mui/material";
import {Dropdown, Menu, MenuButton, MenuItem} from "@mui/base";
import  {useRouter} from "next/router";
import UkFlag from "@/assets/common/ukFlag";
import TurkeyFlag from "@/assets/common/turkeyFlag";

export function getStaticProps ({locale} : any) {
  return {
    props: {
      locale: locale
    },
  }
}

export default function Header (props: any) {
  const router = useRouter();

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
      <Logo color={"white"}/>
      <Stack direction={"row"} spacing={2}>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>Home</Link>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>Blog</Link>
        <Link href={"#"} sx={{color: "white", textDecorationLine: "none"}}>Contact</Link>
      </Stack>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Button sx={{border: "1px solid", borderRadius: "30px", borderColor: "white", color: "white", fontSize: "12px", padding: "10px", paddingX: "15px"}}>Download</Button>
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
