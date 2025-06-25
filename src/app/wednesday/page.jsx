import styles from './wednesday.module.css';
import Image from 'next/image';
import Image1 from '../../../public/Image1.jpg'
//if we need to use any images form external sources we need to add that doamin in next.config.mjs

const wednesday = () => {
  return (
    <div>
    <h1 className={styles.apple}> Today is wednesday</h1>
    <img src='Image1.jpg' height={500}  width={500}/>
    <hr/>
    <Image
      src={Image1}
      height={500}
      width={500}
      alt="Centered"
    />
    <hr/>
    <Image src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=2048x2048&w=is&k=20&c=KTpY1O4d7-EuX-R_GR_44Upc-n9esJOZFpcqvA4CM0E="
      height={500}
      width={900}
      alt="colorfuleye"
    />
    </div>
  )
}

export default wednesday