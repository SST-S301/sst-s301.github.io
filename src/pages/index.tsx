import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeHeader from "../components/home/header";

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={`${siteConfig.title} Documentation`}
    >
      <HomeHeader />
      <main>
        
      </main>
    </Layout>
  );
}
