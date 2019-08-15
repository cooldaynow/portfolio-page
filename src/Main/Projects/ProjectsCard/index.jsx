import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './index.scss';
import {
  Card,
  CardImg,
  CardFooter,
  Col,
} from 'reactstrap';

const ProjectsCard = ({href, src, name})=> (
    <Col md={6} lg={6} sm={6}>
      <Card className="projects__card">
        <Link to={href}>
          {' '}
          <CardImg top width="100%" src={src} alt="weather image cap" />
          <CardFooter className = 'projects__card__footer'>
            <p>{name}</p>
          </CardFooter>
        </Link>
      </Card>
    </Col>
  );

export default ProjectsCard;
