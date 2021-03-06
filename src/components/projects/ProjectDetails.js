import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectDetails = () => {
    return(
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by Ns</div>
                    <div>Posted at 7</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails