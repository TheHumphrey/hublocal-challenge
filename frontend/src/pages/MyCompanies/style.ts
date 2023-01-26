import styled, { css } from 'styled-components'

export const MyCompaniesContainer = styled.main`
  width: 100vw;
  height: 91%;
`

export const WithCompaniesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 25px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 1212px;
  @media (max-width: 1024px) {
    width: 950px;
  }

  @media (max-width: 768px) {
    width: 700px;
  }
`

export const TableContainer = styled.div`
  width: 1212px;
  height: 433px;
  position: relative;

  background: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (max-width: 1024px) {
    width: 950px;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
`

export const TableHeader = styled.div`
  width: 100%;
  height: 68px;

  display: grid;
  grid-template-columns: 55.2% 18% 1fr;
  border-bottom: 1px solid ${({ theme }) => theme['white-200']};
`

export const TableTitleText = styled.h1`
  display: flex;
  align-items: center;

  padding: 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;

  text-align: left;

  color: ${({ theme }) => theme.black};
`

export const TableBody = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme['white-200']};
  overflow-y: scroll;
`

export const TableLineContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 55.2% 18% 1fr;
  border-bottom: 1px solid ${({ theme }) => theme['white-200']};
`

export const TableLineText = styled.strong`
  display: flex;
  align-items: center;

  padding: 16px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  text-align: left;

  color: ${({ theme }) => theme.black};
`

export const TableFooter = styled.div`
  width: 100%;
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 11px;

  position: absolute;
  bottom: 0;
  border-radius: 0px 0px 5px 5px;
`

export const TableFooterFieldsContainer = styled.div`
  width: 515px;
  height: 44px;
  margin-right: 22px;
  padding: 6px;
  display: flex;
  align-items: center;

  border: 1px solid #E4E4E4;
  border-radius: 5px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;

    text-align: center;

    color: ${({ theme }) => theme.black};
  }
`

interface FooterPageFieldProps {
  withoutRightBorder?: boolean;
}

export const FooterPageField = styled.strong<FooterPageFieldProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  padding: 6px 24px;

  text-align: center;

  color: ${({ theme }) => theme.black};
  ${({ withoutRightBorder }) => !withoutRightBorder && (css`border-right: 1px solid #E4E4E4;`)}
`

export const WithOutCompaniesContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 35px;
`

export const Title = styled.h1`
  width: 37.4375rem;
  height: 8.125rem;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 65px;
  text-align: center;

  color: #000000;
`

