<<<<<<< HEAD
=======
import dynamic from 'next/dynamic';

const Main = dynamic(() => import('./component/mainp'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  );
};
>>>>>>> 723d76a14853437b3fb71f6e8fe41eb1ec942bb2
