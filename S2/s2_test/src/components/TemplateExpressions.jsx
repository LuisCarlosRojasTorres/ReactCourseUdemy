const TemplateExpressions = () => {
  const name = "DummyName";
  const data = { age: 25, city: "DummyCity" };
  return (
    <div>
      <h2>Template Expressions</h2>
      <p>Olá, {name}!</p>
      <p>Idade: {data.age}</p>
      <p>Cidade: {data.city}</p>
      <p> {console.log("Log: Rendering TemplateExpressions component")}</p>
    </div>
  )
}

export default TemplateExpressions;