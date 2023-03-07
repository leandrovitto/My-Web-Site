import useTranslation from 'next-translate/useTranslation'
import { FunctionComponent, ReactElement } from 'react'
import CardGroup from '../../atoms/card/CardGroup'
import Title from '../../atoms/Title'
import { ProjectContent } from '@/@types'

type ProjectProps = {
    projects: ProjectContent[];
}

const Projects: FunctionComponent<ProjectProps> = ({ projects }: ProjectProps): ReactElement => {
    const { t, lang } = useTranslation('portfolio')

    return (
        <div>
            <Title title={t("projects.title")} >
                <p>
                    {t("projects.description")}
                </p>
            </Title>
            <CardGroup group={projects} big />
        </div>
    )
}

export default Projects