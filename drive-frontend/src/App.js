import './App.css';
import '../node_modules/bootswatch/dist/yeti/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        <Route path='/' />
        <Route path='/proverbs' />
        <Route path='/proverbs/:id' />
        <Route path='/proverbs/create' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
