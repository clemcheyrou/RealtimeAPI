import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import { IA } from './pages/IA/IA';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { ConsolePage } from './pages/ConsolePage';
import { Testr3f } from './pages/test/Testr3f';

export const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="ia" element={<ConsolePage />} />
          <Route index path="" element={<Home />} />
          <Route index path="testr3f" element={<Testr3f />} />
    </Route>
    </Routes>
  </Router>
  )
}
