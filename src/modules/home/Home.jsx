import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <Featured></Featured>
      <List name={'Continue to watch'}></List>
      <List name={'Because you watched XYZ'}></List>
      <List name={'Because you watched ABC'}></List>
    </div>
  )
}

export default Home