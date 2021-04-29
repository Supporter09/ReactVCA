import react from 'react';
import { 
    Image,
    Container,
    Row,
    Col,
    ProgressBar
} from 'react-bootstrap';
import '../assets/css/Progress.css'
function Progress (){
    return (
        <>
        <br/>
        <div>
        <ProgressBar striped variant="success" now={60} label={`Javascript`} className="progress_bar" />
        <ProgressBar striped variant="success" now={60}  label={`Python`} className="progress_bar"/>
        <ProgressBar striped variant="success" now={20} label={`c++`} className="progress_bar"/>
        <ProgressBar striped variant="success" now={80} label={`HTML & CSS`} className="progress_bar"/>
        </div>
        </>
    )
}

export default Progress