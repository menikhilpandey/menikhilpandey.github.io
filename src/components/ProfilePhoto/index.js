import React from 'react'
import './index.css'

class ProfilePhoto extends React.PureComponent {
    render() {
        return (
            <div className={'ProfilePhotoContainer'}>
                <img
                    className="ProfilePhoto"
                    src={'./profile.jpeg'}
                    alt={'Profile'}
                />
            </div>
        )
    }
}

export default ProfilePhoto
