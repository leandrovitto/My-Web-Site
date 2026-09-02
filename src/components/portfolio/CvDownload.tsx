import config from '@/lib/config';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement } from 'react';

type CvDownloadProps = {
    className?: string;
    variant?: 'primary' | 'secondary';
};

const CvDownload: FunctionComponent<CvDownloadProps> = ({
    className,
    variant = 'primary',
}: CvDownloadProps): ReactElement => {
    const { t, lang } = useTranslation('common');
    const href = lang === 'it' ? config.link_cv_it : config.link_cv_en;

    return (
        <a
            data-cy="cv-download"
            href={href}
            target="_blank"
            rel="noreferrer"
            className={clsx(
                'inline-flex items-center justify-center rounded-md px-4 py-2 font-mono text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[var(--surface)]',
                variant === 'primary'
                    ? 'bg-[var(--accent)] text-white hover:opacity-90'
                    : 'border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--surface-raised)]',
                className
            )}
        >
            {t('cv.download')}
        </a>
    );
};

export default CvDownload;
