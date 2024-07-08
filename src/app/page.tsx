import { CTA } from './Components/CTA';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import './styles.scss';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      <Main />
      <CTA />
    </main>
  );
}
