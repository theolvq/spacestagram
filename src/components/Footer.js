import { ArrowButton, MoreButton } from '../styles/Buttons.style';

const Footer = ({ isLoading, fetchData }) => {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <MoreButton
        aria-label='load more pictures button'
        onClick={() => !isLoading && fetchData()}>
        More Pictures
      </MoreButton>
      <ArrowButton aria-label='back to top button' onClick={backToTop}>
        <svg
          className='arrow'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'>
          <path d='M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z' />
        </svg>
      </ArrowButton>
    </footer>
  );
};

export default Footer;
