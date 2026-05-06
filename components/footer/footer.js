import style from './footer.module.scss'
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { CgScreen } from "react-icons/cg";

// commenting out Iframe to keep from calling API

export default function Footer(){
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.info}>
          <h3>Get in Touch</h3>
          <a href="https://www.google.com/maps?q=Pasadena,CA">
            <MdLocationPin />
            <span>123 Care Lane, Suite 100, Pasadena, CA 91101</span>
          </a>
          <a href="./appointment">
            <CgScreen />
            <span>Offering online services for California residents.</span>
          </a>
          <a href="tel:555-555-5555">
            <BsFillTelephoneFill />
            <span>(555) 555-5555</span>
          </a>
          <a href="mailto:info@example.com">
            <MdEmail />
            <span>info@example.com</span>
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram />
            <span>Follow on Instagram</span>
          </a>
        </div>
        <div className={style.map}>
          <iframe
            title="google map directions"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52824.71761884483!2d-118.18182281858004!3d34.15132579133486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c3bf0f666f49%3A0x86134b92b67fa94e!2sPasadena%2C%20CA!5e0!3m2!1sen!2sus!4v1654470339892!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={style.bottom}>
        <p>&copy; {new Date().getFullYear()} Grace Relationship Counseling. All rights reserved.</p>
      </div>
    </footer>
  );
}