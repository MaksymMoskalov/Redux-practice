import { Container, Header, SearchForm, Section } from 'components';
import { TodoList } from 'components/todoList/todoList';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
