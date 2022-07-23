import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import { SubscribeButton } from '.'

jest.mock('next-auth/react')

jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false] as any)

    render( <SubscribeButton /> )

    expect(screen.getByText('Subscribe now')).toBeInTheDocument() 
  })


  it('redirects users to signIn when not authenticated', () => {
    const signInMocked = jest.mocked(signIn)
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false] as any)


    render( <SubscribeButton /> )

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  }) 

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter)
    const useSessionMocked = jest.mocked(useSession)

    const pushMock = jest.fn()
    
    useSessionMocked.mockReturnValueOnce(
      {
        data: {
          user : {
            name: "John Doe",
            email: "john.doe@example.com",
          },
          activeSubscription: 'fake-active-buscription',
          expires: "fake-expires"
        },
        status: "authenticated",
      }
    )

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any )

    render( <SubscribeButton /> )

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(useRouterMocked).toHaveBeenCalled()
  })
})
