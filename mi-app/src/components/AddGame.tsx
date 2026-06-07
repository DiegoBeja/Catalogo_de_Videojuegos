import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type Props = {
  show: boolean;
  onClose: () => void;
  onAddGame: (game: { title: string; image: string }) => void;
};

function AddGame({ show, onClose, onAddGame }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (!show) {
      setTitle("");
      setImage("");
      setValidated(false);
    }
  }, [show]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !image.trim()) {
      setValidated(true);
      return;
    }

    onAddGame({ title: title.trim(), image: image.trim() });
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Agregar juego</Modal.Title>
      </Modal.Header>

      <Form noValidate onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="gameTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the game"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={validated && !title.trim()}
            />
            <Form.Control.Feedback type="invalid">
              El título es requerido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="gameImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={handleImageChange}
              isInvalid={validated && !image.trim()}
            />
            <Form.Control.Feedback type="invalid">
              La URL de la imagen es requerida.
            </Form.Control.Feedback>
          </Form.Group>

          {image.trim() ? (
            <div style={{ textAlign: "center" }}>
              <img
                src={image}
                alt="preview"
                style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 8 }}
              />
            </div>
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddGame;
