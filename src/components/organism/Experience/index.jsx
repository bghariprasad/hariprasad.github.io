import ExperienceCard from "../../molecules/ExperienceCard";
import TitleWithDescription from "../../molecules/TitleWithDescription";

import TekionImage from '../../../assets/icons/tekion.jpg';
import PresidioImage from '../../../assets/icons/presidio.jpg';
import ZerplabsImage from '../../../assets/icons/zerplabs.jpg';
import Ideas2itImage from '../../../assets/icons/ideas2it.jpg';

const experienceData = [
  {
    image: TekionImage, 
    designation: 'Software Engineer',
    companyName: 'Tekion Corp',
    duration: 'May 2022 - Present',
    location: 'Chennai, Tamil Nadu, India',
    skills : [ 'Front-End Development', 'GitHub', 'REST APIs', 'Generic Programming', 'Web Standards', 'Communication', 'Software Development', 'Web Applications']
  },
  {
    image: PresidioImage, 
    designation: 'Senior Software Engineer',
    companyName: 'Presidio',
    duration: 'Jan 2021 - May 2022',
    location: 'Coimbatore, Tamil Nadu, India',
    skills : [ 'Object-Oriented Programming (OOP)', 'Front-End Development', 'GitHub', 'Web Standards', 'Communication', 'Software Development', 'Web Applications']
  },
  {
    image: ZerplabsImage, 
    designation: 'Frontend Developer',
    companyName: 'Zerp Labs',
    duration: 'Feb 2020 - Jan 2021',
    location: 'Coimbatore, Tamil Nadu, India',
    skills : [  'Front-End Development', 'GitHub', 'REST APIs', 'Web Standards', 'Communication', 'Software Development', 'Web Applications']
  },
  {
    image: Ideas2itImage, 
    designation: 'Software Developer',
    companyName: 'Ideas2IT Technologies',
    duration: 'Oct 2017 - Jan 2020',
    location: 'Chennai Area, India',
    skills : [ 'Front-End Development', 'GitHub', 'REST APIs', 'Flux', 'Communication', 'Software Development',' Web Applications']
  },
];

function Experience() {
  return (
    <main id="experience" className="bg-bgDark min-h-screen">
      <div className="min-h-screen">
        <div className="pt-20 px-20 text-text_primary flex justify-center items-center flex-col">
          <TitleWithDescription title="Experience" description="My work experience as a software engineer and working on different companies and projects."/>
          <div className="flex gap-9 pt-10 flex-col">
            {experienceData.map((data, index) => <ExperienceCard key={index} {...data}/>)}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Experience;