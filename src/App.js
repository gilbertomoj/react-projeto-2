import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
// import img from './images/img.jpg';
// import img_2 from './images/img-2.jpg';


function App() {
  
  const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
    {width: 1500, itemsToShow: 4},
  ]

  return (
    <div className="App">
      <Carousel breakPoints={breakPoints}>
        <Card image={1} />
        <Card image={2} />
        <Card image={3} />
        <Card image={4} />
        <Card image={5} />
        <Card image={6} />
        <Card image={7} />
      </Carousel>
    </div>
  );
}

export default App;
