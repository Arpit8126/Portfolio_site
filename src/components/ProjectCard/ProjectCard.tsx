import { projectList } from '@/constants/project';
import React from 'react';
import CustomCursor from '../common/LigitingCursor';

const ProjectCard = () => {
    return (
        <div className='relative'>xcvbgf
            {/* <CustomCursor/> */}
            {
                projectList.map((project,idx)=><div key={idx}>welcome</div>)
            }
        </div>
    );
};

export default ProjectCard;