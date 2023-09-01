import FrontendSkillCard from "../../molecules/FrontendSkillCard";
import OtherSkillCard from "../../molecules/OtherSkillCard";
import TitleWithDescription from "../../molecules/TitleWithDescription";

function Skill() {

  return (
    <main id="skills" className="bg-bgDark min-h-screen">
      <div className="bg-skill min-h-screen">
        <div className="pt-20 px-20 text-text_primary flex justify-center items-center flex-col">
          <TitleWithDescription title="Skills" description="Here are some of my skills on which I have been working on for the past 6 years."/>
          <div className="flex gap-9 pt-10">
            <FrontendSkillCard />
            <OtherSkillCard />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Skill;