import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SocialMediaInfo {
  icon: IconDefinition;
  url: string;
}

interface SocialMediaProps {
  sm: SocialMediaInfo;
}

const SocialMedia: FC<SocialMediaProps> = ({ sm }) => (
  <a href={sm.url}>
    <FontAwesomeIcon
      icon={sm.icon}
      size="3x"
      color="white"
      style={{ padding: 10 }}
    />
  </a>
);

export default SocialMedia;
