import { render, screen, act } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { StoryContext } from '@storybook/react'

import { INPUT_ERR, INPUT_SELECTOR } from './Input'
import * as stories from './Input.story'
import { userEvent } from '@storybook/testing-library'

const {
  Default,
  Controlled,
  Email
} = composeStories(stories)

it('should be possible to use a text input', async () => {
  render(<Default />)

  expect(
    await screen.findByTestId(INPUT_SELECTOR)
  ).toBeInTheDocument()
})

it('should be possible to control a text input', async () => {
  const onChange = jest.fn()
  const { container } = render(<Controlled onChange={onChange} />)

  await act(async () => {
    await Controlled.play({ canvasElement: container } as StoryContext<any>)
  })

  expect(
    onChange
  ).toHaveBeenCalledTimes('hello world'.length)
})

it('should be possible to use email input', async () => {
  render(<Email />)

  expect(
    await screen.findByTestId(INPUT_SELECTOR)
  ).toBeInTheDocument()
})

it('should show error when email input is incorrect', async () => {
  const { findByTestId, queryByTestId } = render(<Email />)
  let err: HTMLElement = null

  await act(async () => {
    userEvent.type(await findByTestId(INPUT_SELECTOR), 'incorrect email.com')
    err = queryByTestId(INPUT_ERR)
  })

  expect(
    err
  ).not.toBeNull()
})

it('should not show error when email input is correct', async () => {
  const { findByTestId, queryByTestId } = render(<Email />)
  let err: HTMLElement = null

  await act(async () => {
    userEvent.type(await findByTestId(INPUT_SELECTOR), 'correct@email.com')
    err = queryByTestId(INPUT_ERR)
  })

  expect(
    err
  ).toBeNull()
})
