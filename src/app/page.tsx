import { publicRuntimeConfig } from '../../next.config.js';
import Form from './components/Form';

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center text-black max-w-screen">
      <h2 className="my-4 text-3xl tracking-wider font-bold text-center text-shadow-sm opacity-90">Create Images With Your Mind</h2>
      <Form publicRuntimeConfig={publicRuntimeConfig}/>
    </main>
  );
}
