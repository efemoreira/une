export interface Post {
  username: string;
  postContentText: string;
  timeElapsed: string;
  numOfComments: number;
  numOfReposts: number;
  numOfLikes: number;
  like: boolean;
  comments?: Post[];
  images?: any[];
}
