import React from "react";
import {Image} from "../../types/image";

interface LikeLabelProps {
  picture: Image;
}

const LikeLabel: React.FC<LikeLabelProps> = ({picture}) => {
  const randomUser = "hummingbird";

  const otherLabel = picture.likes - 1 > 1 ? "others" : "other";

  return (
    <p>
      Liked by <a href="/randomUser">{randomUser}</a> and
      <a href="/likes">
        {" "}
        {picture.likes - 1} {otherLabel}
      </a>
    </p>
  );
};

export default LikeLabel;
