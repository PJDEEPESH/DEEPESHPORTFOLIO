import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { GitHub, LiveTv } from '@mui/icons-material';
import { projects } from '../utils/constants';

export default function Projects() {

    const getBadgeColor = (item) => {
        switch (item) {
            case 'Java Script':
            case 'Express JS':
                return { bg: 'warning', text: 'black' };

            case 'React':
                return { bg: 'info', text: 'dark' };

            case ('Node JS'):
            case ('Mongo DB'):
            case ('MySQL'):
                return { bg: 'success', text: 'white' };

            case ('Material UI'):
            case ('CSS'):
                return { bg: 'primary', text: 'white' };

            case ('HTML'):
                return { bg: 'black', text: 'white' }

            case ('PHP'):
                return { bg: 'secondary', text: 'white' };

            case ('BootStrap'):
                return { bg: 'danger', text: 'white' }

            default:
                return { bg: 'light', text: 'black' };
        }
    };

    return (
        <div className='container' id='projects'>
            <h1 style={{ color: '#89CFF0', marginTop: '1cm' }}>Projects</h1><br />
            <Row>
                {projects.map((project, index) => (
                    <Col className='p-3' style={{borderColor:'red'}} md={3} lg={4} key={index}>
                        <div className='card'>
                            <Card>
                                <a href={project?.live_demo} className='project' style={{ textDecoration: 'none' }} target='_blank' rel="noreferrer">
                                    <Card.Img src={project?.img} />
                                </a>
                                <Card.Body>
                                    <div className='container' style={{ justifyContent: 'space-between', display: 'flex' }}>
                                        <Card.Title className='link'>{project?.title}</Card.Title>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <a className='link' href={project?.github_url} target='_blank' rel="noreferrer"><GitHub /></a>
                                            <a className='link' href={project?.live_demo} target='_blank' rel="noreferrer"><LiveTv /></a>
                                        </div>
                                    </div>
                                    <Card.Text style={{ marginTop: '10px', marginLeft: '10px' }}>
                                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'start' }}>
                                            {project?.techstack.map((item, ind) => (
                                                <Badge key={ind} bg={getBadgeColor(item).bg} text={getBadgeColor(item).text}>{item}</Badge>
                                            ))}
                                        </div>
                                        <p style={{ marginTop: '10px' }}>
                                            {project?.description}
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
