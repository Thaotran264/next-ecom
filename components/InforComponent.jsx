import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
const InforComponent = ({ info }) => {
    const [ui, setUI] = useState('Horizontal')

    return (
        <>
            <Dropdown className='ms-auto'>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <BsFillGrid1X2Fill />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={e => setUI("Vertical")}>Vertical</Dropdown.Item>
                    <Dropdown.Item onClick={e => setUI("Horizontal")}>Horizontial</Dropdown.Item>
                    <Dropdown.Item onClick={e => setUI("noLogo")}>No Logo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <hr />
            {
                ui == 'Horizontal' && <div className='rounded bg-white mb-2 d-flex justify-content-between p-2' style={{ gap: 10 }}>
                    <div className='d-flex justify-content-center align-center w-25 h-25'>
                        <img src={info.logo} className='d-block rounded w-100' alt='' />
                    </div>
                    <div className='' style={{ flex: 1 }}>
                        <h2>{info.name}</h2>
                        <h2>{info.metaDescription}</h2>
                        <p>{info.address}</p>
                        <p>{info.hotline}</p>
                        <p>{info.openTimeA}</p>
                        <p>{info.openTimeB}</p>
                        <p>{info.closeTimeA}-{info.closeTimeP}</p>
                    </div>
                </div>
            }
            {
                ui == 'Vertical' && <div className='rounded bg-white d-flex flex-column mb-2 align-center justify-content-center p-2'>
                    <div className='d-flex justify-content-center align-center mb-3 '>
                        <img className='d-block w-25 h-25 rounded' src={info.logo} alt='' />
                    </div>
                    <div className='text-center'>
                        <h2>{info.name}</h2>
                        <h2>{info.metaDescription}</h2>
                        <p>{info.address}</p>
                        <p>{info.hotline}</p>
                        <p>{info.openTimeA}-{info.openTimeB}</p>
                        <p>{info.closeTimeA}-{info.closeTimeP}</p>
                    </div>
                </div>
            }
            {
                ui == 'noLogo' && <div className='rounded bg-white d-flex flex-column mb-2 align-center justify-content-center p-2'>
                    {/* <div className='d-flex justify-content-center align-center mb-3 '>
                        <img className='d-block w-25 h-25 rounded' src={info.logo} alt='' />
                    </div> */}
                    <div className='text-center'>
                        <h2>{info.name}</h2>
                        <h2>{info.metaDescription}</h2>
                        <p>{info.address}</p>
                        <p>{info.hotline}</p>
                        <p>{info.openTimeA}-{info.openTimeB}</p>
                        <p>{info.closeTimeA}-{info.closeTimeP}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default InforComponent