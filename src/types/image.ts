export interface User {
  picture: string;
  username: string;
}

export interface Image {
  likes: number;
  user: User;
  date: Date;
  url: string;
  title: string;
  explanation: string;
  id: string;
}
