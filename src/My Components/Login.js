import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'

function Login() {

    return (
        <>
            <div className="row my-5 m-0">

                <div className="text-center container col p-5 mt-5">
                    <div className="container">
                        <h3 className='p-2'><b><mark>Some Advantages to Signup</mark></b></h3>
                        <p className='p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur fugiat corrupti. Id delectus, nesciunt enim accusantium cumque est obcaecati labore tempora distinctio at recusandae, fuga incidunt rerum voluptates vero!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint mollitia unde quae eligendi minus eum, amet distinctio consectetur assumenda perferendis voluptates molestiae possimus molestias ullam obcaecati?
                        </p>
                    </div>
                </div>


                <div className='container p-5 col'>
                    <Form className='container border rounded bg-light p-5 m-1'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='me-2 border' variant="light" type="submit">
                            Sign In
                        </Button>
                        <Button variant="danger" type="submit">
                            Create your Account
                        </Button><br />
                        <div className="text-center w-100">
                            <GoogleButton type='light' className='rounded w-50 mt-5 text-center shadow-0' />
                        </div>
                    </Form>
                </div>

            </div>
        </>
    )
}

export default Login