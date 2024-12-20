import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserReg() {
  const [persons, setPersons] = useState([]); // State for storing persons
  const [newPerson, setNewPerson] = useState({
    name: "",
    age: "",
    gender: "",
    disability_type: "",
    disability_severity: "",
    contact_number: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
    address: "",
    medical_conditions: []
  });

  const [newResource, setNewResource] = useState({
    name: "",
    description: ""
  });
  const [resources, setResources] = useState([]);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [personDetails, setPersonDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility


  // Person crud operations start here
  // Fetch all persons when the component mounts
  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    axios.get('https://phase-3-project-backend.onrender.com/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error("Error fetching persons:", error);
      });
  };

  const fetchResources = (personId) => {
    axios.get(`https://phase-3-project-backend.onrender.com/persons/${personId}/resources`)
      .then(response => {
        setResources(response.data);
      })
      .catch(error => {
        console.error("Error fetching resources:", error);
      });
  };

  const fetchPersonDetails = (personId) => {
    axios.get(`https://phase-3-project-backend.onrender.com/persons/${personId}`)
      .then(response => {
        setPersonDetails(response.data);  // Store the person's details in state
        setIsModalOpen(true); // Open the modal after fetching the details
      })
      .catch(error => {
        console.error("Error fetching person details:", error);
      });
  };

  const addPerson = () => {
    axios.post('https://phase-3-project-backend.onrender.com/persons', newPerson)
      .then(() => {
        fetchPersons(); // Refresh the list after adding
        setNewPerson({
          name: "",
          age: "",
          gender: "",
          disability_type: "",
          disability_severity: "",
          contact_number: "",
          emergency_contact_name: "",
          emergency_contact_number: "",
          address: "",
          medical_conditions: []
        });
      })
      .catch(error => {
        console.error("Error adding person:", error);
      });
  };

  const deletePerson = (personId) => {
    axios.delete(`https://phase-3-project-backend.onrender.com/persons/${personId}`)
      .then(() => {
        fetchPersons(); // Refresh the list after deletion
      })
      .catch(error => {
        console.error("Error deleting person:", error);
      });
  };

  const updatePerson = (personId) => {
    const updatedPerson = {
      name: prompt("Enter new name:"),
      age: parseInt(prompt("Enter new age:"), 10), // Ensure age is a number
      gender: prompt("Enter new gender:"),
      disability_type: prompt("Enter new disability type:"),
      disability_severity: prompt("Enter new disability severity:"),
      contact_number: prompt("Enter new contact number:"),
      emergency_contact_name: prompt("Enter new emergency contact name:"),
      emergency_contact_number: prompt("Enter new emergency contact number:"),
      address: prompt("Enter new address:"),
      medical_conditions: prompt("Enter new medical conditions (comma-separated):").split(',').map(item => item.trim())
    };
  
    axios.put(`https://phase-3-project-backend.onrender.com/persons/${personId}`, updatedPerson)
      .then(() => {
        fetchPersons(); // Refresh the list after updating
      })
      .catch(error => {
        console.error("Error updating person:", error.response?.data || error);
      });
  };
  

  // Person crud operations end here


  // Resource CRUD operations start here
  const addResource = () => {
    if (selectedPersonId) {
      axios.post(`https://phase-3-project-backend.onrender.com/persons/${selectedPersonId}/resources`, newResource)
        .then(() => {
          fetchResources(selectedPersonId); // Refresh the list after adding
          setNewResource({ name: "", description: "" });
        })
        .catch(error => {
          console.error("Error adding resource:", error);
        });
    }
  };

  const updateResource = (resourceId) => {
    const updatedResource = {
      name: prompt("Enter new name for the resource:"),
      description: prompt("Enter new description for the resource:")
    };

    axios.put(`https://phase-3-project-backend.onrender.com/resources/${resourceId}`, updatedResource)
      .then(() => {
        fetchResources(selectedPersonId); // Refresh the list after updating
      })
      .catch(error => {
        console.error("Error updating resource:", error);
      });
  };

  const deleteResource = (resourceId) => {
    axios.delete(`https://phase-3-project-backend.onrender.com/resources/${resourceId}`)
      .then(() => {
        fetchResources(selectedPersonId); // Refresh the list after deletion
      })
      .catch(error => {
        console.error("Error deleting resource:", error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPersonDetails(null); // Clear person details when closing the modal
  };

  // Resource CRUD operations end here

  return (
    <div className="App">
      <div className="form-container">
        <h2>Add a New Person</h2>
        {/* Form for adding a new person */}
        <input
          type="text"
          placeholder="Name"
          value={newPerson.name}
          onChange={e => setNewPerson({ ...newPerson, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newPerson.age}
          onChange={e => setNewPerson({ ...newPerson, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gender"
          value={newPerson.gender}
          onChange={e => setNewPerson({ ...newPerson, gender: e.target.value })}
        />
        <input
          type="text"
          placeholder="Disability Type"
          value={newPerson.disability_type}
          onChange={e => setNewPerson({ ...newPerson, disability_type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Disability Severity"
          value={newPerson.disability_severity}
          onChange={e => setNewPerson({ ...newPerson, disability_severity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newPerson.contact_number}
          onChange={e => setNewPerson({ ...newPerson, contact_number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Emergency Contact Name"
          value={newPerson.emergency_contact_name}
          onChange={e => setNewPerson({ ...newPerson, emergency_contact_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Emergency Contact Number"
          value={newPerson.emergency_contact_number}
          onChange={e => setNewPerson({ ...newPerson, emergency_contact_number: e.target.value })}
        />
        <textarea
          placeholder="Address"
          value={newPerson.address}
          onChange={e => setNewPerson({ ...newPerson, address: e.target.value })}
        />
        <textarea
          placeholder="Medical Conditions (comma-separated)"
          value={newPerson.medical_conditions.join(", ")}
          onChange={e => setNewPerson({
            ...newPerson,
            medical_conditions: e.target.value.split(",").map(item => item.trim())
          })}
        />
        <button onClick={addPerson}>Add Person</button>
      </div>

      <div className="list-container">
        <h2>Registered Persons</h2>
        {persons.map(person => (
          <div key={person.id} className="person-card">
            <h3>{person.name}</h3>
            <button onClick={() => {
              setSelectedPersonId(person.id);
              fetchResources(person.id);
              fetchPersonDetails(person.id); // Fetch full details of the person
            }}>View Resources & Details</button>
            <button onClick={() => updatePerson(person.id)}>Update</button>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Modal to show person details and resources */}
      {isModalOpen && personDetails && (
        <div className="modal">
          <div className="modal-content">
            <h3>Person Details</h3>
            <p>Name: {personDetails.name}</p>
            <p>Age: {personDetails.age}</p>
            <p>Gender: {personDetails.gender}</p>
            <p>Disability Type: {personDetails.disability_type}</p>
            <p>Disability Severity: {personDetails.disability_severity}</p>
            <p>Contact Number: {personDetails.contact_number}</p>
            <p>Emergency Contact: {personDetails.emergency_contact_name} ({personDetails.emergency_contact_number})</p>
            <p>Address: {personDetails.address}</p>
            <p>Medical Conditions: {personDetails.medical_conditions.join(", ")}</p>

            <h4>Resources</h4>
            <div className="resource-form">
              <input
                type="text"
                placeholder="Resource Name"
                value={newResource.name}
                onChange={e => setNewResource({ ...newResource, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Resource Description"
                value={newResource.description}
                onChange={e => setNewResource({ ...newResource, description: e.target.value })}
              />
              <button onClick={addResource}>Add Resource</button>
            </div>

            <div className="resources-list">
              {resources.map(resource => (
                <div key={resource.id} className="resource-card">
                  <p>Name: {resource.name}</p>
                  <p>Description: {resource.description}</p>
                  <button onClick={() => updateResource(resource.id)}>Update</button>
                  <button onClick={() => deleteResource(resource.id)}>Delete</button>
                </div>
              ))}
            </div>

            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserReg;
