import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { usePropusContext } from '../context/PropusContext';
import { Profiler } from 'react';
import Propus from '../components/Propus';

export default function Home() {

  const {handleClose} = usePropusContext()
const [modalShow, setModalShow] = useState();
       useEffect(() => {
           const timer = setTimeout(() => setModalShow(true), 500);
           return () => clearTimeout(timer);
         }, []);

  return (
    <>
    <Propus show={modalShow} onHide={ handleClose} />
    <Container className='Category mb-6'>
        <div className='Fashion'>
         fashion card
        </div>

        <div className='Phone'>
         phone card
        </div>

        <div className='accessories'>
          accessories Card
        </div>

    </Container>
    </>
  )
}
