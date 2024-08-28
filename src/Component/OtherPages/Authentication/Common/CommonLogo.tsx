import { Link } from 'react-router-dom'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { CommonFormPropsType } from '../../../../Types/OtherPages/OtherPages'

const CommonLogo = ({ alignLogo }: CommonFormPropsType) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo :""}`} to={`${process.env.PUBLIC_URL}/dashboard/default`}>
      <Image
        className="img-fluid for-dark"
        src={dynamicImage("logo/mvm-logo.png")}
        alt="loginpage"
      />
      <Image
        className="img-fluid for-light m"
        src={dynamicImage("logo/mvm-logo.png")}
        alt="loginpage"
      />
    </Link>
  )
}

export default CommonLogo