function generatePureComponent(COMPONENT_NAME) {
  return `import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ${COMPONENT_NAME} extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="${COMPONENT_NAME}"></div>
        );
    }
}

${COMPONENT_NAME}.propTypes = {}

${COMPONENT_NAME}.defaultProps = {}

export default ${COMPONENT_NAME}
`
}

export default generatePureComponent
