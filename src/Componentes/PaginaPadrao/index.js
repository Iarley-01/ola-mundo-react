import { Outlet } from 'react-router-dom';

import Banner from 'Componentes/Banner';

export default function PaginaPadrao() {
  return (
    <main>
      <Banner />
      
      <Outlet />
    </main>
  );
}