import Head from 'next/head';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';





const Index = () => {
  return (
    <Layout pageTitle="Benfolio">
      
      <Hero />
      <About />
     
      <Footer />
    </Layout>
  )
}

export default Index;
