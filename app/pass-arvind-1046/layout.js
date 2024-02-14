import MainLayout from './MainLayout';

import MenuContextProvider from './MenuContext';

export const metadata = {
  title: 'Nextjs Tailwind SandBox',
  description:
    'This is a tutorial project from DevEmpower YouTube channel: https://www.youtube.com/@DevEmpower',
};

export default function RootLayout({ children }) {
  return (
    
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
     
  );
}
