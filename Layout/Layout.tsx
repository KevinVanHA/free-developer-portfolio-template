import { Box } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";

const Layout = ({ navbarSx, title, children, desc }: ILayout) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDrawer = (state?: boolean) => {
    setOpen(state !== undefined ? state : !isOpen);
  };

  return (
    <>
      <Head>
        <title>{title || "injoy Holographic NFT"}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="shortcut icon" href="../public/assets/favicon.png" />

        <meta name="description" content={`${desc || "injoi Holographic NFT"}`} />

        <meta property="og:title" content="injoi Holographic NFT" />

        <meta property="og:url" content="https://injoi.xyz" />

        <meta
          property="og:description"
          content="injoi - a free NFT mint, a digital muse, and a gateway to rewards "
        />

        <meta property="og:image" content="../public/assets/injoilogo.png" />

        <meta httpEquiv="content-language" content="en" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx} />
      <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Box
        className="site-content"
        sx={{
          width: "100vw", // Set the width of the content to 100vw
          overflowX: "hidden", // Prevent horizontal scrollbar
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
