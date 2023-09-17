import React, { Fragment } from 'react'
import { Grid, Typography, Box, CssBaseline, AppBar, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { DataType } from '../../interfaces'
import { navItems } from '../../constants'

const Header: React.FC = () => {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="relative" className="appBar" color="transparent">
                    <Toolbar disableGutters>
                        <Grid container spacing={2} className="homeMainContainer">
                            <Grid xs={6} item>
                                <Typography variant="h3" className="titleTypo">Pushker Tiwari</Typography>
                            </Grid>
                            <Grid container item xs={6} style={{ alignItems: 'center' }}>
                                {
                                    navItems.map((item: DataType, index: number) => {
                                        return (
                                            <Fragment key={index.toString()}>
                                                <Grid style={{ marginLeft: '7%' }}>
                                                    {Object.entries(item).map(([key, value]) => (
                                                        <Fragment key={value.toString()}>
                                                            <NavLink className={({ isActive, isPending }) =>
                                                                isPending ? "pending" : isActive.toString()
                                                            } to={value} style={{ textDecoration: 'none', color: '#000' }} aria-label={key}>
                                                                <Typography variant="h5" className='headerTypo'>
                                                                    {key}
                                                                </Typography>
                                                            </NavLink>
                                                        </Fragment>
                                                    ))}

                                                </Grid>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box >

        </>
    )
}

export default Header;