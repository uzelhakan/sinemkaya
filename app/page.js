'use client';

import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import ServicesOne from "@/components/sections/home1/ServicesOne"
import Sifa from "@/components/sections/home1/Sifa"
import Karma from "@/components/sections/home1/Karma"
import ScheduleOne from "@/components/sections/home1/ScheduleOne"
import Brand from "@/components/sections/home1/Brand"
import BlogOne from "@/components/sections/home1/BlogOne"
import CTAOne from "@/components/sections/home1/CTAOne"

export default function Home() {
    return (
        <>
            <Layout headerStyle={0} footerStyle={2}>
                <Banner />
                <ScheduleOne />
                <BlogOne />
                <CTAOne />
                <ServicesOne />
                <Sifa />
                <Brand />
                <Karma />
            </Layout>
        </>
    )
}