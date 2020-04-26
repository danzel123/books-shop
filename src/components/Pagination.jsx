import React from 'react'
import { Pagination } from 'semantic-ui-react'


const PaginationExampleCompact = ({setPage}) => {
    return(
        <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            onPageChange={(e, PageInfo) => setPage(PageInfo.activePage)}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={4}
        />
    )
}

export default PaginationExampleCompact
