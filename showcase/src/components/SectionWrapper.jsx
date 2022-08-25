import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "../components/Button";
const SectionWrapper = ({ title, desc, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div className={`flex items-center ${reverse ? styles.boxReverseClass :styles.boxClass} w-11/12 sm:w-full minmd: w-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini": "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
          <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>{title}</h1>
          <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>{desc}</p>
          {showBtn && (
            <Button assetUrl={assets.expo} link="https://expo.dev/@aliaftabsheikh/React_Native-NFT-App?serviceType=classic&distribution=expo-go" />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} px-8 sm:px-0`}>
          <img src={mockupImg} alt="mockup" className={`styles.sectionImg ${reverse ? "fadeLeftMini": "fadeRightMini"}`}/>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
