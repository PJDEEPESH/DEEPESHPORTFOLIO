import React from 'react';
import material from '../images/materialui.svg'
import mongodb from '../images/mongo.webp'
import nodejs from '../images/nodejs.svg'
import bootstrap from '../images/bootstrap.png'
import express from '../images/express.png'
import mysql from '../images/mysql.webp'
import latex from '../images/latex.svg'
import java from '../images/java.webp'
import wordpress from '../images/wordpress.png'
import wix from '../images/wix.png'
import hardhat from '../images/hardhat.jpeg'
import python from '../images/python.webp'
import c from '../images/c.png'
import javascript from '../images/javascript.png'
import php from '../images/php.png'
import html from '../images/html.webp'
import css from '../images/css.webp'
import git from '../images/git.webp'
import github from '../images/github.png'
import react from '../images/react.svg'
import windows from '../images/windows.png'
import ubuntu from '../images/ubuntu.png'
import vscode from '../images/vscode.webp'
import sass from '../images/sass.png'
import firebase from '../images/firebase.svg'
import json from '../images/json.png'
import npm from '../images/npm.svg';
import canva from '../images/canva.png';
import netlify from '../images/netlify.svg'
import rapid from '../images/rapid.png'
import { Stack } from '@mui/material';
import flask from '../images/flask.png'
import solidity from '../images/solidity.png' // Import Solidity image
import truffle from '../images/truffle.png' // Import Truffle image
import ganache from '../images/ganache.png' // Import Ganache image
import metamask from '../images/metamask.png' // Import MetaMask image
import ethereum from '../images/ethereum.png' // Import Ethereum image

export default function Skills() {
    return (
        <div className='container' id='skills'>
            <h1 style={{ color: '#89CFF0', marginTop: '1cm' }}>Skills</h1><br />
            <div className='languages'>
                <h3 style={{ marginLeft: '15px' }}>Frameworks</h3><br />
                <Stack style={{ marginLeft: '15px' }} overflowY="auto" direction="row" flexWrap="wrap" justifyContent="start" gap={1.5}>
                    <img src={react} className='bgremove' width='100' height='100' alt="react" title="React" />
                    <img src={nodejs} className='bgremove' width='100' height='100' alt="nodejs" title="Node" />
                    <img src={flask} className='bgremove' width='100' height='100' alt="flask" title="Flask" />
                    <img src={express} className='bgremove' width='100' height='100' alt="express" title="Express JS" />
                    <img src={mongodb} className='bgremove' width='100' height='100' alt="mongodb" title="Mongo DB" />
                    <img src={material} className='bgremove' width='100' height='100' alt="material" title="Material UI" />
                    <img src={mysql} className='bgremove' width='100' height='100' alt="mysql" title="MySQL" />   
                    <img src={sass} className='bgremove' width='100' height='100' alt="sass" title="Sass" />
                    <img src={firebase} className='bgremove' width='100' height='100' alt="firebase" title="Firebase" />
                    <img src={bootstrap} className='bgremove' width='100' height='100' alt="bootstrap" title="Bootstrap" />
                    <img src={hardhat} className='bgremove' width='100' height='100' alt="solidity" title="hardhat" /> {/* Add Solidity */}

                </Stack>
                <br />
            </div>
            <div className='frameworks'>
                <h3 style={{ marginLeft: '15px' }}>Languages</h3><br />
                <Stack style={{ marginLeft: '15px' }} overflowY="auto" direction="row" flexWrap="wrap" justifyContent="start" gap={1.5}>
                    <img src={java} className='bgremove' width='100' height='100' alt="java" title="Java"  />
                    <img src={javascript} className='bgremove' width='100' height='100' alt="javascript" title="Java Script" />
                    <img src={c} className='bgremove' width='100' height='100' alt="c" title="C" />
                    <img src={css} className='bgremove' width='100' height='100' alt="css" title="CSS" />
                    <img src={html} className='bgremove' width='100' height='100' alt="html" title="HTML" />
                    <img src={json} className='bgremove' width='100' height='100' alt="json" title="JSON" />
                    <img src={latex} className='bgremove' width='100' height='100' alt="latex" title="Latex" />
                    <img src={python} className='bgremove' width='100' height='100' alt="python" title="Python" />
                    <img src={php} className='bgremove' width='100' height='100' alt="php" title="PHP" />
                    <img src={solidity} className='bgremove' width='100' height='100' alt="solidity" title="Solidity" /> {/* Add Solidity */}

                </Stack>
                <br />
            </div>
            <div className='tools'>
                <h3 style={{ marginLeft: '15px' }}>Tools / Platforms</h3><br />
                <Stack style={{ marginLeft: '15px' }} overflowY="auto" direction="row" flexWrap="wrap" justifyContent="start" gap={1.5}>
                    <img src={vscode} className='bgremove' width='100' height='100' alt="vscode" title="VS Code" />
                    <img src={git} className='bgremove' width='100' height='100' alt="git" title="Git" />
                    <img src={github} className='bgremove' width='100' height='100' alt="github" title="Github" />
                    <img src={windows} className='bgremove' width='100' height='100' alt="windows" title="Windows" />
                    <img src={ubuntu} className='bgremove' width='100' height='100' alt="ubuntu" title="Ubuntu" />
                    <img src={npm} className='bgremove' width='100' height='100' alt="npm" title="NPM" />
                    <img src={rapid} className='bgremove' width='100' height='100' alt="rapid api" title="Rapid API" />
                    <img src={canva} className='bgremove' width='100' height='100' alt="canva" title="Canva" />
                    <img src={netlify} className='bgremove' width='100' height='100' alt="netlify" title="Netlify" />
                    <img src={truffle} className='bgremove' width='100' height='100' alt="truffle" title="Truffle" />
                    <img src={ganache} className='bgremove' width='100' height='100' alt="ganache" title="Ganache" />
                    <img src={metamask} className='bgremove' width='100' height='100' alt="metamask" title="MetaMask" />
                    <img src={ethereum} className='bgremove' width='100' height='100' alt="ethereum" title="Ethereum" />
                    <img src={wordpress} className='bgremove' width='100' height='100' alt="ethereum" title="wordpress" />
                    <img src={wix} className='bgremove' width='100' height='100' alt="ethereum" title="wix" />

                </Stack>
                <br />
            </div>
        </div>
    )
}
