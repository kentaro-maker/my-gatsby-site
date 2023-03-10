import * as React from "react"

type Props = {
  name: string
}

const Greeting = (props: Props) => {
  return (
    <p>Hi {props.name}!</p>
  )
}

export default Greeting