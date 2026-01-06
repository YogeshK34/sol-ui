"use client"
import React from 'react'
import {  useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const siteUrl = 'https://www.vengenceui.com'


const config = {
    logo: (
        <div className="flex items-center">
            <img src="/logo/bg-less.png" alt="Vengeance UI" width={55} height={55} className="rotate-180 dark:brightness-0 dark:invert" />
            <span className="font-extrabold text-xl tracking-tight hidden md:inline dark:text-white">Vengeance UI</span>
        </div>
    ),
    project: {
        link: 'https://github.com/Ashutoshx7/VengeanceUI',
    },
    chat: {
        link: 'https://discord.com',
    },
    docsRepositoryBase: 'https://github.com/Ashutoshx7/VengeanceUI/tree/main',
    sidebar: {
        defaultMenuCollapseLevel: 3,
        toggleButton: false,
    },
    navbar: {
        extraContent: (
            <div className="flex items-center gap-2  ">
                hi
            </div>
        )
    },
    themeSwitch: {
        component: null
    },
    navigation: {
        prev: true,
        next: true,
    },
    footer: {
        component: null,
    },
    // SEO Configuration
    head: function useHead() {
        const { asPath } = useRouter()
        // const { frontMatter, title } = useConfig()
        // const pageTitle = title ? `${title} – VengeanceUI` : 'VengeanceUI - Premium React Components'
        // const description = frontMatter.description || 'Beautiful, modern, and customizable React components. Build stunning interfaces with VengeanceUI - a premium component library for React and Next.js.'
        // const ogImage = `${siteUrl}/og-image.png`
        // const url = `${siteUrl}${asPath}`

        return (
            <>
                {/* Page Title */}
                <title>ABC</title>
            </>
        )
    },
}

export default config

