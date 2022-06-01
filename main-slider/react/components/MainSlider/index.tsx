import React from 'react'
import { defineMessages } from 'react-intl'
import SliderLayout from 'vtex.slider-layout/SliderLayout'
import BannerItem from '../BannerItem'
import styles from './styles.css'

import { IBannerItem } from '../BannerItem'

enum WhenToShow {
  Desktop = "desktopOnly",
  Mobile = "mobileOnly",
  Always = "always",
  Never = "never",
}

interface IMainSlider {
  active: boolean
  items: IBannerItem[]
  slideTime: number
  slideArrows: WhenToShow
  slideDots: WhenToShow
  slideInfinite: boolean
  slideItems: number
}

const MainSlider = ({
  active,
  items,
  slideTime,
  slideArrows,
  slideDots,
  slideItems,
  slideInfinite
}: IMainSlider) => {

  const itemsPerPage = {
    desktop: 1,
    tablet: 1,
    phone: 1,
  }

  const centerMode = {
    desktop: "disabled",
    tablet: "disabled",
    phone: "disabled",
  }

  const slideTransition = {
    speed: 400,
    delay: 0,
    timing: ''
  }

  const autoplay = {
    timeout: (slideTime * 1000),
    stopOnHover: true
  }

  return (
    <div className={styles.mainSlider}>
      {active && (<>
        <SliderLayout
          itemsPerPage={itemsPerPage}
          showPaginationDots={slideDots}
          infinite={slideInfinite}
          showNavigationArrows={slideArrows}
          maxItems={slideItems}
          fullWidth={true}
          centerMode={centerMode}
          slideTransition={slideTransition}
          autoplay={autoplay}
        >
          {items && items.map((i, index) => <BannerItem {...{ ...i, index }} />)}
        </SliderLayout>
      </>)}
    </div>
  )
}

const messages = defineMessages({
  componentTitle: {
    id: 'admin/editor.main-slider.title',
    defaultMessage: '',
  },
  componentActivation: {
    id: 'admin/editor.main-slider.activation',
    defaultMessage: '',
  },
  componentInfinite: {
    id: 'admin/editor.main-slider.infinite',
    defaultMessage: '',
  },
  componentNumberItems: {
    id: 'admin/editor.main-slider.NumberItems',
    defaultMessage: '',
  },
  componentTransitionTime: {
    id: 'admin/editor.main-slider.transitionTime',
    defaultMessage: '',
  },
  componentShowArrows: {
    id: 'admin/editor.main-slider.showArrows',
    defaultMessage: '',
  },
  componentShowDots: {
    id: 'admin/editor.main-slider.showDots',
    defaultMessage: '',
  },
  componentItemsTitle: {
    id: 'admin/editor.main-slider.items.title',
    defaultMessage: '',
  },
  componentItemImage: {
    id: 'admin/editor.main-slider.item.image',
    defaultMessage: '',
  },
  componentItemImageMobile: {
    id: 'admin/editor.main-slider.item.image-mobile',
    defaultMessage: '',
  },
  componentItemTitle: {
    id: 'admin/editor.main-slider.item.title',
    defaultMessage: '',
  },
  componentItemDescription: {
    id: 'admin/editor.main-slider.item.description',
    defaultMessage: '',
  },
  componentItemImageLink: {
    id: 'admin/editor.main-slider.item.imageLink',
    defaultMessage: '',
  },
  componentItemImageLinkMobile: {
    id: 'admin/editor.main-slider.item.imageLinkMobile',
    defaultMessage: '',
  },
  componentItemShowInfo: {
    id: 'admin/editor.main-slider.item.showInfo',
    defaultMessage: '',
  },
  componentItemButtonsTitle: {
    id: 'admin/editor.main-slider.item.buttons.title',
    defaultMessage: '',
  },
  componentItemButtonPrimaryTitle: {
    id: 'admin/editor.main-slider.item.buttons.primaryTitle',
    defaultMessage: '',
  },
  componentItemButtonPrimaryText: {
    id: 'admin/editor.main-slider.item.buttons.primaryText',
    defaultMessage: '',
  },
  componentItemButtonPrimaryLink: {
    id: 'admin/editor.main-slider.item.buttons.primaryLink',
    defaultMessage: '',
  },
  componentItemButtonSecondaryTitle: {
    id: 'admin/editor.main-slider.item.buttons.secondaryTitle',
    defaultMessage: '',
  },
  componentItemButtonSecondaryText: {
    id: 'admin/editor.main-slider.item.buttons.secondaryText',
    defaultMessage: '',
  },
  componentItemButtonSecondaryLink: {
    id: 'admin/editor.main-slider.item.buttons.secondaryLink',
    defaultMessage: '',
  },
  enumDesktop: {
    id: 'admin/editor.main-slider.enum.desktop',
    defaultMessage: '',
  },
  enumMobile: {
    id: 'admin/editor.main-slider.enum.mobile',
    defaultMessage: '',
  },
  enumAlways: {
    id: 'admin/editor.main-slider.enum.always',
    defaultMessage: '',
  },
  enumNever: {
    id: 'admin/editor.main-slider.enum.never',
    defaultMessage: '',
  },
})

