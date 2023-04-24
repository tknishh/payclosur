import styles from "../style";
import { discount, robot ,arrowUp} from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-12 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"></span> Submisson for{" "}
            <span className="text-white"> gfg Solve for india 2023</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold w-[143px] ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation
            <div className="absolute z-[1] w-[50%] h-[50%] rounded-full blue__gradient bottom-70" />
</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        PayClosur's main USP is its ability to provide users with a secure and trustworthy platform for online payments and transactions, ensuring that they can transfer money without the fear of being defrauded by the seller, auction house, or any other party involved in the transaction.
        </p>
      </div>

      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-40 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;