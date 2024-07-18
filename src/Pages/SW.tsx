import Description from "../Sections/SW/Description.tsx";
import LifecycleSquares from "../Sections/SW/Lifecycle/LifecycleSquares.tsx";
import Lifecycle from "../Sections/SW/Lifecycle/Lifecycle.tsx";
import Pros from "../Sections/SW/Pros/Pros.tsx";
import Actions from "../Sections/SW/Actions/Actions.tsx";
import ActionsSquares from "../Sections/SW/Actions/ActionsSquares.tsx";
import Caching from "../Sections/SW/Caching/Caching.tsx";
import CachingSquares from "../Sections/SW/Caching/CachingSquares.tsx";
import ExtendedSquares from "../Sections/SW/Extended/ExtendedSquares.tsx";
import Extended from "../Sections/SW/Extended/Extended.tsx";
import BestPractices from "../Sections/SW/BestPractices.tsx";
import VitePWA from "../Sections/SW/VitePWA.tsx"
import SWIntro from "../Sections/SW/SWIntro.tsx";
import Menu from "../Components/Menu.tsx";
import QuellenDownload from "../Components/QDownload.tsx";

const Sw = () => {
  return (
    <div className="relative">
      <QuellenDownload />
      <Menu />
      <SWIntro />
      <Description />
      <Pros />
      <LifecycleSquares />
      <Lifecycle />
      <ActionsSquares />
      <Actions />
      <CachingSquares />
      <Caching />
      <ExtendedSquares />
      <Extended />
      <BestPractices />
      <VitePWA />
    </div>
  )
}

export default Sw