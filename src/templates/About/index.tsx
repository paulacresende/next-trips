import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Home" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        repudiandae temporibus ea pariatur nulla ratione! Culpa suscipit tempora
        eaque porro dolor nobis, sit commodi at doloribus illum, fugit maiores
        officiis.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
