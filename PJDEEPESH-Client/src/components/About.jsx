import React from 'react';
import { Row, Col } from 'react-bootstrap';
import rkv1 from '../images/rkv1.png';
import ninja from '../images/ninja.png';
import leetcode from '../images/leetcode.png';
import geeksforgeeks from '../images/gfg.png';
import github from '../images/github.png'; // Import the GitHub logo

export default function About() {
    return (
        <div className='about container' id='about' style={{ marginTop: '1px' }}>
            <h2 style={{ color: '#89CFF0' }}>About</h2><br />
            <Row>
                <Col md={4}>
                    <a href="https://shorturl.at/mpK02" target='_blank' rel='noreferrer'>
                        <img src={rkv1} className='rkv' width='300' height='300' alt="rkv" title="IIIT RK Valley" />
                    </a>
                </Col>
                <Col md={8}>
                    <p style={{ margin: '20px', fontSize: '17px' }}>
                        I am <span style={{ color: '#89CFF0' }}>DEEPESH</span>, and I am currently pursuing a 6-year Integrated B.Tech program in Computer Science Engineering at IIIT RGUKT RK Valley. Here, I have been excelling academically with a CGPA of <span style={{ color: '#89CFF0' }}>8.6</span> in the first 6 semesters and <span style={{ color: '#89CFF0' }}>9.33</span> in PUC and <span style={{ color: '#89CFF0' }}>10.0</span> in SSC. I am a passionate Software Developer, and currently working on Decentralized network web3, I am honing my skills in <span style={{ color: '#89CFF0' }}>React, MongoDB, frontend and backend, Solidity, smart contracts </span> by building projects. I have experience with MySQL, and Firebase databases. Additionally, I have the habit of solving DSA problems on various platforms like <span style={{ color: '#89CFF0' }}>Geeks for Geeks, Coding Ninjas, LeetCode </span> which enhances my problem-solving skills. I'm very eager to leverage my skills in the world of technology and contribute to its advancement.
                    </p>
                    <div className='dsa-links'>
                        <a href="https://www.geeksforgeeks.org/user/deepeshpj2004/" title='Geeks for Geeks'>
                            <img src={geeksforgeeks} className='dsa' width='90' alt="Geeks for Geeks" />
                        </a>
                        <a href="https://www.naukri.com/code360/profile/33153871-41ca-447d-9d23-7c3c8276bf83" title='Ninja'>
                            <img src={ninja} className='dsa' width='68' alt="Hacker Rank" />
                        </a>
                        <a href="https://leetcode.com/u/PJDeepesh/" title='LeetCode'>
                            <img src={leetcode} className='dsa' width='58' alt="LeetCode" />
                        </a>
                        <a href="https://github.com/PJDEEPESH" title='GitHub' target='_blank' rel='noreferrer'>
                            <img src={github} className='dsa' width='60' alt="GitHub" />
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
