import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

export default function renderContainer(renderProps) {

  return renderToString(
    <RouterContext { ...renderProps } />
  );
}