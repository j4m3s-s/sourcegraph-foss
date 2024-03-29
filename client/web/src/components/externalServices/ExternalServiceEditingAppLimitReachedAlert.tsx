import { FC } from 'react'

import { addSourcegraphAppOutboundUrlParameters } from '@sourcegraph/shared/src/util/url'
import { Alert, H4, Text, Link } from '@sourcegraph/wildcard'

export const ExternalServiceEditingAppLimitAlert: FC<{ className?: string }> = props => (
    <Alert variant="info" className={props.className}>
        <H4>Code host limit</H4>
        <Text className="mb-0">
            Sourcegraph App is limited to one remote code host and up to 10 remote repositories. For more,{' '}
            <Link to={addSourcegraphAppOutboundUrlParameters('https://about.sourcegraph.com')}>
                get Sourcegraph Enterprise
            </Link>
            .
        </Text>
    </Alert>
)
