import useTranslation from 'next-translate/useTranslation'
import { FunctionComponent, ReactElement } from 'react'
import { ProjectContent } from '@/@types'
import CaseStudyGrid from '@/components/portfolio/CaseStudyGrid'
import SectionHeading from '@/components/portfolio/SectionHeading'
import { normalizeProject } from '@/lib/portfolio'

type ProjectProps = {
    projects: ProjectContent[];
}

const Projects: FunctionComponent<ProjectProps> = ({ projects }: ProjectProps): ReactElement => {
    const { t, lang } = useTranslation('portfolio')

    return (
        <div>
            <SectionHeading title={t("projects.title")} >
                <p>
                    {t("projects.description")}
                </p>
            </SectionHeading>
            <CaseStudyGrid projects={projects.map(normalizeProject)} />
        </div>
    )
}

export default Projects
