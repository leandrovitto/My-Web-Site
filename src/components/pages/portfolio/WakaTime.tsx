import React from 'react'
import Title from '../../atoms/Title'

const WakaTime = () => {
    return (
        <div className='my-16'>
            <Title title="My Coding Activity" subtitle="Tracked by Wakatime from Mar 2020" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-16 my-8'>
                <figure><embed src="https://wakatime.com/share/@13dc3f00-f70a-489d-8d95-1691a7109321/72206d51-d44e-4582-8b79-88532a2a1e7c.svg"></embed></figure>
                <figure><embed src="https://wakatime.com/share/@13dc3f00-f70a-489d-8d95-1691a7109321/acd7d46c-d249-47c6-8909-068d299a1929.svg"></embed></figure>
                <figure><embed src="https://wakatime.com/share/@13dc3f00-f70a-489d-8d95-1691a7109321/27712997-f3ed-4f1b-b520-9666c9977708.svg"></embed></figure>
                <figure><embed src="https://wakatime.com/share/@13dc3f00-f70a-489d-8d95-1691a7109321/d299332f-6b96-44a4-a87c-c996dbfd69c9.svg"></embed></figure>
            </div>
        </div>
    )
}

export default WakaTime