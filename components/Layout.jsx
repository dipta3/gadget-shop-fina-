import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Welcome To Gadget Zone"}</title>
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
     
    
    </>
  );
}
