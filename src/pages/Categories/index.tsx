import BestSellers from '../../components/bestSellers'
import ComponentsBar from './components/ComponentsBar'
import Master from '../../layouts/Master'

const Categories = () => {

  return (
    <div>
      <Master>
      <ComponentsBar/>
      <BestSellers/>
      </Master>
    </div>
  )
}

export default Categories


