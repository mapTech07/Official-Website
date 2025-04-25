import { CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';

const contact = [
  {
    icons: <IoCallOutline className="text-3xl" />,
    title: 'Call Anytime',
    desc: '+9779745673009',
  },
  {
    icons: <CiMail className="text-3xl" />,
    title: 'Send Mail',
    desc: 'info@maptechnepal.com',
  },
  {
    icons: <CiLocationOn className="text-3xl" />,
    title: 'Visit Us',
    desc: 'Purano Thimi, Bhaktapur, Nepal',
  },
];

export default contact;
