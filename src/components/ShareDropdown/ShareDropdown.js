import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import copy from "copy-to-clipboard";
import { ShareButton, ShareIcon, ShareText } from "./ShareDropdown.Styles";
import "./ShareDropdown.Styles.css";

function ShareDropdown() {
  const url = window.location.href;
  const title = "I thought you might be interested in this page from Videoflix";
  const [value, setValue] = useState("Share");
  const items = [
    {
      label: (
        <ShareButton as={FacebookShareButton} url={url} title={title}>
          <ShareIcon as={FacebookIcon} size={32} round />
          <ShareText> Share via Facebook</ShareText>
        </ShareButton>
      ),
      value: "facebook",
    },
    {
      label: (
        <ShareButton as={WhatsappShareButton} url={url} title={title}>
          <ShareIcon as={WhatsappIcon} size={32} round />
          <ShareText> Share via Whatsapp</ShareText>
        </ShareButton>
      ),
      value: "whatsapp",
    },
    {
      label: "Copy Link URL",
      value: "clipboard",
    },
  ];
  const onChange = ({ value }) => {
    if (value === "clipboard") {
      setValue("Copied!");
      copy(url);
    }
  };
  return (
    <Dropdown
      options={items}
      controlClassName="dropdowncontrol--share"
      value={value}
      onChange={onChange}
      className="dropdown--share"
      menuClassName="dropdownmenu--share"
    />
  );
}

export default ShareDropdown;
