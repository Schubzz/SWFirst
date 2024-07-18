import Menu from "../Components/Menu.tsx"
import PWADescription from "../Sections/PWA/PWADescription.tsx"
import PWAIntro from "../Sections/PWA/PWAIntro.tsx"
import Tutorial from "../Sections/PWA/Tutorial.tsx"

const Pwa = () => {
  return (
    <div>
      <Menu />
      <PWAIntro />
      <PWADescription />
      <Tutorial />
    </div>
  )
}

export default Pwa