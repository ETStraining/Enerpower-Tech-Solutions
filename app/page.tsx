import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/mission'); // Automatically redirect to the Mission page
};

export default Home;