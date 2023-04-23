import React from 'react'
import { render } from '@testing-library/react'

import Layout from '../components/layout'

describe('Layout tests', () => {
  test('It displays default title', () => {
    const { getByRole } = render(<Layout />)
    const expectedTitle = 'Assignment 5 - Gatsby | Ioannis'

    expect(getByRole('heading', { level: 1 })).toHaveTextContent(expectedTitle)
  })

  test('It displays custom title', () => {
    const expectedTitle = 'Custom Title'
    const { getByRole } = render(<Layout title={expectedTitle} />)

    expect(getByRole('heading', { level: 1 })).toHaveTextContent(expectedTitle)
  })

  test('It modifies classname based on pageId', () => {
    const pageId = 'test'
    const { container } = render(<Layout pageId={pageId} />)

    expect(container.getElementsByClassName(pageId).length).toBe(1)
  })
})
