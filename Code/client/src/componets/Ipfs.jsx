import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const Ipfs = () => {
  return (
    <section  id = "ipfs"className={layout.section} >
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Store your important  <br className="sm:block hidden" /> data on IPFS.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We are using IPFS (InterPlanetary File System) to store and share data in a decentralized and resilient manner. IPFS allows us to store data on a distributed network of nodes, making it highly available and resistant to censorship and failure.
      </p>

      <Button styles={`mt-10`} />
    </div>
    

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[70%] h-[70%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>
  </section>
       )
}

export default Ipfs