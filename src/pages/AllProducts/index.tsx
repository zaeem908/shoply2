import Menware from '../../components/menware'
import Electronics from '../../components/electronics'
import Cosmetics from '../../components/cosmetics'
import GraphicsCards from '../../components/GraphicsCards'
import BackButton from '../../components/BackButton'
import Master from '../../layouts/Master'
const AllProducts = () => {
  return (
    <div>
      <Master>
        <BackButton/>
     <GraphicsCards/>
        <Electronics/>
        <Cosmetics/> 
          <Menware/>
      </Master>
    </div>
  )
}

export default AllProducts



