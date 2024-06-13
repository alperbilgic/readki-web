import {Box, Button, Divider, Slider, Typography} from "@mui/material";
import {Stack, useMediaQuery, useTheme} from "@mui/system";
import * as React from "react";
import {FeatureCard} from "@/components/home/featureCard";
import BookLand from "@/assets/home/bookLand";
import GameAndEducationApp from "@/assets/home/gameAndEducationApp";
import Meditation from "@/assets/home/meditation";
import Carousel from "react-material-ui-carousel";
import {Comment} from "@/components/home/comment";
import {useEffect, useState} from "react";
import {BlogCard} from "@/components/blog/BlogCard";
import useTranslation from "next-translate/useTranslation";
import {useRouter} from "next/router";

export default function Home() {
  const {t} = useTranslation('common');
  const router = useRouter();
  const theme = useTheme();
  const mdOrBigger = useMediaQuery(theme.breakpoints.up('md'))
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const category = "cocuk";
    const contentLanguage = "tr";
    const response = await fetch(`https://api.kidolog.com/api/Home/GetBlogs?CategorySlug=${category}&Page=1&Size=3`, {headers: {'Content-Language': contentLanguage}});
    const data = await response.json();
    setBlogs(data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);


  return (
    <Box sx={{width: "100%"}}>
      <Stack direction={{md: "row", xs: "column-reverse"}} alignItems={"center"} justifyContent={"space-around"}
             sx={{backgroundColor: "#F74E53", paddingY: {md: "50px", xs: "10px"}, paddingTop: "100px", paddingX: "12%"}}>
        <Stack direction={"column"} sx={{width: {md: "50%", xs: "100%"}}} gap={"35px"}>
          <Typography color={"white"} fontSize={{md: "55px", xs: "30px"}} fontWeight={"500"}
                      maxWidth={"500px"}>{t("Educative Games and E-Books")}</Typography>
          <Typography color={"white"} fontSize={"20px"} fontWeight={"500"}
                      maxWidth={"500px"}>{t("Readki Description")}</Typography>
          <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} gap={"20px"}>
            <Button
              onClick={() => window.open("https://onelink.to/dqqvdp", "_blank")}
              sx={{
              borderRadius: "30px",
              color: "black",
              backgroundColor: "white",
              fontWeight: "600",
              fontSize: "12px",
              padding: "15px",
              paddingX: "20px"
            }}>{t("Download")}</Button>
            <Button onClick={() => window.open("https://onelink.to/dqqvdp", "_blank")} sx={{color: "white", fontWeight: "600", fontSize: "12px"}}>{t("Try For Free")}</Button>
          </Stack>
        </Stack>
        <Box width={{md: "50%", xs: "100%"}}>
          <img
            src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/mockup2.webp"}
            alt={""}
            style={{width: "100%", height: "100%", objectFit: "contain"}}
          />
        </Box>
      </Stack>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} sx={{paddingY: "50px"}} gap={"50px"}>
        <Typography fontSize={"35px"} fontWeight={"600"} textAlign={"center"}>{t("Unique Features for Child Development")}</Typography>
        <Stack direction={{md: "row", xs: "column"}} gap={"20px"}>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<BookLand size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={t("Book Land For Kids")} description={""}/>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<GameAndEducationApp size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={t("Gaming And Education Application")} description={""}/>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<Meditation size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={t("Meditation for Little Minds")} description={""}/>
        </Stack>
      </Stack>
      <Stack direction={"column"} sx={{backgroundColor: "#F74E53", paddingY: "30px"}} alignItems={"center"}
             gap={"10px"}>
        <Typography fontSize={"14px"} fontWeight={"500"}
                    color={"white"}>{t("Would you like to see the content?")}</Typography>
        <Typography fontSize={"35px"} fontWeight={"600"} textAlign={"center"}
                    color={"white"}>{t("Get to Know Our Application!")}</Typography>
        {mdOrBigger ? (
          <Stack direction={"row"} gap={"40px"} marginTop={"30px"}>
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS1.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS2.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
          </Stack>
        ) : (
          <Carousel sx={{width: "200px", alignItems: "center"}}>
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS1.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS2.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
            <img
              src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"}
              alt={""}
              style={{width: "200px", borderRadius: "30px", border: "1px solid white"}}
            />
          </Carousel>
        )}
      </Stack>
      <Stack direction={"row"} sx={{paddingY: "50px", paddingTop: "100px", paddingX: "12%"}} gap={"20px"}>
        {mdOrBigger && <Box width={"50%"}>
          <Stack direction={"row"} gap={"20px"}>
            <img src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/gamesPageScreenShot.webp"} alt={""}
                 style={{width: "24%", objectFit: "contain"}}/>
            <img src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/mainPageScreenShot.webp"} alt={""}
                 style={{width: "24%", objectFit: "contain", marginTop: "20%"}}/>
            <img src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/readingPageScreenShot.webp"} alt={""}
                 style={{width: "24%", objectFit: "contain"}}/>
          </Stack>
        </Box>}
        <Stack width={{md: "50%", xs: "100%"}} gap={"10px"}>
          <Typography color={"#F74E53"} fontSize={"20px"} fontWeight={"500"}>{t("Families Love Us!")}</Typography>
          <Typography fontSize={"35px"} fontWeight={"600"}>{t("User Comments")}</Typography>
          <Carousel>
            <Comment
              comment={"Readki ile çocuklarım çok güzel bir kitap okuma alışkanlığı edindi! Hem hikayeler ilgi çekici, hem de oyunlar eğlenceli ve eğitici. Çocuklarımızın hem kelime dağarcıklarını hem de hayal güçlerini geliştirmelerine yardımcı oluyor. Herkese kesinlikle tavsiye ederim!"}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"İrem B."}
              stars={5}/>
            <Comment
              comment={"Yoğun iş temposu arasında çocuklarımla kaliteli zaman geçirmek için harika bir çözüm oldu. Hem kitap okuyup hem de oyunlar oynayarak hem eğleniyorlar hem de öğreniyorlar. Uygulama kullanımı çok kolay ve içerikler çok kaliteli. Her kitap için pedagog yorumuna ulaşabiliyorsunuz."}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"Derin Y."}
              stars={5}/>
            <Comment
              comment={"Uygulama sayesinde çocuğumun kitaplara ve eğitime olan ilgisini artırmayı başardım. Uygulama, çocuğumun kendi başına keşfetmesi ve öğrenmesi için güvenli bir ortam sunuyor. Hikayeler ve oyunlar çok çeşitli ve her zaman yenileri ekleniyor. Çocuğumla birlikte keyifli vakit geçirmenin yanı sıra onun gelişimini de takip edebiliyorum. Readki'ye çok teşekkürler..."}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"Leyla A."}
              stars={5}/>
          </Carousel>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{backgroundColor: "#F74E53", paddingY: "50px", paddingTop: "100px", paddingX: "12%"}}
             gap={"20px"} alignItems={"center"}>
        <Stack width={{md: "50%", xs: "100%"}} gap={"30px"} paddingX={"20px"}>
          <Typography color={"white"} fontSize={"35px"}
                      fontWeight={"600"}>{t("Download And Use Action Call")}</Typography>
          <Typography color={"white"} fontSize={"20px"}
                      fontWeight={"500"}>{t("Download Action Call Details")}</Typography>
          <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} gap={"20px"}>
            <Button sx={{
              border: "1px solid",
              borderRadius: "30px",
              borderColor: "white",
              color: "white",
              fontSize: "12px",
              padding: "10px",
              paddingX: "15px"
            }}>Apple App Store</Button>
            <Button sx={{
              border: "1px solid",
              borderRadius: "30px",
              borderColor: "white",
              color: "white",
              fontSize: "12px",
              padding: "10px",
              paddingX: "15px"
            }}>Google Play Store</Button>
          </Stack>
          <Stack width={"100%"} direction={"row"} justifyContent={"space-around"} gap={{md: "20px", xs: "12px"}}>
            <Stack>
              <Typography color={"white"} fontSize={{md: "35px", xs: "25px"}} fontWeight={"600"}>10000+</Typography>
              <Typography color={"white"} fontSize={{md: "20px", xs: "15px"}} fontWeight={"500"}>İndirme</Typography>
            </Stack>
            <Divider orientation="vertical"></Divider>
            <Stack>
              <Typography color={"white"} fontSize={{md: "35px", xs: "25px"}} fontWeight={"600"}>2000+</Typography>
              <Typography color={"white"} fontSize={{md: "20px", xs: "15px"}} fontWeight={"500"}>Aktif Kullanıcı</Typography>
            </Stack>
            <Divider orientation="vertical"></Divider>
            <Stack>
              <Typography color={"white"} fontSize={{md: "35px", xs: "25px"}} fontWeight={"600"}>200+</Typography>
              <Typography color={"white"} fontSize={{md: "20px", xs: "15px"}} fontWeight={"500"}>Uygulama Yorumu</Typography>
            </Stack>
          </Stack>
        </Stack>
        {mdOrBigger && <Box width={{md: "50%"}}>
          <img src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/mockup1.webp"} alt={""}
               style={{width: "100%", height: "100%", objectFit: "contain"}}/>
        </Box>}
      </Stack>
      <Stack alignItems={"center"} sx={{paddingY: "50px"}} gap={"10px"} paddingX={"12%"}>
        <Typography color={"#F74E53"} fontSize={"20px"} fontWeight={"500"}>{t("Blogs Section Title")}</Typography>
        <Stack direction={"row"} position={"relative"} width={"100%"} justifyContent={"center"}>
          <Typography fontSize={"35px"} fontWeight={"600"} marginBottom={"10px"}>{t("Latest Blogs")}</Typography>
          {mdOrBigger && <Button
            sx={{
              position: "absolute",
              right: "0",
              backgroundColor: "#F74E53",
              color: "white",
              border: "1px solid",
              borderColor: "white",
              padding: "10px",
              paddingX: "15px",
              borderRadius: "30px"
            }}
            // navigate to blog page
            onClick={() => router.push("/blog")}
          >{t("See All")}</Button>}
        </Stack>
        {mdOrBigger ? <Stack direction={"row"} gap={"20px"}>
          {blogs.map((blog: any) => (
            <BlogCard blogInfo={blog}/>
          ))}
        </Stack> : (
          <Stack sx={{width: "100%"}} gap={"10px"}>
            <Carousel sx={{width: "100%"}}>
              {blogs.map((blog: any) => (
                <BlogCard blogInfo={blog}/>
              ))}
            </Carousel>
            <Button
              sx={{
                right: "0",
                backgroundColor: "#F74E53",
                color: "white",
                border: "1px solid",
                borderColor: "white",
                padding: "10px",
                paddingX: "15px",
                borderRadius: "30px"
              }}
              // navigate to blog page
              onClick={() => router.push("/blog")}
            >{t("See All")}</Button>
          </Stack>
        )}
      </Stack>
    </Box>
  )
}
