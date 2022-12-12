import {Post} from '../models/post';
// import {images} from '../utils/data';

export const posts: Post[] = [
  {
    username: 'Diego',
    postContentText: 'Creando mi twitter clone en react native.',
    timeElapsed: '1s',
    numOfComments: 146,
    numOfReposts: 15,
    numOfLikes: 50,
    like: true,
    // images: [images[2], images[1], images[0], images[3]],
    comments: [
      {
        username: 'Pedro',
        postContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '1m',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: false,
      },
      {
        username: 'Andrea',
        postContentText: 'this is a post, thats it.',
        timeElapsed: '2h',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: true,
      },
      {
        username: 'Paula',
        postContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '3h',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: false,
      },
    ],
  },
  {
    username: 'Pedro',
    postContentText:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
    timeElapsed: '1m',
    numOfComments: 146,
    numOfReposts: 15,
    numOfLikes: 50,
    like: false,
    comments: [
      {
        username: 'Pedro',
        postContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '1m',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: false,
      },
      {
        username: 'Andrea',
        postContentText: 'this is a post, thats it.',
        timeElapsed: '2h',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: true,
      },
      {
        username: 'Paula',
        postContentText:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
        timeElapsed: '3h',
        numOfComments: 146,
        numOfReposts: 15,
        numOfLikes: 50,
        like: false,
      },
    ],
  },
  {
    username: 'Andrea',
    postContentText: 'this is a post, thats it.',
    timeElapsed: '2h',
    numOfComments: 146,
    numOfReposts: 15,
    numOfLikes: 50,
    like: true,
    // images: [images[1], images[3]],
  },
  {
    username: 'Paula',
    postContentText:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab temporibus voluptates sit repellat. Quia, earum modi dolorum consequuntur possimus minima dolore consequatur magni nulla temporibus voluptates fuga voluptatem suscipit beatae!',
    timeElapsed: '3h',
    numOfComments: 0,
    numOfReposts: 0,
    numOfLikes: 0,
    like: false,
    comments: [],
    // images: [images[1]],
  },
];
