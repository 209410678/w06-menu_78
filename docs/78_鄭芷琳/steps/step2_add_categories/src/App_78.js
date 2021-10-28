import Menu_78 from './components/Menu_78'
import Category_78 from './components/Category_78';
import items from './data';
import {useState} from 'react';
import category_78 from './components/Category_78';

const allCategories = [`all`, ...new Set(items.map( item => item.category))] 
console.log('allCategories',allCategories);

function App_78() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  return (
    <div >
      <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category_78 categories={categories}/>
      <Menu_78 items={items} />
    </section>
  </main>
    </div>
  );
}

export default App_78;
