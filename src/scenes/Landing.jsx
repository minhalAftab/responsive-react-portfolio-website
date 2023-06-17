import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
const Landing = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION  (will code this first so on smaller screen this goes on top on bigger side we will force it to be a on second position*/}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32 ">
        {isAboveMediumScreen ? (
          /* <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:border-2 before:max-w-[400px] before:rounded-t-[400px] before:-left-20 before:w-full before:h-full
         before:border-blue before:z-[-1] "
        >*/
          <div className="relative z-0 ml-20">
            <span className="absolute w-full h-full border-2 z-[-1] -top-20 -left-20 rounded-t-[400px] border-blue max-w-[400px]" />
            <img
              alt="profile"
              src="assets/profile-image.png"
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:mx-w-[600px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="assets/profile-image.png"
            className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:mx-w-[600px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
        {/*HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Jane {""}
            <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Exper
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            In this tutorial, we will build and deploy a complete Responsive
            React Portfolio Website. We will be using React, Tailwind CSS,
            Framer Motion and React Hook Form.
          </p>
        </motion.div>
        {/* CALL TO ACTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red
            transition duration-500 w-full h-full flex items-center font-playfair px-10"
            >
              Lets Talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
