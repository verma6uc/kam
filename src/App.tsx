import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BookNowPage from './pages/BookNowPage';
import HowItWorksPage from './pages/HowItWorksPage';
import MembershipOptionsPage from './pages/MembershipOptionsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="book-now" element={<BookNowPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="membership" element={<MembershipOptionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
