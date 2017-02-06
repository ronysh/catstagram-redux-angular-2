import { Post } from "./post.model";
import { Comment } from "./comment.model";

export const POSTS: Post[] = [
    {
        id: 1, descprition: 'A cool kitten',
        source: 'http://placekitten.com/g/300/300',
        likes: 1
    },
    {
         id: 2, descprition: 'A smart kitten',
        source: 'http://placekitten.com/g/200/200',
        likes: 2
    },
    {
        id: 3,
        descprition: 'A funny kitten',
        source: 'http://placekitten.com/g/500/500',
        likes: 4
    },
    {
        id: 4,
        descprition: 'A ketery kitten',
        source: 'http://placekitten.com/g/400/400',
        likes: 3
    }
];

export const COMMENTS: Comment[] = [
    {
        id: 1,
        post: 1,
        user: 'Catster',
        text: 'This is so awsome!'
    },
    {
        id: 2,
        post: 1,
        user: 'Catstovich',
        text: 'This is so catty'
    },
    {
        id: 3,
        post: 1,
        user: 'Catsting',
        text: 'This is so cool'
    },
    {
        id: 4,
        post: 2,
        user: 'Catstars',
        text: 'This is so you know'
    }
];
