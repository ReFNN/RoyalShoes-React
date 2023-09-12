
import { Link } from 'react-router-dom'
import './style.scss'

export default function ButtonNav(props) {
    // const activeTest;

  return (
    <li>
        <Link
        to={`/${props.goTo}`} 
        className={`${props.className} active`}
        >
            {props.value}
        </Link>
    </li>
  )
}
