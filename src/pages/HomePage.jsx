import { useState } from 'react';
import AboutMe from '../components/UI/AboutMe';
import Portfolio from '../components/UI/Portfolio';
import Resume from '../components/UI/Resume';
import Contact from '../components/UI/Contact';
import Header from '../components/Header';



export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
          <div class="container pt-4">
            <main className="mx-3">{renderPage()}</main>
          </div>
      </div>
        );
}
