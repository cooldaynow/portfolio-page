import React from 'react';
import {Col} from 'reactstrap';
import '../Icons/index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faSkype, faGithub, faVk} from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  const email = <FontAwesomeIcon icon={faPaperPlane} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const skype = <FontAwesomeIcon icon={faSkype} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const vk = <FontAwesomeIcon icon={faVk} />;

  return (
    <Col md={5} lg={5} sm={12} className="contacts__col">
      <ul>
        <li>
          <a href="tel: 89200008936"> {phone} 8-920-000-89-36 </a>
        </li>
        <li>
          <a href="mailto: cooldaynow@gmail.com">
            {email} cooldaynow@gmail.com
          </a>
        </li>
      </ul>
      <ul className="contacts__icon">
        <li>
          <a href="skype:topovermira?chat"> {skype} </a>
        </li>
        <li>
          <a href="https://github.com/cooldaynow"> {github} </a>
        </li>
        <li>
          <a href="https://vk.com/id4471271"> {vk} </a>
        </li>
      </ul>
    </Col>
  );
};

Icons.defaultProps = {};

Icons.propTypes = {};

export default Icons;
