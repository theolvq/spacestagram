import React, {SetStateAction} from "react";

import {Image} from "./image";

export interface HighLevelFeedProps {
  baseUrl: string;
  fetchData: (
    url: string,
    setState: React.Dispatch<SetStateAction<Image[]>>
  ) => Promise<Image[]>;
  isLoading: boolean;
}
