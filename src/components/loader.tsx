import React from 'react'
import { Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { isLoaderType } from '../interfaces'

const Loader: React.FC<isLoaderType> = ({ loading }): React.JSX.Element => {
    return (
        <>{loading ? <Grid m={"auto"} style={{
            position: 'fixed',
            top: '50%',
            bottom: '50%',
            left: '50%',
            right: '50%'
        }}>
            <CircularProgress />
        </Grid> : null}
        </>
    )
}
export default Loader