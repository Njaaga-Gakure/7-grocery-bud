import {Form, Items} from './components'
import { ToastContainer} from 'react-toastify';
const App = () => {
  
  return (
    <main>
      <section className='container'>
        <h4 className="section-title"><span>to-do</span> list</h4>
        <Form  />
        <Items />
        <ToastContainer position="top-center" hideProgressBar={true} autoClose={2000} theme="dark"/>
      </section>
    </main>
  )
};

export default App;
