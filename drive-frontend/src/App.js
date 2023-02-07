import './App.css';
import '../node_modules/bootswatch/dist/yeti/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterableTable from './components/FilterableTable/FilterableTable';
import CreateForm from './components/CreateForm/CreateForm';

function App() {
  return (
    <div className="App">
      <Header
        title='Drive'
        navItems={[
          {
            name: 'Proverbs',
            url: '/proverbs'
          },
          {
            name: 'Add',
            url: '/proverbs/create'
          },
        ]}
      />
      <Routes>
        <Route path='/' element={<FilterableTable />} />
        <Route path='/proverbs' element={<FilterableTable />} />
        {/* <Route path='/proverbs/:id' /> */}
        <Route path='/proverbs/create' element={<CreateForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
