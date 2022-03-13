import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
// Style
import styled from 'styled-components'
import { theme } from '../components/Theme'
// My location
import { coordsTown } from '../coordsTown'
// Images
import places_blue from '../images/places-blue.svg'

const Header = ({ coord, setFindTowns }) => {
  return (
    <StyleHeader>
      <div className="date">
        <p>{moment().format('dddd, D MMM YYYY | h:mm A')}</p>
      </div>

      <div className="coord">
        {coord && (
          <>
            <Link to="/search" onClick={() => setFindTowns(coordsTown)} >{coord.name}, Slovakia</Link>
            <img src={places_blue} alt="places" />
          </>
        )}
      </div>
    </StyleHeader>
  )
}
const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .date {
    font-size: 0.875em;
    color: ${theme.lightPrimariFontColor};
    margin-left: 0.4em;
    @media (min-width: 500px) {
      font-size: 1em;
      margin-left: 1em;
    }
  }

  .coord {
    display: flex;
    align-items: center;
    background: rgba(13, 159, 234, 0.08);
    padding: 0.4em;
    border-radius: 0 1em 0 1em;

    a {
      color: ${theme.lightLinkFontcolor};
      padding: 0.6em 0;
      text-align: center;
    }

    img {
      margin: 0 0.6em;
    }
  }
`

export default Header