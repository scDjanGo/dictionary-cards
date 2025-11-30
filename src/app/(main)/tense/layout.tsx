


import Bread_Crump_Navbar from "@/components/navbar/Bread_Crump_Navbar"

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Bread_Crump_Navbar />
    {children}
    </>
  )
}
