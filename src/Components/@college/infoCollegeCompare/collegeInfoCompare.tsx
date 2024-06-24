import React from 'react';
import PageInfo from '../../PageInfo/PageInfo';

const CollegeInfoCompare = ({ college, title, description }: any) => {
    return (
        <div>
            <PageInfo
				title={title}
				description={description}
				pageType="collegeCompare"
			/>
        </div>
    );
};

export default CollegeInfoCompare;