import './App.css';
//import '../node_modules/bootswatch/dist/yeti/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterableList from './components/FilterableList';
import CreateProverbForm from './components/CreateProverbForm';
import EditProverbForm from './components/EditProverbForm';
import { NotificationContainer } from 'react-notifications';
import '../node_modules/react-notifications/dist/react-notifications.css';
import ScrollToTop from 'react-scroll-to-top';
import { properties as p } from './data/properties';
import Statistics from './components/Statistics';

const navItems = [
  {
    name: 'Proverbs',
    url: '/proverbs'
  },
  {
    name: 'Add',
    url: '/proverbs/create'
  },
  {
    name: 'Statistics',
    url: '/proverbs/statistics'
  },
];

function App() {
  return (
    <div className="App vh-100 d-flex flex-column">
      <Header appName={p.APP_NAME} navItems={navItems}/>
      <div className='my-4'>
        <Routes>
          <Route path='/' element={<FilterableList />} />
          <Route path='/proverbs' element={<FilterableList />} />
          <Route path='/proverbs/create' element={<CreateProverbForm />} />
          <Route path='/proverbs/edit/:id' element={<EditProverbForm />} />
          <Route path='/proverbs/statistics' element={<Statistics />} />
        </Routes>
        <ScrollToTop />
        <NotificationContainer />
      </div>
      <Footer
        appName={p.APP_NAME}
      />
    </div>
  );
}

export default App;
