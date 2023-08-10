import { About } from "../components/Container/About";
import { Banner } from "../components/Container/Banner";
import { Contact } from "../components/Container/Contact";
import { Pricing } from "../components/Container/Pricing";
import Client from "../layouts/Client";


export default function Home() {
  return (
    <Client metaTitle='Home' metaDescription='Home'>
      <div className="home-container">
        <Banner />
        <About />
        <Pricing/>
        <Contact/>
      </div>
    </Client>
  )
}
