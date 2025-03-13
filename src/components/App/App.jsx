import './App.css'
import { Routes, Route } from 'react-router-dom';
import MainHeader from '../MainPage/MainHeader/MainHeader';
import SubscriptionContainer from '../MainPage/SubscriptionContainer/SubscriptionContainer';
import SubscriptionInfo from '../DetailsPage/SubscriptionInfo/SubscriptionInfo';

export default function App() {
  return (
    <main className='app'>
      <section className='main-page'>


        <Routes>
          <Route path="/" element={<SubscriptionContainer />}/>
          <Route path="/subscriptions/:id" element={<SubscriptionInfo />}/>
        </Routes>
  
        <footer><a href="https://www.flaticon.com/free-icons/tea-bag" title="tea-bag icons">Tea-bag icon created by Freepik - Flaticon</a></footer>
      </section> 
    </main>
  );
}