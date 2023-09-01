import SkillCard from '../SkillCard'
import SkillChip from '../../atoms/SkillChip'

import GitIcon from '../../../assets/icons/git.svg';
import GithubIcon from '../../../assets/icons/github.png';
import FireBaseIcon from '../../../assets/icons/firebase.svg';
import DockerIcon from '../../../assets/icons/docker.svg';
import VScodeIcon from '../../../assets/icons/vscode.png';
import PostManIcon from '../../../assets/icons/postman.svg';
import FigmaIcon from '../../../assets/icons/figma.svg';
import JiraIcon from '../../../assets/icons/jira.png';


function OtherSkillCard() {
  return (
    <SkillCard header="Others">
      <SkillChip title={"Git"} icon={GitIcon}/>
      <SkillChip title={"GitHub"} icon={GithubIcon}/>
      <SkillChip title={"Firebase"} icon={FireBaseIcon}/>
      <SkillChip title={"Docker"} icon={DockerIcon}/>
      <SkillChip title={"VS Code"} icon={VScodeIcon}/>
      <SkillChip title={"Postman"} icon={PostManIcon}/>
      <SkillChip title={"Figma"} icon={FigmaIcon}/>
      <SkillChip title={"Jira"} icon={JiraIcon}/>
    </SkillCard>
  )
}

export default OtherSkillCard