import React from 'react'
import './index.css'

const images = {
    profilePic: require('./assets/profile.jpeg'),
}

class ProfilePhoto extends React.PureComponent {
    render() {
        return (
            <div className={'ProfilePhotoContainer'}>
                <img
                    className="ProfilePhoto"
                    src={images.profilePic}
                    alt={'Profile'}
                />
            </div>
        )
    }
}

export default ProfilePhoto
