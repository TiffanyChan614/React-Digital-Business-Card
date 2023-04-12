import TwitterIcon from '../assets/twitter-icon.png';
import FacebookIcon from '../assets/facebook-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import GithubIcon from '../assets/github-icon.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={TwitterIcon} alt='Twitter icon' className='footer-icons' />
      <img src={FacebookIcon} alt='Facebook icon' className='footer-icons' />
      <img src={InstagramIcon} alt='Instagram icon' className='footer-icons' />
      <img src={GithubIcon} alt='Github icon' className='footer-icons' />
    </footer>
  );
}
