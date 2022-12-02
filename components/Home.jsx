import {
  Stack,
  Box,
  Container,
  Typography,
  CardContent,
  Card,
  Grid,
  Avatar,
  Rating,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import MobileStore from "./MobileStore";
import SocialMediaLink from "./SocialMediaLink";
import Footer from "../components/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
import TextTransition, { presets } from "react-text-transition";
import ProductSlider from "../components/ProductSlider";
import Image from "next/image";

import banner from "../public/img/banner.jpg";
import sp from "../public/img/sp.png";
import fd from "../public/img/fd.png";
import cs from "../public/img/cs.png";
import rp from "../public/img/rp.png";
export default function Home() {
  const [index, setIndex] = React.useState(0);
  const TEXTS = [
    "Make Your Life Easy",
  ];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <Box sx={{ background: "#ECECEE" }}>
        <Grid container sx={{ height: "500px" }}>
          <Grid
            item
            sx={{
              display: "grid",
              placeContent: "center",
              width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
            }}
          >
            <Typography variant="bold" component={"h1"}>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.slow}
              />
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "50%",
                margin: "auto",
                marginTop: "20px",
                background: "#AFE1AF",
                padding: "12px 0px",
              }}
            >
              <Link href={"/products/accessory"}>
                <a style={{ textDecoration: "none", color: "white" }}>
                  Shop Now
                </a>
              </Link>
            </Button>
          </Grid>
          <Grid
            item
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            sx={{
              display: { xs: "none", sm: "none", md: "grid", lg: "grid" },
              placeContent: "center",
              width: "50%",
              background: "#AFE1AF",
              borderRadius: "120%",
            }}
          >
            <Image
              src={banner}
              alt="Picture of the author"
              width={460}
              height={450}
              quality={100}
            />
          </Grid>
        </Grid>
      </Box>
      <Stack>
        <Box sx={{mt:"60px", paddingY: "10px",background:"#e8f5e9",borderRadius: "60px" }}>
          <Container>
            <Typography variant="bold" component="h1" py="40px" align="center">
              New Products
            </Typography>

              <ProductSlider></ProductSlider>
         
          </Container>
        </Box>
        <Box sx={{mt:"60px", minHeight: "600px", width: "100%" ,background:"#e3f2fd",borderRadius: "50px"}}>
          <Container>
            <Typography
              variant="bold"
              component="h1"
              textAlign="center"
              py="40px"
            >
              We Provide
            </Typography>
            <Grid container gap={"200px"} justifyContent={"center"}>
              <Grid
                item
                data-aos="fade-up-right"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Image src={sp} height="400px" width="400px" alt="payment" quality={100} />
              </Grid>
              <Grid
                item
                data-aos="zoom-in"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Image src={fd} height="350px" width="400px" alt="delivery" quality={100} />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{mt:"60px", minHeight: "600px", width: "100%", background: "#e0f2f1",borderRadius: "50px" }}>
          <Container>
            <Typography
              variant="bold"
              component="h1"
              textAlign="center"
              py="40px"
            >
              Customer Support 24/7
            </Typography>
            <Grid container justifyContent={"center"} spacing={2}>
              <Grid item>
                <Typography>
                24×7 customer support means when businesses are able to engage their customers whenever they need by deploying digital channels like live chat and chatbot. Delivering support to customers when they are in need of it is an absolute delight to customers. This is how clients react to customer support.Customers generally do not like to wait, and they expect prompt responses. When there is a support team available 24×7, customers would get their issues resolved with proactive customer service assistance and clarity. Happy customers tend to remain loyal and would not want to switch brands when they are satisfied by the quality of support they get.
                </Typography>
              </Grid>
              <Grid
                item
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <Image src={cs} alt="delivery" quality={100} />
              </Grid>
            </Grid>
          </Container>
        </Box>
        
        <Box sx={{mt:"60px",minHeight: "400px", width: "100%", background: "#f5f5f5",borderRadius: "50px" }}>
          <Container>
            <Typography
              variant="bold"
              component="h1"
              textAlign="center"
              py="40px"
            >
              Return Policy
            </Typography>
            <Stack direction={{ xs: "column", sm: "row", md: "row" }}>
              <Grid
                data-aos="fade-up-right"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                p={{ xs: "5px", sm: "10", md: "20" }}
              >
                <Typography align="center">
                If your product is damaged, defective, incorrect or incomplete at the time of delivery, please raise a return request on GadgetZone website. Return request must be raised within 14 days for GadgetZone items, or within 7 days for items from the date of delivery.
                For electronic appliances & mobile phones related issues after usage or after the return policy period, please check if the product is covered under seller warranty or brand warranty. For more information on warranty claims, please view our Warranty Policy.
                For selected categories, we accept a change of mind. Please refer to the section below on Return Policy per Category for more information.
                </Typography>
              </Grid>
              <Grid
                data-aos="fade-up-left"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                p={{ xs: "5px", sm: "10", md: "20" }}
              >
                <Image
                  src={rp}
                  alt="Picture of the author"
                  width={800}
                  height={500}
                  quality={100}
                />
              </Grid>
            </Stack>
          </Container>
        </Box>
        
        <Box sx={{mt:"100px", minHeight: "500px", width: "100%", background: "#bdbdbd" }}>
          <Container>
            <Grid container spacing={2} mt={10}>
              <Grid
                item
                sx={{
                  display: "grid",
                  placeContent: "center",
                  width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                }}
              >
                <SocialMediaLink></SocialMediaLink>
              </Grid>
              <Grid
                item
                sx={{
                  display: "grid",
                  placeContent: "center",
                  width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
                }}
              >
                <MobileStore></MobileStore>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider></Divider>
        <Footer></Footer>
        <MessengerCustomerChat
          pageId="103070385764123"
          appId="411472610987693"
        />
      </Stack>
    </>
  );
}
