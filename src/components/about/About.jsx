import { Link } from 'react-router-dom'
import { RiFindReplaceLine } from 'react-icons/ri'
import me from '../../assets/me.jpg'

const About = () => {
    return (
        <section className="about">
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>Urdaan- Dronza</h4>
                    <p>Urdaan Dronza: Elevating Urban Mobility with Next-Gen Drone Solutions.</p>
                    <p>Explore the various types of drones. Click below to see the products.</p>
                    <Link to='/'><RiFindReplaceLine /></Link>
                </article>

                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3></h3>
                        </div>

                        <p>I am Aman, and I am the fouder of fi$fly and Urdaan Dronza.</p>
                    </article>
                </div>
            </main>
        </section>
    )
}

export default About