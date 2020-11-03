import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import AccountBalanceTwoToneIcon from "@material-ui/icons/AccountBalanceTwoTone";
const ico=()=><AccountBalanceTwoToneIcon/>
const Seo = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>What'sHomework?</title>
      <meta name="description" content="Homework Follow App" />
    </Helmet>
  );
};

export default Seo;
