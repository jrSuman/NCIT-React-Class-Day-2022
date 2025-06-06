import "./App.css";
import DayTwo from "./DayTwo";

function App() {
  const items = ["item 1", "item 2", "item 3", "item 4"];

  const products = [
    {
      title: 'Nike Snikers',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos maiores temporibus voluptatibus iusto ipsa, illo quibusdam minima nam dolores.',
      img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Adidas Running Shoes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos maiores temporibus voluptatibus iusto ipsa, illo quibusdam minima nam dolores.',
      img: 'https://images.unsplash.com/photo-1525858907241-d230b66fb9fa?q=80&w=949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Polo Tshirt',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos maiores temporibus voluptatibus iusto ipsa, illo quibusdam minima nam dolores.',
      img: 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Hiking Shoes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos maiores temporibus voluptatibus iusto ipsa, illo quibusdam minima nam dolores.',
      img: 'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

  return (
    <div>
      <h1 className="text-red-950">Hello Programmer</h1>
      <div className="w-lg h-20 bg-red-500 border rounded"></div>

      {/* {items.map((item, index) => (
        <DayTwo title={item} />
      ))} */}

      {products.map((item, index) => (
        <DayTwo data={item} />
      ))}


    </div>
  );
}




export default App;