const defaultProps = {
  active: false,
  slideItems: 5,
  slideTime: 4,
  slideArrows: WhenToShow.Desktop,
  slideDots: WhenToShow.Always,
  slideInfinite: true,
  items: [],
}

MainSlider.defaultProps = defaultProps

MainSlider.schema = {
  title: messages.componentTitle.id,
  type: 'object',
  properties: {
    active: {
      type: 'boolean',
      title: messages.componentActivation.id,
      default: defaultProps.active,
    },
    slideInfinite: {
      type: 'boolean',
      title: messages.componentInfinite.id,
      default: defaultProps.slideInfinite,
    },
    slideItems: {
      type: 'number',
      title: messages.componentNumberItems.id,
      default: defaultProps.slideItems,
    },
    slideTime: {
      type: 'number',
      title: messages.componentTransitionTime.id,
      default: defaultProps.slideTime,
    },
    slideArrows: {
      type: 'string',
      title: messages.componentShowArrows.id,
      enum: ["desktopOnly", "mobileOnly", "always", "never"],
      enumNames: [messages.enumDesktop.id, messages.enumMobile.id, messages.enumAlways.id, messages.enumNever.id],
      widget: { 'ui:widget': 'select' }
    },
    slideDots: {
      type: 'string',
      title:  messages.componentShowDots.id,
      enum: ["desktopOnly", "mobileOnly", "always", "never"],
      enumNames: [messages.enumDesktop.id, messages.enumMobile.id, messages.enumAlways.id, messages.enumNever.id],
      widget: { 'ui:widget': 'select' }
    },
    items: {
      type: 'array',
      title: messages.componentItemsTitle.id,
      default: defaultProps.items,

      items: {
        type: 'object',
        title: messages.componentItemsTitle.id,

        properties: {

          image: {
            type: 'string',
            title: messages.componentItemImage.id,
            widget: { 'ui:widget': 'image-uploader' },
          },

          linkImage: {
            type: 'string',
            title: messages.componentItemImageLink.id,
          },

          imageMobile: {
            type: 'string',
            title: messages.componentItemImageMobile.id,
            widget: { 'ui:widget': 'image-uploader' },
          },

          linkImageMobile: {
            type: 'string',
            title: messages.componentItemImageLinkMobile.id,
          },

          showInformation: {
            type: 'boolean',
            title: messages.componentItemShowInfo.id,
            default: false
          },

          title: {
            type: 'string',
            title: messages.componentItemTitle.id,
          },

          description: {
            type: 'string',
            title: messages.componentItemDescription.id,
          },

          buttomPrimary: {
            type: 'object',
            title: messages.componentItemButtonPrimaryTitle.id,
            properties: {
              text: {
                type: 'string',
                title: messages.componentItemButtonPrimaryText.id,
              },
              link: {
                type: 'string',
                title: messages.componentItemButtonPrimaryLink.id,
              },
            }
          },

          buttomSecundary: {
            type: 'object',
            title: messages.componentItemButtonSecondaryTitle.id,
            properties: {
              text: {
                type: 'string',
                title: messages.componentItemButtonSecondaryText.id,
              },
              link: {
                type: 'string',
                title: messages.componentItemButtonSecondaryLink.id,
              },
            }
          },
        },
      },
    },
  },
}

export default MainSlider
