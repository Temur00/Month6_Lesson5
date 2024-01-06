import React, { Component } from "react";

// class StudentsList extends Component {
//   render() {
//     return (
//       <div>
//         <h1>StudentsList</h1>
//       </div>
//     );
//   }
// }

class StudentsList extends Component {
  render() {
    return (
      <>
        {/* ADD */}
        <div
          className="modal fade"
          id="addModal"
          tabIndex={1}
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addModalLabel">
                  🧑‍🎓 👩‍🎓Adding Student !
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label className="form-label">Firstname</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Lastname</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="mb-2">
                  <label for="group" className="form-label">
                    Select your country
                  </label>
                  <select
                    name="group"
                    id="group"
                    className="form-select d-block w-40"
                  >
                    <option value="Select your country">
                      Select your country
                    </option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Canada">Canada</option>
                    <option value="Finland">Finland</option>
                    <option value="UK">UK</option>
                    <option value="North Korea">North Korea</option>
                  </select>
                </div> */}
                  <div className="mb-2 d-flex">
                    <div className="d-block w-100 g-2">
                      <label>Date of Birth</label>
                      <input
                        id="dateOfBirth"
                        type="date"
                        className="form-control birtDate w-75 mt-1 p-1"
                      />
                    </div>
                    {/* <div className="d-block w-100 g-2">
                    <label for="typeOfJob">Type of job</label>
                    <select
                      name="typeOfJob"
                      id="typeOfJob"
                      className="form-select m-group d-block w-100 mt-1 p-1"
                    >
                      <option value="UX/UI Designer">UX/UI Designer</option>
                      <option value="Front-end Developer">
                        Front-end Developer
                      </option>
                      <option value="Back-end Developer">
                        Back-end Developer
                      </option>
                      <option value="Security Analyst">Security Analyst</option>
                      <option value="Full-stack Developer">
                        Full-stack Developer
                      </option>
                      <option value="Game Developer">Game Developer</option>
                    </select>
                  </div> */}
                    <div className="d-block w-100 g-2">
                      <label>Select a group</label>
                      <select
                        name="filter"
                        id="filter"
                        className="form-select d-block w-100 mt-1 p-1"
                      >
                        <option value="Junior">React 32</option>
                        <option value="Middle">React 15</option>
                        <option value="Senior">React 45</option>
                        <option value="Senior">React 8</option>
                      </select>
                    </div>
                  </div>

                  {/* <div className="mb-2 d-flex">
                </div> */}

                  <div className="mb-2 mt-4 g-2 d-flex">
                    <input
                      type="checkbox"
                      name="isMarried"
                      id="isMarried"
                      className="form-check-input"
                    />
                    <label className="form-check-label px-2">
                      Is he/she married ?
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-primary"
                  id="btn-add-student"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* EDIT */}
        <div
          className="modal fade"
          id="editModal"
          tabIndex={1}
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editModalLabel">
                  Edit Student details
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label className="form-label">Firstname</label>
                    <input
                      type="text"
                      id="firstNameEdit"
                      name="firstNameEdit"
                      className="form-control p-2"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Lastname</label>
                    <input
                      type="text"
                      id="lastNameEdit"
                      name="lastNameEdit"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Select your country</label>
                    <select
                      name="groupEdit"
                      id="groupEdit"
                      className="form-select d-block w-40"
                    >
                      <option value="Select your country">
                        Select your country
                      </option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Germany">Germany</option>
                      <option value="USA">USA</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Canada">Canada</option>
                      <option value="Finland">Finland</option>
                      <option value="UK">UK</option>
                      <option value="North Korea">North Korea</option>
                    </select>
                  </div>
                  <div className="mb-2 d-flex">
                    <div className="d-block w-100 g-2">
                      <label>Date of Birth</label>
                      <input
                        id="dateOfBirthEdit"
                        type="date"
                        className="form-control birtDate w-75 mt-1 p-1"
                      />
                    </div>
                    <div className="d-block w-100 g-2">
                      <label>Type of job</label>
                      <select
                        name="typeOfJobEdit"
                        id="typeOfJobEdit"
                        className="form-select m-group d-block w-100 mt-1 p-1"
                      >
                        <option value="UX/UI Designer">UX/UI Designer</option>
                        <option value="Front-end Developer">
                          Front-end Developer
                        </option>
                        <option value="Back-end Developer">
                          Back-end Developer
                        </option>
                        <option value="Security Analyst">
                          Security Analyst
                        </option>
                        <option value="Full-stack Developer">
                          Full-stack Developer
                        </option>
                        <option value="Game Developer">Game Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-2 d-flex">
                    <div className="d-block w-100 g-2">
                      <label>Salary ($)</label>
                      <input
                        type="number"
                        className="form-control w-75 mt-1 d-block p-1"
                        id="salaryEdit"
                      />
                    </div>

                    <div className="d-block w-100 g-2">
                      <label>Select a level</label>
                      <select
                        name="filterLevelEdit"
                        id="filterLevelEdit"
                        className="form-select d-block w-100 mt-1 p-1"
                      >
                        <option value="Junior">Junior</option>
                        <option value="Middle">Middle</option>
                        <option value="Senior">Senior</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-2 g-2 d-flex">
                    <input
                      type="checkbox"
                      name="isMarriedEdit"
                      id="isMarriedEdit"
                      className="form-check-input"
                    />
                    <label className="form-check-label px-2">
                      Is he/she married ?
                    </label>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-primary"
                  id="btn-edit-student"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="container">
          <div className="row">
            <div className="col col-9 py-3 ">
              <input
                type="text"
                id="search"
                name="search"
                className="form-control p-2"
                placeholder="Searching"
              />
            </div>
            <div className="col col-3 d-flex gap-2 py-3">
              <select
                name="filter-select"
                id="filter-select"
                className="form-select  d-block w-40"
              >
                <option value="Select a level">Select a group</option>
                <option value="Junior">React 32</option>
                <option value="Middle">React 15</option>
                <option value="Senior">React 45</option>
                <option value="Senior">React 8</option>
              </select>
              <button
                className="btn  d-block w-75 text-success border-success "
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                Add
              </button>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Date of birth</th>
                  <th>Group</th>
                  <th>Does he/she work ?</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="students-list">
                <tr>
                  <td>1</td>
                  <td>Linus</td>
                  <td>Torvalds</td>
                  <td>2000-02-29</td>
                  <td>Frontend N32</td>
                  <td>Yes</td>
                  <td className="d-flex g-2">
                    <button className="btn bg-primary btn-md text-light">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-md">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default StudentsList;

// 1:15:11
