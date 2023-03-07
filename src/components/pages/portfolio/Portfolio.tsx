import useTranslation from 'next-translate/useTranslation'
import { FunctionComponent, ReactElement } from 'react'
import CardGroup from '../../atoms/card/CardGroup'
import Title from '../../atoms/Title'
import { ProjectContent } from '@/@types'

type PortfolioProps = {
    portfolio: ProjectContent[];
}

const Portfolio: FunctionComponent<PortfolioProps> = ({ portfolio }: PortfolioProps): ReactElement => {
    const { t } = useTranslation('portfolio')

    return (
        <div className='my-16'>
            <Title title={t("portfolio.title")}>
                <div>
                    <p className="text-xl font-bold leading-8 text-indigo-600 dark:text-indigo-500 animate-pulse">
                        {t("portfolio.subtitle")}
                    </p>
                    <p>
                        {t("portfolio.description")}
                    </p>
                </div>
            </Title>
            <CardGroup group={portfolio} />
        </div>
    )
}

export default Portfolio