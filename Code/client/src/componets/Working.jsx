import styles,{layout} from "../style"
import Button from "./Button"
import { features } from "../constant"
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Working = () => {
  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Securing your payments, <br className="sm:block hidden" />empowering your future.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      PayClosur addresses a critical problem in online transactions by providing a secure platform for users to transfer money without fear of being defrauded by the seller, auction house, or any other party involved. The platform's use of smart contracts ensures that all transactions are transparent and tamper-proof, while its escrow service provides a trusted intermediary to hold the funds until the conditions of the transaction are met. This solution ensures that users can make payments and transactions with confidence, without worrying about fraudulent activity      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default Working