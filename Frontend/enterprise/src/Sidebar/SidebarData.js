import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import StoreIcon from '@material-ui/icons/Store';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Optimizations",
        icon: <ShowChartIcon />,
        link: "/optimizations"
    },
    {
        title: "Stock",
        icon: <StoreIcon />,
        link: "/stock"
    }
];
