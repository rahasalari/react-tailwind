import im from '../assets/im.png'
import add from '../assets/add.png'


//styles
const styles = {
    fontSize : {
        fontSize: 9,
    },
}

const smallFont = {
    fontSize : {
        fontSize : 7,
    },
}

const font = {
    fontSize : {
        fontSize : 11,
    }
}



const AddTasks = () => {
    return (
        <>
        <div class='lg:flex lg:mt-20 lg:justify-around'>

            <div class='mt-20 lg:ms-20'>
                <div class="box-content relative h-60 w-96 p-4 ms-auto me-auto bg-gray-100 lg:ms-24">

                    <div class='flex'>
                        <div class="rounded-full h-24 w-24 bg-violet-700 absolute -left-3 -top-10"></div>
                        <div class="box-content h-5 w-32 p-4 bg-white shadow-sm pt-3 absolute -right-5 -top-3">
                            <p class='text-xs' style={styles.fontSize}>FACEBOOK ENGAGEMENT</p>
                            <p class='text-xs' style={styles.fontSize}>1230<span class='text-gray-400 ms-3'>INTERACTION</span></p>
                        </div>
                    </div>

                    <div class="box-content h-6 w-28 border-dashed p-4 border-2 mx-auto mt-20">
                        <div class='flex'>
                            <div class='pt-1' >
                                <img src={im} alt="icon" class="h-6 w-6"/>
                            </div>
                            <div class='ms-5'>
                                <p class='text-xs' style={styles.fontSize}>Drag & Drop</p>
                                <p class='text-xs' style={smallFont.fontSize}>or <span class='text-green-300' style={smallFont.fontSize}>brows for a file</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="box-content h-4 w-44 p-4 bg-white shadow-sm ms-auto mt-10 flex absolute -right-10 ">
                        <img src={add} alt="add icon" class="h-4 w-4"/>
                        <p class='ms-1' style={font.fontSize}>Add more <span class='font-medium' style={font.fontSize}>Tasks</span></p>
                    </div>
                </div>
            </div>

            <div class='lg:me-24 mt-16'>
                <p className='text-2xl text-center lg:text-left lg:mt-14'>
                    Have access to a robots
                </p>
                <p className='text-2xl text-center lg:text-left'>
                    email marketing tool.
                </p>
                <p class='text-xs text-gray-600 mt-8 text-center lg:text-left'>
                    If you're reading this, you already have access to
                </p>
                <p class='text-xs text-gray-600 text-center lg:text-left'>
                    a robots email marketing tool.
                </p>
                <div class='mt-8 text-center lg:text-left'>
                    <button class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs">
                    Learn More
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddTasks;