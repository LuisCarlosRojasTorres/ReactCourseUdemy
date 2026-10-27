
const ChildrenPropExample = ({children, value}) => {
  return (
    <div>
      <h1>Children Prop Example</h1>
      {children}
      <p>Value prop: {value}</p>
    </div>
  )
}

export default ChildrenPropExample