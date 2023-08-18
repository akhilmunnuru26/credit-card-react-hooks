import {useState} from 'react'

import {
  AppContainer,
  Card,
  CardNumber,
  CardBgContainer,
  CardTitle,
  CardHolderNameTag,
  Name,
  CardDetailsBgContainer,
  BgCard,
  PaymentTitle,
  PaymentInput,
  CreditCardBgContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const getCardNumber = event => {
    if (event.target.value !== '') {
      setCardNumber(event.target.value)
    }
  }

  const getCardHolderName = event => {
    if (event.target.value !== '') {
      setCardHolderName(event.target.value)
    }
  }

  return (
    <CreditCardBgContainer>
      <AppContainer>
        <CardTitle>CREDIT CARD</CardTitle>
        <CardBgContainer>
          <Card>
            <CardNumber>{cardNumber}</CardNumber>
            <div>
              <CardHolderNameTag>CARDHOLDER NAME</CardHolderNameTag>
              <Name>{cardHolderName.toUpperCase()}</Name>
            </div>
          </Card>
        </CardBgContainer>
      </AppContainer>
      <CardDetailsBgContainer>
        <BgCard>
          <PaymentTitle>Payment Method</PaymentTitle>
          <PaymentInput onChange={getCardNumber} placeholder="Card Number" />
          <PaymentInput
            onChange={getCardHolderName}
            placeholder="Cardholder Name"
          />
        </BgCard>
      </CardDetailsBgContainer>
    </CreditCardBgContainer>
  )
}

export default CreditCard
