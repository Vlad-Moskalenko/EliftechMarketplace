import { Outlet } from 'react-router-dom';
import { MarketsBar } from '../../components/Marketplace';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <main className={s.main}>
      <MarketsBar />
      <Outlet />
    </main>
  );
};

export default HomePage;
