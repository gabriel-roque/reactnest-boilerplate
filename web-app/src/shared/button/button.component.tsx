import React from 'react';

interface Props {
  title?: string;
}

export function Button({ title }: Props) {
  return <button>{title ? title : 'Send'}</button>;
}
