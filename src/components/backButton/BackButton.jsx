import React from 'react'
import { BackButtonDiv, ArrowImage, ButtonText } from './BackButton.styles'

function BackButton() {
  return (
    <div>
      <BackButtonDiv>
        <ArrowImage />
        <ButtonText>BACK</ButtonText>
      </BackButtonDiv>
    </div>
  )
}

export default BackButton
