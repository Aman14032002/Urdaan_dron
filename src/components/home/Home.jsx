import { motion } from 'framer-motion'
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {
    const options_x = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 }
    }
    const options_y = {
        initial: { y: "-100%", opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: { delay: 0.4 }
    }
    return <>
        <section className='home'>
            <div>
                <motion.h1 {...options_x}>Urdaan - Dronza</motion.h1>
                <motion.p {...options_x} transition={{ delay: 0.2 }}>Fly High though the Sky</motion.p>
            </div>

            <motion.a href="#menu" {...options_y}>Explore Products</motion.a>
        </section>
        <Founder />
        <Menu />
    </>
}

export default Home