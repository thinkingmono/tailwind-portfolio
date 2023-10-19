import { skills } from "../data"
import SectionTitle from "./SectionTitle"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <section className="py-20 align-element" id='skills'>
        <SectionTitle text='Tech Stack'/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
                return <SkillCard key={skill.id} {...skill}/>
            })}
        </div>
    </section>
  )
}

export default Skills