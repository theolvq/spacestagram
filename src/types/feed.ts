import {Dispatch, SetStateAction} from 'react';
import {Image} from './image';

export interface HighLevelFeedProps {
  baseUrl: string;
  fetchData: (
    url: string,
    setState: Dispatch<SetStateAction<Image[]>>,
  ) => Promise<void>;
  isLoading: boolean;
}
