import React from 'react';
import { primary_element_content_background_color } from '@/utils/constants';
export default function CreateExploration({ addItem }: { addItem: any }) {
  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(e.target.url.value);
    addItem(e.target.url.value);
    e.target.url.value = '';
  };
  return (
    <form
      style={{
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primary_element_content_background_color,
        gap: '20px',
      }}
      onSubmit={onSubmit}
    >
      <input type="text" name="url" id="url" autoComplete="off" />
      <button type="submit">Add</button>
    </form>
  );
}
