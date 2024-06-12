import {Box, Button, Divider, Slider, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import * as React from "react";
import {FeatureCard} from "@/components/home/featureCard";
import BookLand from "@/assets/home/bookLand";
import GameAndEducationApp from "@/assets/home/gameAndEducationApp";
import Meditation from "@/assets/home/meditation";
import Carousel from "react-material-ui-carousel";
import {Comment} from "@/components/home/comment";
import {useEffect, useState} from "react";
import {BlogCard} from "@/components/blog/BlogCard";

export default function Home() {
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
             sx={{backgroundColor: "#F74E53", paddingY: "50px", paddingTop: "100px", paddingX: "12%"}}>
        <Stack direction={"column"} sx={{width: {md: "50%", xs: "100%"}}} gap={"35px"}>
          <Typography color={"white"} fontSize={{md: "55px", xs: "30px"}} fontWeight={"500"} maxWidth={"450px"}>Educative Games and
            E-Books</Typography>
          <Typography color={"white"} fontSize={"20px"} fontWeight={"500"} maxWidth={"500px"}>Readki, okul öncesi
            çocuklar için eğitici ve eğlenceli e-kitap uygulamasıdır. Çocukların motor becerilerini, sosyal ve duygusal
            yeterliliklerini, dil ve bilişsel gelişimlerini teşvik eder.</Typography>
          <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} gap={"20px"}>
            <Button sx={{
              borderRadius: "30px",
              color: "black",
              backgroundColor: "white",
              fontWeight: "600",
              fontSize: "12px",
              padding: "15px",
              paddingX: "20px"
            }}>Download</Button>
            <Button sx={{color: "white", fontWeight: "600", fontSize: "12px"}}>Try for Free</Button>
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
        <Typography fontSize={"35px"} fontWeight={"600"}>Unique Features for Child Development</Typography>
        <Stack direction={"row"} gap={"20px"}>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<BookLand size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={"Book Land For Kids"} description={""}/>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<GameAndEducationApp size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={"Gaming And Education Application"} description={""}/>
          <FeatureCard containerSx={{width: "330px", padding: "10px", borderRadius: "11px"}}
                       iconItem={<Meditation size={144}/>} iconWrapperBackgroundColor={"#885EFE"}
                       title={"Meditation for Little Minds"} description={""}/>
        </Stack>
      </Stack>
      <Stack direction={"column"} sx={{backgroundColor: "#F74E53", paddingY: "30px"}} alignItems={"center"}
             gap={"10px"}>
        <Typography fontSize={"14px"} fontWeight={"500"} color={"white"}>Would you like to see the content?</Typography>
        <Typography fontSize={"35px"} fontWeight={"600"} color={"white"}>Get to Know Our Application!</Typography>
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
      </Stack>
      <Stack direction={"row"} sx={{paddingY: "50px", paddingTop: "100px", paddingX: "12%"}} gap={"20px"}>
        <Box width={"50%"}>Some photo</Box>
        <Stack width={"50%"} gap={"10px"}>
          <Typography color={"#F74E53"} fontSize={"20px"} fontWeight={"500"}>Aileler bizi çok seviyor!</Typography>
          <Typography fontSize={"35px"} fontWeight={"600"}>Kullanıcı yorumları</Typography>
          <Carousel>
            <Comment
              comment={"Readki ile çocuklarım çok güzel bir kitap okuma alışkanlığı edindi! Hem hikayeler ilgi çekici, hem de oyunlar eğlenceli ve eğitici. Çocuklarımızın hem kelime dağarcıklarını hem de hayal güçlerini geliştirmelerine yardımcı oluyor. Herkese kesinlikle tavsiye ederim!"}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"İrem B."}
              stars={5}/>
            <Comment
              comment={"Yoğun iş temposu arasında çocuklarımla kaliteli zaman geçirmek için harika bir çözüm oldu. Hem kitap okuyup hem de oyunlar oynayarak hem eğleniyorlar hem de öğreniyorlar. Uygulama kullanımı çok kolay ve içerikler çok kaliteli. Her kitap için pedagog yorumuna ulaşabiliyorsunuz."}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"İrem B."}
              stars={5}/>
            <Comment
              comment={"Uygulama sayesinde çocuğumun kitaplara ve eğitime olan ilgisini artırmayı başardım. Uygulama, çocuğumun kendi başına keşfetmesi ve öğrenmesi için güvenli bir ortam sunuyor. Hikayeler ve oyunlar çok çeşitli ve her zaman yenileri ekleniyor. Çocuğumla birlikte keyifli vakit geçirmenin yanı sıra onun gelişimini de takip edebiliyorum. Readki'ye çok teşekkürler..."}
              image={"https://readki-public.s3.eu-central-1.amazonaws.com/web/englishSS3.webp"} name={"İrem B."}
              stars={5}/>
          </Carousel>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{backgroundColor: "#F74E53", paddingY: "50px", paddingTop: "100px", paddingX: "12%"}}
             gap={"20px"} alignItems={"center"}>
        <Stack width={"50%"} gap={"30px"} paddingX={"20px"}>
          <Typography color={"white"} fontSize={"35px"} fontWeight={"600"}>Readki'yi Hemen İndir, Ücretsiz Denemeye
            Başla!</Typography>
          <Typography color={"white"} fontSize={"20px"} fontWeight={"500"}>Uygun paketlerden faydalanmak, birbirinden
            eğlenceli kitap ve oyunlarımızı denemek için hemen indirip uygulamayı kullanmaya
            başlayabilirsiniz.</Typography>
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
          <Stack direction={"row"} justifyContent={"space-around"}>
            <Stack>
              <Typography color={"white"} fontSize={"35px"} fontWeight={"600"}>10000+</Typography>
              <Typography color={"white"} fontSize={"20px"} fontWeight={"500"}>İndirme</Typography>
            </Stack>
            <Divider orientation="vertical"></Divider>
            <Stack>
              <Typography color={"white"} fontSize={"35px"} fontWeight={"600"}>2000+</Typography>
              <Typography color={"white"} fontSize={"20px"} fontWeight={"500"}>Aktif Kullanıcı</Typography>
            </Stack>
            <Divider orientation="vertical"></Divider>
            <Stack>
              <Typography color={"white"} fontSize={"35px"} fontWeight={"600"}>200+</Typography>
              <Typography color={"white"} fontSize={"20px"} fontWeight={"500"}>Uygulama Yorumu</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box width={{md: "50%"}}>
          <img src={"https://readki-public.s3.eu-central-1.amazonaws.com/web/mockup1.webp"} alt={""} style={{width: "100%", height: "100%", objectFit: "contain"}}/>
        </Box>
      </Stack>
      <Stack alignItems={"center"} sx={{paddingY: "50px"}} gap={"10px"}>
        <Typography color={"#F74E53"} fontSize={"20px"} fontWeight={"500"}>Çocuğunuz Readki'de vakit geçirirken sizi de
          unutmadık!</Typography>
        <Typography fontSize={"35px"} fontWeight={"600"} marginBottom={"10px"}>Son Yazılarımız</Typography>
        <Stack direction={"row"} gap={"20px"}>
          {blogs.map((blog: any) => (
            <BlogCard blogInfo={blog}/>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
