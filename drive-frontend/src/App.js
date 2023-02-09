import './App.css';
//import '../node_modules/bootswatch/dist/yeti/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FilterableList from './components/FilterableList/FilterableList';
import CreateProverbForm from './components/CreateProverbForm/CreateProverbForm';
import EditProverbForm from './components/EditProverbForm/EditProverbForm';
import { NotificationContainer } from 'react-notifications';
import '../node_modules/react-notifications/dist/react-notifications.css';

const appName = 'Drive';
const navItems = [
  {
    name: 'Proverbs',
    url: '/proverbs'
  },
  {
    name: 'Add',
    url: '/proverbs/create'
  },
];

function App() {
  return (
    <div className="App vh-100 d-flex flex-column">
      <Header appName={appName} navItems={navItems}/>
      <div className='my-4'>
        <Routes>
          <Route path='/' element={<FilterableList />} />
          <Route path='/proverbs' element={<FilterableList />} />
          <Route path='/proverbs/create' element={<CreateProverbForm />} />
          <Route path='/proverbs/edit/:id' element={<EditProverbForm />} />
        </Routes>
        <NotificationContainer />
      </div>
      <Footer
        appName={appName}
      />
    </div>
  );
}

export default App;
