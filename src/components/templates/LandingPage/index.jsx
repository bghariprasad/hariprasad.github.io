import Header from '../../molecules/Header';
import About from '../../organism/About';
import Experience from '../../organism/Experience';
import Project from '../../organism/Project';
import Skill from '../../organism/Skills';

function LandingPage() {
  return (
    <section>
      <Header />
      <About />
      <Skill />
      <Experience />
      <Project />
    </section>
  )
}

export default LandingPage;