import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '../ui/Header'
import { Container } from '@mui/material'

interface MainLayoutProps {
    children: ReactNode
    title?: string
}

const MainLayout = ({ children, title = 'Amazon Defecto' }: MainLayoutProps) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <Container>
                {children}
            </Container>
            {/* TODO: add footer */}
            {/* <Footer /> */}
        </div>
    )
}

export default MainLayout

