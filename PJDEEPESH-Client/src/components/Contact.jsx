import React, { useState } from 'react';
import { Row, Col, Form, Spinner } from 'react-bootstrap';
import surya from '../images/about.png';

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [isPosted, setIsPosted] = useState(false);

    function handleReset() {
        setName("");
        setEmail("");
        setDescription("");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('description').value = "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch('http://localhost:9000/portfolio/connections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    description: description
                }),
            });
            setIsLoading(false);
            setIsPosted(true);
        } catch (error) {
            console.error('Error Occurred:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className='container' id='contact'>
            <h1 style={{ color: '#89CFF0', marginTop: '1px' }}>Contact</h1><br />
            <Row>
                <Col md={4}>
                    <img src={surya} style={{ marginTop: '50px', marginBottom: '30px', marginLeft: '30px' }} width='300' alt="surya" />
                </Col>
                <Col md={8}>
                    {isPosted ? (
                        <div style={{ color: 'white', textAlign: 'center', marginTop: '60px' }}>
                            <h5>Data posted Successfully !</h5>
                        </div>
                    ) : (
                        <Form className='p-3' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor='name'>Name :</Form.Label>
                                <Form.Control type="text" id='name' onChange={(e) => { setName(e.target.value) }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor='email'>Email address :</Form.Label>
                                <Form.Control type="email" id='email' onChange={(e) => { setEmail(e.target.value) }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor='description'>Description :</Form.Label>
                                <Form.Control as="textarea" rows={3} id='description' onChange={(e) => { setDescription(e.target.value) }} required />
                            </Form.Group>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'start', gap: '20px' }}>
                                <button className='submit-btn' type="submit">{isLoading ?
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    : 'Submit'}</button>
                                <button className='reset-btn' onClick={handleReset}>Reset</button>
                            </div>
                        </Form>
                    )}
                </Col>
            </Row>
            <br /><br />
        </div>
    )
}
