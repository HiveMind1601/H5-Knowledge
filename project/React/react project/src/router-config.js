import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import {Home,BasicRouting,Blocking,Miss,NoMatch,QueryParams ,Recursive} from './components'

module.exports = [
    {
        path     : '/',
        component: Home,
        exact    : true
    },
    {
        path     : '/basic-routing',
        component: BasicRouting
    },
    {
        path     : '/blocking',
        component: Blocking
    },
    {
        path     : '/miss',
        component: Miss
    },
    {
        path     : '/query-params',
        component: QueryParams
    },
    {
        path     : '/recursive',
        component: Recursive
    }
]