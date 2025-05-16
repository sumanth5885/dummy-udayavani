'use client';

import { Provider } from 'react-redux';
import store from './store';
import Toaster from '@/app/ClientComponents/Toaster/Toaster';


export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
}