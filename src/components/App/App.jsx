import { Component, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ?? []
  );

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem('todos'));
  //   if (todos) {
  //     setTodos(todos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevState.todos !== todos) {

  //   }
  // }

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, todo]);
  };

  // addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   this.setState(({ todos }) => ({
  //     todos: [...todos, todo],
  //   }));
  // };

  const handleSubmit = data => {
    addTodo(data);
  };

  // handleSubmit = data => {
  //   this.addTodo(data);
  // };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // deleteTodo = id => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id),
  //   }));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
