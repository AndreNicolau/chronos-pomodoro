import { Container } from '../../components/Container';
import { MainTemplate } from '../../components/templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>404 - Página não encontrada.</h1>
      </Container>
    </MainTemplate>
  );
}
