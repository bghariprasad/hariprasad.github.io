import './styles.css';

function SkillCard({ header, children }) {
  return (
    <section className="chip-shadow shadow-lg shadow-white-500/40 border-primary-1 drop-shadow-md w-[26rem] rounded-lg p-5 pb-9 flex items-center flex-col">
      <span className="text-text_secondary text-2xl font-bold">{header}</span>
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        {children}
      </div>
    </section>
  )
}

export default SkillCard;