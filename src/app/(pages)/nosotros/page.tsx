import Footer from '@/components/global/footer/Footer'
import Header from '@/components/global/header/Header'
import ActionSectionOurUs from '@/sections/ourUs/actionSectionOurUs/ActionSectionOurUs'
import InformationSectionOurUs from '@/sections/ourUs/informationSectionOurUs/InformationSectionOurUs'
import ItemsSectionOurUs from '@/sections/ourUs/itemsSectionOurUs/ItemsSectionOurUs'
import MainSectionOurUs from '@/sections/ourUs/mainSectionOurUs/MainSectionOurUs'
import VideoSectionOurUs from '@/sections/ourUs/videoSectionOurUs/VideoSectionOurUs'
import React from 'react'

export default function page() {
    return (
        <>
            <MainSectionOurUs />
            <VideoSectionOurUs />
            <ItemsSectionOurUs/>
            <InformationSectionOurUs/>
            <ActionSectionOurUs/>
            <Footer/>
        </>
    )
}
