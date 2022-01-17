export interface User {
  picture: string;
  username: string;
}

export interface ImageFromAPI {
  date: string;
  url: string;
  title: string;
  explanation: string;
  media_type: string;
}

export interface Image extends ImageFromAPI {
  likes: number;
  user: User;
  isSaved: boolean;
  id: string;
}
