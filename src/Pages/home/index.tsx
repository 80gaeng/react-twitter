import PostBox from 'components/PostBox';
import PostForm from '../../components/PostForm';

export interface PostProps {
  id: string;
  email: string;
  content: string;
  createdAt: string;
  uid: string;
  profileUrl?: string;
  likes?: string[];
  likeCount?: number;
  comments?: any;
}

const posts: PostProps[] = [
  {
    id: '1',
    email: 'test@test.com',
    content: '내용입니다',
    createdAt: '2023-08-30',
    uid: '123123',
  },
  {
    id: '2',
    email: 'test@test.com',
    content: '내용입니다',
    createdAt: '2023-08-30',
    uid: '123123',
  },
  {
    id: '3',
    email: 'test@test.com',
    content: '내용입니다',
    createdAt: '2023-08-30',
    uid: '123123',
  },
  {
    id: '4',
    email: 'test@test.com',
    content: '내용입니다',
    createdAt: '2023-08-30',
    uid: '123123',
  },
];

export default function HomePage() {
  return (
    <div className='home'>
      <div className='home__title'>Home</div>
      <div className='home__tabs'>
        <div className='home__tab home__tab--active'>For you</div>
        <div className='home__tab'>Flollowing</div>
      </div>

      <PostForm />

      {/* Tweet Posts */}
      <div className='post'>
        {posts.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
