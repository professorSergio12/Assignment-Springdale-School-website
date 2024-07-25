import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Table } from 'react-bootstrap';
import '../css/admission.css';

function Admissions() {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadSuccess(false); // Reset upload success on new file selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      // Simulate file upload
      setTimeout(() => {
        setUploadSuccess(true);
      }, 1000); // Simulate a delay
    } else {
      alert('Please select a file to upload');
    }
  };

  return (
    <div className="admissions-section">
      <Container className="admissions-container">
        <Row className="mb-4">
          <Col>
            <h1 className="admissions-title">Admissions</h1>
            <p className="admissions-description">
              <b>"Join us at Springdale Public School, where every student’s potential is nurtured to its fullest. Discover a vibrant learning environment that fosters growth, excellence, and a lifelong passion for learning."</b>
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2>Admission Process and Criteria</h2>
            <p>Our admission process is designed to be comprehensive and transparent, ensuring that all applicants are evaluated fairly. To begin, applicants must download and complete the admission form, which can be accessed on our website. The completed form, along with any required supporting documents, should be submitted by the application deadline. Our admission criteria include a review of academic performance, relevant qualifications, and any additional requirements specified for each program. Shortlisted candidates will be invited for an interview, where they will have the opportunity to further demonstrate their suitability for the program. Important dates, including application start and end dates, entrance test, and announcement of results, are provided to help candidates stay on track. We are committed to a smooth and efficient admissions process and are here to assist you at every step.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2>Downloadable Admission Forms</h2>
            <p>Click the link below to download the admission form:</p>
            <a href="/path/to/admission-form.pdf" download style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
              Admission Form
            </a>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2>Upload Completed Admission Forms</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select completed admission form to upload:</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              <Button className='button' variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {uploadSuccess && (
              <Alert variant="success" className="mt-3">
                File uploaded successfully!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>

      {/* Separate container for the important dates */}
      <Container className="important-dates-container mb-4">
        <Row className="mb-2">
          <Col>
            <h2>Important Dates and Deadlines</h2>
            <Table striped bordered hover responsive className="important-dates-table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application Start Date</td>
                  <td>March 1st</td>
                </tr>
                <tr>
                  <td>Application Deadline</td>
                  <td>March 31st</td>
                </tr>
                <tr>
                  <td>Entrance Test</td>
                  <td>April 15th</td>
                </tr>
                <tr>
                  <td>Announcement of Results</td>
                  <td>April 30th</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Admissions;
