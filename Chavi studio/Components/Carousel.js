import Carousel from 'react-bootstrap/Carousel';
import '../Components/Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Images/Artboard 5.png'
import img2 from '../Images/Artboard 1 height.png'
import img3 from '../Images/Artboard 2.png'
import img4 from '../Images/Artboard 3.png'
import img5 from '../Images/Artboard 4.png'

function IndividualIntervalsExample() {
    return (<>
        <div className="crl_container" data-aos="fade-up">
            <h1 className='crl_h1'>Our services</h1>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    </>
    );
}

export default IndividualIntervalsExample;