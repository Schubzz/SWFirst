import Menu from "../Components/Menu.tsx";
import Intro from "../Sections/SW/Intro.tsx";
import LifecycleSquares from "../Sections/SW/LifecycleSquares.tsx";
import Lifecycle from "../Sections/SW/Lifecycle.tsx";
import ActionsSquares from "../Sections/SW/ActionsSquares.tsx";
import Actions from "../Sections/SW/Actions.tsx";
import Description from "../Sections/SW/Description.tsx";
import Pros from "../Sections/SW/Pros.tsx";

const Sw = () => {
  return (
    <div>
        <Menu />
        <Intro />
        <Description />
        <Pros />
        <LifecycleSquares/>
        <Lifecycle/>
        <ActionsSquares />
        <Actions/>
    </div>
  )
}

export default Sw