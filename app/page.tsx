import dynamic from 'next/dynamic';

const Main = dynamic(() => import('./component/mainp'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
};
