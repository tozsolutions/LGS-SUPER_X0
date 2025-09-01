import { Navbar } from '@/components/Layout/Navbar';
import { Hero } from '@/components/Home/Hero';
import { Features } from '@/components/Home/Features';
import { Stats } from '@/components/Home/Stats';
import { Footer } from '@/components/Layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}