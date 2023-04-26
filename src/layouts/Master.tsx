import Footer from '../components/footer'
import Header from '../components/header'


const Master = ({children}:any) => {
  return (
   <div>
    <Header/>
      {children}
    <Footer/>
   </div>
  )
}

export default Master
