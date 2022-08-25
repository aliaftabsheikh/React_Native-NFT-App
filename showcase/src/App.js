import React from 'react'
import {Features, Download, SectionWrapper} from "./components"
import assets from "./assets"
import styles from './styles/Global'
const App = () => {
  return (
    <>
    <SectionWrapper
    title="Your own store of Nifty NFTS.
    Start Selling & Growing"
    desc="Buy, Store, Collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
    showBtn
    mockupImg={assets.homeHero}
    banner="banner"
    />

    <SectionWrapper
    title="Smart User Interface Marketplace"
    desc="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
    showBtn
    mockupImg={assets.homeCards}
    reverse
    />
    <Features/>
    <SectionWrapper
    title="Deployment"
    desc="ProNef is build using Expo which runs natively on all users's devices. You can easily get your app into people's hands"
    mockupImg={assets.feature}
    reverse
    />

    <SectionWrapper
    title="Creative way to showcase the store "
    desc="The App contains two screens. The first screen listed all NFTS while the second one shows the details of a specific NFT."
    showBtn
    mockupImg={assets.mockup}
    banner="banner02"
    />
    <Download/>

    <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
      <p className={`${styles.pText} ${styles.whiteText}`}>Made with Love by {" "}
      <span className='bold'>Ali Aftab Sheikh</span>
      </p>
    </div>
    </>
  )
}

export default App