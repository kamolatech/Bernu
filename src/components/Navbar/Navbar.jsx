import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav >
          <ul className='flex items-center gap-[18px] noto text-dark font-normal'>
            <Link to={"/"}>О нас</Link>
            <Link to={"/"}>Оплата и доставка</Link>
            <Link to={"/"}>Отзывы</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Блог</Link>
            <Link to={"/"}>Контакты</Link>
          </ul>
        </nav>
  )
}

export default Navbar