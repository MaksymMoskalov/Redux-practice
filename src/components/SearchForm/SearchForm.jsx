import React, { Component, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // state = {
  //   query: '',
  // };

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  // handleInput = e => {
  //   this.setState({
  //     query: e.currentTarget.value,
  //   });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  // handleSubmit = e => {
  //   const { query } = this.state;

  //   e.preventDefault();

  //   this.props.onSubmit(query);

  //   this.setState({
  //     query: '',
  //   });
  // };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
