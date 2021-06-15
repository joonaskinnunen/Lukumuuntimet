import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebarStyle'>
        <h5>Suosituimmat sivut</h5>
        <ListGroup>
            <ListGroup.Item>
                <Link to='/yksikkomuuntimet/desimaali-binaari-muunnin'>Desimaaliluku - binäärilukumuunnin</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/hyoty/merkki-ja-sanalaskuri'>Sanalaskuri</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/matematiikka/kertotaulu'>Kertotaulu</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/terveys/painoindeksilaskuri'>Painoindeksilaskuri</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/yksikkomuuntimet/kengankoko-muunnin'>Kengän koko-muunnin</Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to='/raha/valuuttalaskuri'>Valuuttalaskuri / valuuttamuunnin</Link>
            </ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Sidebar