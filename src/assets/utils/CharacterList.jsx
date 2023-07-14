import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImage } from 'mdbreact';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Container>
            <Row className="card-grid">
                {characters.map(character => (
                    <Col key={character.id} className="mb-4">
                        <Card className="h-100">
                            <CardImage className="card-img-top" src={character.image} alt={character.name} />
                            <CardBody>
                                <CardTitle>Nombre: {character.name}</CardTitle>
                                <CardText>Especie: {character.species}</CardText>
                                <CardText>Estado: {character.status}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CharacterList;
