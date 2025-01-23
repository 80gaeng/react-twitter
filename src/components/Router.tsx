import PostListPage from 'Pages/posts';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/home/index';
import PostNew from '../Pages/posts/new';
import PostDetail from '../Pages/posts/detail';
import PostEdit from '../Pages/posts/edit';
import ProfilePage from 'Pages/profile';
import ProfileEdit from 'Pages/profile/edit';
import NotificationsPage from 'Pages/notifications';
import SearchPage from 'Pages/search';
import LoginPage from 'Pages/users/login';
import SignupPage from 'Pages/users/signup';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/posts' element={<PostListPage />} />
      <Route path='/posts/:id' element={<PostDetail />} />
      <Route path='/posts/new' element={<PostNew />} />
      <Route path='/posts/edit/:id' element={<PostEdit />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/profile/edit/:id' element={<ProfileEdit />} />
      <Route path='/notifications' element={<NotificationsPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/users/login' element={<LoginPage />} />
      <Route path='/users/signup' element={<SignupPage />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
}
