import { publicRuntimeConfig } from '../../next.config.js';
import Form from './components/Form';

export default function Home() {

  const stars = [];
  for(let i = 0; i < 20 ; i++) {
    stars.push(<div className="shooting_star" key={i} aria-hidden="true"></div>)
  }

  return (
    <main className="flex flex-col items-center justify-center text-black max-w-screen">
      {stars}
      <h2 className="my-4 text-3xl tracking-wider font-bold text-center text-white text-shadow-sm opacity-90">Create Images With Your Imagination</h2>
      <Form publicRuntimeConfig={publicRuntimeConfig}/>
    </main>
  );
}
