import { Form } from "react-router-dom";

export const SearchInput = () => {
  return (
    <Form
      action="/items"
      role="search"
      id="search-form"
      aria-label="Buscar productos"
    >
      <input name="search" type="search" placeholder="Search" />
      <button type="submit" value="Search">
        Buscar
      </button>
    </Form>
  );
};
