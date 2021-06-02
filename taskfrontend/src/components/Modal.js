import React, { Component, component } from 'react'

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Label
} from 'reactstrap'


class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        }
    }

    // Check if the checkbox is checked or not
    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem })
    }

    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Task Item</ModalHeader>
                <ModalBody>
                    <form>
                        <FormGroup>
                            {/* Title */}
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter Task Title"
                            />
                        </FormGroup>

                        <FormGroup>
                            {/* Description */}
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter Task Description"
                            />
                        </FormGroup>

                        <FormGroup check>
                            {/* Completed */}
                            <Label for="completed">
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    value={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal