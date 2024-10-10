import {React, Component} from "react"; 
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp'

class Youtube extends Component {
    render() {
        return (
            <div>
            <p>Youtube Component</p>
            <hr></hr>

            <YouTubeComp 
                img="https://web.anindya.biz/static/media/anindya-logo-footer.a8e52fe6.png"
                time="7.27" 
                title="Biograpi Putin sang raja Rusia"
                desc="2.5jtx ditonton, 2 hari yang lalu"/>

            <YouTubeComp 
                img="https://ls.tribhakti.com/assets/images/tribhakti-banner-email.jpg"
                time="24.8" 
                title="Maruko Ingin Makan Melon"
                desc="201.720x ditonton, 2 bulan yang lalu"/>

            <YouTubeComp 
                img="https://www.geoservices.co.id/_next/image?url=%2Fassets%2Flogo2.png&w=640&q=75"
                time="9.45" 
                title="dinosaurus terbesar di dunia"
                desc="989.9292x ditonton, 5 jam yang lalu"/>

            <YouTubeComp 
                img="https://applse.consult-indonesia.com/public/assets/images/logo/logo-sm-n.jpg"
                time="46.12"
                title="Memasak bersama mami toko"
                desc="9292x ditonton, 5 bulan yang lalu"/>

            <YouTubeComp  
                img="https://applse.consult-indonesia.com/public/assets/images/logo/logo-sm-n.jpg"
                title="The most funny one piece"
                desc="6.6jt kali ditonton. 1 tahun yang lalu"/> 
        </div>
        )
    }
}

export default Youtube;