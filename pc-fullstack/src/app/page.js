import React from "react"

import Top from "./sections/Top"
import Middle from "./sections/Middle"
import Bottom from "./sections/Bottom"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Top />
      <Middle />
      <Bottom />
    </main>
  )
}
