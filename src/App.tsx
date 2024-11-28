import { Footer } from './components/footer/footer'
import { MainContent } from './components/main-content/main-content'
import { Navbar } from './components/navbar/navbar'

export const App = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  )
}