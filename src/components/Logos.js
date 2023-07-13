import canva from '../assets/canva.png'
import upWork from '../assets/upwork.png'
import RBS from '../assets/RBS.png'
import warner from '../assets/warner.png'
import woo from '../assets/woo.png'

function Logos () {
    return(
        <>
            <div class="mt-14 ms-10 me-10 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-around">

                <div class="flex">
                    <img src={upWork} alt="canva" class="h-10 w-10"/>
                    <p class="text-xs mt-3 ms-2">Upwork</p>
                </div>

                <div class="flex ">
                    <img src={warner} alt="WarnerBros" class="h-10 w-10"/>
                    <p class="text-xs mt-3 ms-2">WarnerBros</p>
                </div>

                <div class="flex">
                    <img src={woo} alt="woo" class="h-10 w-10"/>
                    <p class="text-xs mt-3 ms-2">Woo come</p>
                </div>
                
                <div class="flex">
                    <img src={canva} alt="Canva" class="h-10 w-10"/>
                    <p class="text-xs mt-3 ms-2">Canva</p>
                </div>

                <div class="flex">
                    <img src={RBS} alt="RBS" class="h-10 w-10"/>
                    <p class="text-xs mt-3 ms-2">RBS</p>
                </div>

            </div>

            <hr class="border-1 border-gray-100 mt-14" />
        </>
    )
}

export default Logos;