import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services/>
    </Layout>
  )
}
