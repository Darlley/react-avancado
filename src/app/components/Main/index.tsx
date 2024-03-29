import * as S from './styles'

export default function Main({
  title = 'React Avançado',
  description = 'Typecript, ReactS, NextsJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="./logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Headline>{title}</S.Headline>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="./hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  )
}
