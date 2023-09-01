import SkillCard from '../SkillCard'
import SkillChip from '../../atoms/SkillChip'

import ReactIcon from '../../../assets/icons/react.svg';
import ReduxIcon from '../../../assets/icons/redux.svg';
import NextJSIcon from '../../../assets/icons/nextJs.png';
import HTMLIcon from '../../../assets/icons/html.png';
import CSSIcon from '../../../assets/icons/css.png';
import JavaScriptIcon from '../../../assets/icons/js.png';
import BootstrapIcon from '../../../assets/icons/bootstrap.png';

function FrontendSkillCard() {
  return (
    <SkillCard header="Frontend">
      <SkillChip title="React" icon={ReactIcon} />
      <SkillChip title="Redux" icon={ReduxIcon} />
      <SkillChip title="Next JS" icon={NextJSIcon} />
      <SkillChip title="HTML" icon={HTMLIcon} />
      <SkillChip title="CSS" icon={CSSIcon} />
      <SkillChip title="JavaScript" icon={JavaScriptIcon} />
      <SkillChip title="Bootstrap" icon={BootstrapIcon} />
    </SkillCard>
  )
}

export default FrontendSkillCard