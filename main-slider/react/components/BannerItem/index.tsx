import React from 'react'
import { WButton } from 'corebizio.ui'
import { useDevice } from "vtex.device-detector";
import styles from './styles.css'

export interface IButtom {
  text: string
  link: string
}

export interface IBannerItem {
  index: number
  image: string
  imageMobile: string
  linkImage: string
  linkImageMobile: string
  title: string
  description: string
  buttomPrimary: IButtom
  buttomSecundary: IButtom
  showInformation: boolean
}

const BannerItem = ({
  index,
  image,
  imageMobile,
  linkImage,
  linkImageMobile,
  title,
  description,
  buttomPrimary,
  buttomSecundary,
  showInformation
}: IBannerItem) => {

  const { isMobile } = useDevice()
  const mainImage = isMobile ? imageMobile ? imageMobile : image : image
  const link = isMobile ? linkImageMobile : linkImage
  const container = isMobile ? styles.infosContainerMobile : styles.infosContainer
  const shadow = isMobile ? styles.shadowMobile : styles.shadow
  const isButtomPrimary = !!Object.keys(buttomPrimary).length && !!buttomPrimary?.text
  const isButtomSecundary = !!Object.keys(buttomSecundary).length && !!buttomSecundary?.text

  return (
    <section className={styles.slide} key={'items-' + { index }}>
      <a href={link}>
        <img src={mainImage} className={styles.cardImage} />
        {
          title && !!showInformation && (<>
            <div className={shadow}></div>
            <div className={container}>
              <h5 className={styles.subTitle}>{title}</h5>
              <h6 className={styles.description}>{description}</h6>

              <div className={styles.actionsContainer}>
                { isButtomPrimary && (<WButton href={buttomPrimary.link}>{buttomPrimary.text}</WButton>)}
                { isButtomSecundary && (<WButton href={buttomSecundary.link} variation="secondary">{buttomSecundary.text}</WButton>)}
              </div>
            </div>
          </>)
        }
      </a>
    </section>
  )
}

export default BannerItem
