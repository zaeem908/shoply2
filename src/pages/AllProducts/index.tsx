import Menware from '../../components/menware'
import Electronics from '../../components/electronics'
import Cosmetics from '../../components/cosmetics'
import GraphicsCards from '../../components/GraphicsCards'
import BackButton from '../../components/BackButton'
const AllProducts = () => {
  return (
    <div>
        <BackButton/>
     <GraphicsCards/>
        <Electronics/>
        <Cosmetics/> 
          <Menware/>
    </div>
  )
}

export default AllProducts



