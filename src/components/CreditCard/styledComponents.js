import styled from 'styled-components'

export const CreditCardBgContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const AppContainer = styled.div`
  background-color: #384b68;
  padding: 15px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 15px;
  padding-top: 45px;
  padding-bottom: 15px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  width: 100%;
  max-width: 400px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 28px;
`

export const CardBgContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }
`
export const CardTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  border-bottom: 3px solid #ffd773;
  width: 150px;
  align-self: center;
  color: #ffffff;
`
export const CardHolderNameTag = styled.p`
  color: #d3d9e0;
  font-size: 12px;
  font-weight: 500;
`

export const Name = styled.p`
  color: #ffffff;
  font-size: 13px;
`
export const CardDetailsBgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  @media screen and (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }
`

export const BgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  width: 90%;
  height: 250px;
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const PaymentTitle = styled.h1`
  color: #475569;
  font-size: 20px;
`

export const PaymentInput = styled.input`
  border: 1px solid #d3d9e0;
  height: 45px;
  width: 100%;
  margin-top: 20px;
  outline: none;
  padding-left: 15px;
`
