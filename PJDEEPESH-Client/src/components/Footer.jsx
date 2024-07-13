import React from 'react';
import { GitHub, LinkedIn,Copyright ,Mail, Instagram } from '@mui/icons-material';


export default function Footer() {
    return (
        <div style={{ marginTop: '1px' }}>
            <br />
            <div className='footer' style={{ display: 'flex', gap: '30px', margin: '30px', alignItems: 'center', justifyContent: 'center' }}>
                <a href="mailto:deepeshp.j.2004@gmail.com" className='footer-link' target='_blank' rel='noreferrer' title='Email'><Mail /></a>
                <a href="https://github.com/PJDEEPESH" className='footer-ink' target="_blank" rel='noreferrer' title='GitHub'><GitHub /></a>
                <a href="https://www.linkedin.com/in/p-j-deepesh-27546a20b/" className='footer-link' target="_blank" rel='noreferrer' title='LinkedIn'><LinkedIn /></a>
                <a href="https://www.instagram.com/deepu_deepesh_/" className='footer-link' target="_blank" rel='noreferrer' title='Instagram'><Instagram /></a>
            </div>
            <p style={{textAlign:'center',alignItems:'center'}}><Copyright sx={{marginTop:'-2px'}} /> Developed by <a href="https://github.com/PJDEEPESH" className='footer-link' style={{textDecoration:'none',color:'#89CFF0'}} rel='noreferrer'>Deepesh</a></p>
        </div>
    )

}