import { motion } from 'framer-motion'
import founder from '../../assets/me.jpg'

const Founder = () => {
    const options = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 }
    }
    return <section className="founder">
        <motion.div {...options}>
            <img src={founder} alt="founder" height={200} width={200} />
            <h3>Aman</h3>
            <p><br />
               "Dronza: Elevating your aerial experience with innovative drones and accessories tailored to every skill level and adventure."
            </p>
        </motion.div>
    </section>
}

export default Founder