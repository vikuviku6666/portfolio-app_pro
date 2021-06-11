import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "FrontEnd Development",
    text: `Worked on React, Redux, Typescript, Graphql, SASS, Styled Component, GatsBy, NextJS, Jest`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "BackEnd Development",
    text: `Build API with Node and C# and Worked on PostgreSQL, MSSQL and MONGO db, also Build serverless API with AWS`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Devops",
    text: `Worked on Git & Github, Linux, Jenkins, CI & CD Pipeline, Azure devops, Docker, Kubernetes, Terraform, AWS, AZURE `,
  },
]
