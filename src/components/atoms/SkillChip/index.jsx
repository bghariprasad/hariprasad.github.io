import './styles.css';

function SkillChip({ title, icon }) {
  return (
    <section className="border-chip flex justify-center items-center gap-2 px-4 py-2 rounded-lg">
      <img className="w-5 h-5" src={icon} alt={title} />
      <span>{title}</span>
    </section>
  )
}

export default SkillChip