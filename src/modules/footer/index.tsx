import { Grid } from "@mui/material";
import { Fragment } from "react";
import { NavLink } from 'react-router-dom'
import { DataType } from '../../interfaces'
import { footerItems } from '../../constants'

const Footer = () => {
    return (
        <Fragment>
            <Grid container item className="footer-container">
                <Grid className="footer-main-container">
                    <ul className="footer-top-menu">
                        {footerItems.map((v: DataType, i: number) => {
                            return (
                                <Fragment key={i.toString()}>
                                    {Object.entries(v).map(([key, value]) => (
                                        <li key={value}>
                                            <NavLink target="blank" to={value}>{key}</NavLink></li>
                                    ))}
                                </Fragment>
                            )
                        })}
                    </ul>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Footer