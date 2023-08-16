import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {

    return (
      <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src='/images/site/max.png'
                alt='image'
                width={300}
                height={300}
            />
        </div>
        <h1>Name</h1>
        <p>Desc</p>
      </section>
    )
  };
  
  export default Hero;