import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/layouts/Layout';
import ProtectedRoute from './components/layouts/ProtectedRoute';
import PublicRoute from './components/layouts/PublicRoute';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ChangePassword from './pages/ChangePassword';
import PasswordChanged from './pages/PasswordChanged';
import AddChildren from './pages/AddChildren';
import UserProfile from './pages/UserProfile';
import AdminParent from './pages/AdminParent';
import ContentReviewDetail from './pages/ContentReviewDetail';
import ContentReviews from './pages/ContentReviews';
import ExploreTopics from './pages/ExploreTopics';
import LessonDisplay from './pages/LessonDisplay';
import LessonSummary from './pages/LessonSummary';
import AddTopic from './pages/AddTopic';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ToastContainer
          position='top-center'
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route
            path='/sign-in'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/sign-up'
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path='/reset-password'
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path='/reset-password/:uid'
            element={
              <PublicRoute>
                <ChangePassword />
              </PublicRoute>
            }
          />
          <Route
            path='/reset-password/success'
            element={
              <PublicRoute>
                <PasswordChanged />
              </PublicRoute>
            }
          />

          {/* TODO: check what route addchildren should be */}
          <Route path='/add-children' element={<AddChildren />} />

          <Route
            path='/'
            element={
              <PublicRoute>
                <Layout>
                  <LandingPage />
                </Layout>
              </PublicRoute>
            }
          />
          <Route
            path='/user-profile'
            element={
              <ProtectedRoute>
                <Layout footerEnabled={false}>
                  <UserProfile />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <Layout>
                  <AdminParent />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/reviews/detail'
            element={
              <ProtectedRoute>
                <Layout>
                  <ContentReviewDetail />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/reviews'
            element={
              <ProtectedRoute>
                <Layout>
                  <ContentReviews />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/explore-topics'
            element={
              <ProtectedRoute>
                <Layout>
                  <ExploreTopics />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/lesson'
            element={
              <ProtectedRoute>
                <Layout>
                  <LessonDisplay />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/lesson-summary'
            element={
              <ProtectedRoute>
                <Layout>
                  <LessonSummary />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/add-topic'
            element={
              <ProtectedRoute>
                <Layout>
                  <AddTopic />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path='/quiz'
            element={
              <ProtectedRoute>
                <Layout footerEnabled={false}>
                  <Quiz />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
