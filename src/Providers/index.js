'use client';
import Store from '@/state/store';
import { Provider } from 'react-redux';

function Providers({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}

export default Providers;
