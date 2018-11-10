import React from 'react';
const FlatUrl="http://10.31.156.178:3000/";
const GetAllFlatData=FlatUrl+"people?_sort=id&_order=desc";
export const getAllFlatData=async()=>{
    try {
        let response=await fetch(GetAllFlatData);
        let responseJson=await response.json();
        return responseJson
    } catch (error) {
        console.log(error);
    }
}

export const getPageFlatData=async params=>{
    try {
        let response=await fetch(GetAllFlatData+'&_page='+params.page+'&_limit=10');
        let responseJson=await response.json();
        return responseJson
    } catch (error) {
        console.log(error)
    }
}

