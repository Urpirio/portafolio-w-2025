'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinkProyectNav from '../func/LinkProyectNav';
import SubNavProyects from './Subcomponents/SubNavProyects';
import DataProyectsPage from '../Data/DataProyectsPage';
import BtnNextPage from './Subcomponents/BtnNextPage';
import BtnReturnPage from './Subcomponents/BtnReturnPage';


export let IsPageTwo;
export default function NavProyects() {

    const pathBoleano = '/proyect/page2' == usePathname();
    const pathBoleano2 = '/proyect' == usePathname();

    const YouAreHere = DataProyectsPage.map(DPP => {
        return(
            <SubNavProyects
            Page = {DPP.Page}
            NextPage = {DPP.NextPage}
            LinkPage = {DPP.LinkPage}
            LinkNextPage = {DPP.LinkNextPage}
            path = {usePathname()}
            />
        )
    })





  return (
    <div className='flex items-center gap-5'>
       <BtnReturnPage/>
        {YouAreHere}
       <BtnNextPage/>
  </div>
  )
}
