import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteEducation } from '../../action/profile';

const Education = ({ education, deleteEducation }) => {

    //dealing with the experince variable created

    const educations = education.map(edu => (
        <tr key="edu._id">
            <td> {edu.school}</td>
            <td className="hide-sm"> {edu.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                    edu.to == null ? (' Now ') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <button onClick={() => deleteEducation(edu._id)} className='btn btn-danger'> Delete </button>
            </td>
        </tr>
    ));


    return (
        <Fragment>

            <h2 className="my-2"> Education Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    //nringing in the prop functions
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired

}

export default connect(null, { deleteEducation })(Education);