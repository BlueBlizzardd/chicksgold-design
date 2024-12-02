import { Footer } from './components/footer/footer'
import { MainContent } from './components/main-content/main-content'
import { Navbar } from './components/navbar/navbar'
import { PayMethods } from './components/paymethods/paymethods'
import { CartContext, counter } from './context/cart'

export const App = () => {
  return (
    <CartContext.Provider value={counter} >
      <Navbar />
      <MainContent />
      <PayMethods />
      <Footer />
    </CartContext.Provider>
  )
}