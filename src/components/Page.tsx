import { ReactNode } from 'react'
import { Header } from './Header/Header'

const Page = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Page
