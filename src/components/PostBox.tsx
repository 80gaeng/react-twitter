import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { PostProps } from '../Pages/home/index';

interface PostBoxProps {
  post: PostProps;
}

export default function PostBox({ post }: PostBoxProps) {
  const handleDelete = () => {};
  return (
    <>
      <div className='post__box' key={post?.id}>
        <Link to={`/posts/${post?.id}`}>
          <div className='post__box-profile'>
            <div className='post__flex'>
              {post?.profileUrl ? (
                <img
                  src={post?.profileUrl}
                  alt='profile'
                  className='post__box-profile-icon'
                />
              ) : (
                <FaCircleUser className='post__box-profile-icon' />
              )}
              <div className='post__email'>{post?.email}</div>
              <div className='post__createdAt'>{post?.createdAt}</div>
            </div>
            <div className='post__box-content'>{post?.content}</div>
          </div>
        </Link>
        <div className='post__box-footer'>
          {/* post.uid === user.uid 일때 */}
          <>
            <button
              type='button'
              className='post__delete'
              onClick={handleDelete}
            >
              Delete
            </button>
            <button type='button' className='post__edit'>
              <Link to={`/posts/edit/${post?.id}`} className='post__edit'>
                Edit
              </Link>
            </button>
            <button type='button' className='post__likes'>
              <AiFillHeart />
              {post?.likeCount || 0}
            </button>
            <button type='button' className='post__comments'>
              <FaRegComment />
              {post?.comments?.length || 0}
            </button>
          </>
        </div>
      </div>
    </>
  );
}
