import React from 'react'
import './index.css'

class Description extends React.PureComponent {
    render() {
        return (
            <div className={'DescriptionContainer'}>
                <div className={'NameContainer'}>Nikhil Pandey</div>
                <div className={'DesignationContainer'}>
                    SDE @ Amazon Berlin
                </div>
            </div>
        )
    }
}

export default Description
