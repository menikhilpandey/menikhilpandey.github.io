import React from 'react'
import './index.css'
import { LINKS } from '../../constants'

class MenuOptions extends React.PureComponent {
    renderResumeBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.RESUME}
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume
            </a>
        )
    }

    renderLinkedInBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
        )
    }

    renderGithubBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>
        )
    }

    renderMediumBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.MEDIUM}
                target="_blank"
                rel="noopener noreferrer"
            >
                Medium
            </a>
        )
    }

    renderCodeChefBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.CODECHEF}
                target="_blank"
                rel="noopener noreferrer"
            >
                CodeChef
            </a>
        )
    }

    renderTwitterBtn() {
        return (
            <a
                className="MenuBtnContainer"
                href={LINKS.TWITTER}
                target="_blank"
                rel="noopener noreferrer"
            >
                Twitter
            </a>
        )
    }

    render() {
        return (
            <div className="MenuContainer">
                {this.renderResumeBtn()}
                {this.renderLinkedInBtn()}
                {this.renderGithubBtn()}
                {this.renderCodeChefBtn()}
                {this.renderMediumBtn()}
                {this.renderTwitterBtn()}
            </div>
        )
    }
}

export default MenuOptions
