import './styles.css';

function ExperienceCard({image, designation, companyName, duration, location, skills}) {
  return (
    <main className='chip-shadow border-primary-1 drop-shadow-md w-[35rem] rounded-lg p-5 pb-5'>
      <section className=" flex flex-row gap-5">
        <div className='h-14 w-14 mt-2'>
          <img className="rounded-lg" src={image} title={companyName} />
        </div>
        <div className='flex flex-col'>
          <span className='text-text_primary text-lg font-bold'>{designation}</span>
          <span className='text-text_secondary text-[14px] font-medium'>{companyName}</span>
          <span className='text-text_secondary text-[12px]'>{duration}</span>
          <span className='text-text_secondary text-[12px]'>{location}</span>
        </div>
      </section>
      <div className='text-text_primary text-[14px] mt-5 flex-wrap flex-row gap-2'>
        {skills.map((skill, index) => (
          <div key={index} className='inline-block'>
            <span>{skill}</span>
            <span className='mx-2'>{index !== skills.length-1 && '◽'}</span>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ExperienceCard