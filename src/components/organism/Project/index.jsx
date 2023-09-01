import TitleWithDescription from "../../molecules/TitleWithDescription";

function Project() {
  return (
    <main id="project" className="bg-bgDark min-h-screen">
      <div className="bg-skill min-h-screen">
        <div className="pt-20 px-20 text-text_primary flex justify-center items-center flex-col">
          <TitleWithDescription title="Project" description="Constructing..."/>
          {/* To-Do */}
        </div>
      </div>
    </main>
  )
}

export default Project;