import * as S from './footer.styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../../pages/modals/newModal'

export const Footer = () => {
  const [isModal, setModal] = useState(false)

  const toggleModal = () => {
    setModal((prev) => !prev)
  }
  return (
    <>
      {isModal && <Modal isModal={toggleModal}></Modal>}

      <S.Footer data-id="footer">
        <S.FooterContainer data-id="footer__container">
          <S.FooterImg data-id="footer__img">
            <Link to="/">
              <img src="/img/icon_01.png" alt="home" />
            </Link>
          </S.FooterImg>
          <S.FooterImg data-id="footer__img" onClick={toggleModal}>
            <img src="/img/icon_02.png" alt="home" />
          </S.FooterImg>
          <S.FooterImg data-id="footer__img">
            <Link to="/profile">
              <img src="/img/icon_03.png" alt="home" />
            </Link>
          </S.FooterImg>
        </S.FooterContainer>
      </S.Footer>
    </>
  )
}
