import React from 'react'

import { Button } from 'vtex.styleguide'

import styles from './styles'

const WButton: React.FC = (props: any) => {
  return (
    <div className={`${styles.WButton}`}>
      <Button {...props}>{props.children}</Button>
    </div>
  )
}

export default WButton
