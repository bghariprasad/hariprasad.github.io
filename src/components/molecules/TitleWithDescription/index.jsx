function TitleWithDescription({title, description}) {
  return (
    <section className="text-center">
      <span className="text-4xl font-semibold">{title}</span>
      <p className="text-lg text-text_secondary mt-3">{description}</p>
    </section>
  )
}

export default TitleWithDescription