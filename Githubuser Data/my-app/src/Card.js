import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample(props) {
    return (
        <div className="bt_card_box text-center" >
            <Card style={{ width: '18rem' }} key={props.id}  >
                <Card.Img variant="top" src={props.img} stye={{ width: '200px' }} />
                <Card.Body>
                    <Card.Title> <h3>Name:</h3> </Card.Title>
                    <Card.Text>
                        <h3>{props.login}</h3>
                    </Card.Text>
                    <a href={props.url}>
                        <Button  variant="primary">Vier Profile</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;