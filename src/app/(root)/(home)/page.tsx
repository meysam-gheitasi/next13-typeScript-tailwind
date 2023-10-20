"use client"

import Slider from "@/components/Slider"

//data moves for slider
import movie from '@/app/data/sliderMoviesData.json'

//data seryal irani
import seryalIran from '@/app/data/seryalIran.json'

//grid films
import Filmgroup from "@/components/Filmgroup"
import Link from "next/link"

function Home() {
    
    const apikey = process.env.API_URL
    const myId = 'tt15257160'
    const rest = apikey.replace('id', myId)

    const widowWidth = window.innerWidth

    return (
        <div>
            <main className="flex-center paddings mx-auto w-full max-w-7xl flex-col">
                <section className="nav-padding w-full">
                    <div className="relative w-full top-8 right-0">
                        <Slider movie={movie} count={widowWidth <= 768 ? 2 : 3} />
                    </div>
                    <div className="flex-center  flex-col relative min-h-[274px] pt-24">
                        <Filmgroup item={seryalIran} mode={1} title={"ایرانی های بروز"} />
                    </div>
                </section>
                <section className="nav-padding w-full">
                    <div className="flex-center  flex-col relative min-h-[274px]">
                        <Filmgroup item={seryalIran} mode={2} title={"فیلم های 2023"} />
                    </div>
                </section>
                <section className="nav-padding w-full">
                    <div className="flex-center  flex-col relative min-h-[274px]">
                        <Filmgroup item={seryalIran} mode={2} title={"سریال خارجی"} />
                    </div>
                </section>
                <section className="nav-padding w-full">
                    <div className="flex-center  flex-col relative min-h-[274px]">
                        <Filmgroup item={seryalIran} mode={2} title={"انیمیشن"} />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home