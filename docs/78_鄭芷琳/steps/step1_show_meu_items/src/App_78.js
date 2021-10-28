import Menu_78 from './components/Menu_78'
import items from './data';
import {useState} from 'react';

function App_78() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <div >
      <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Menu_78 items={items} />
    </section>
  </main>
    </div>
  );
}

export default App_78;
