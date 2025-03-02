import { About } from "./_components/About";
import { Hero } from "./_components/Hero";
import { NavigationHeader } from "./_components/NavigationHeader";

export default function Home() {
  return (
    <div>
      <NavigationHeader />
      <Hero />
      <About />
    </div>
  );
}
