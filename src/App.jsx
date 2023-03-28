import { useState } from 'react';
import Form from './Form';
export const App = () => {
  const [items, setItems] = useState([]);
  return (
    <section className="section-center">
      <Form />
    </section>
  );
};
