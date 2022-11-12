import * as React from "react";
import Link from "next/link";
import { Stack, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
export default function NavItems() {
  const router = useRouter();
  return (
    <Stack
      direction="row"
      spacing={3}
      align="center"
      sx={{
        
        display: {textAlign: 'center', xs: "none", sm: "none", md: "block", lg: "block" },
      }}
    >
      <Link href={"/"} passHref>
        <a
          style={{
            textDecoration: "none",
            color: router.asPath === "/" ? "#03B0D6" : "white",
          }}
        >
          HOME
        </a>
      </Link>

      <Link href={"/products/mobile"} passHref>
        <a
          style={{
            textDecoration: "none",
            color: router.asPath === "/products/mobile" ? "#03B0D6" : "white",
          }}
        >
          PHONE
        </a>
      </Link>

      <Link href={"/products/desktop"} passHref>
        <a
          style={{
            textDecoration: "none",
            color: router.asPath === "/products/desktop" ? "#03B0D6" : "white",
          }}
        >
          DESKTOP
        </a>
      </Link>

      <Link href={"/products/laptop"} passHref>
        <a
          style={{
            textDecoration: "none",
            color: router.asPath === "/products/laptop" ? "#03B0D6" : "white",
          }}
        >
          LAPTOP
        </a>
      </Link>
      <Link href={"/products/accessory"} passHref>
        <a
          style={{
            textDecoration: "none",
            color:
              router.asPath === "/products/accessory" ? "#03B0D6" : "white",
          }}
        >
          ACCESSORIES
        </a>
      </Link>
    </Stack>
  );
}
