import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"SkyScout — Weather & things to do",description:"10-day weather forecasts, nearby sights and local events."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
