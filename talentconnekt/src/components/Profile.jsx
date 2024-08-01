import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const ProfileForm = ({ profile, onSave }) => {
    const [formData, setFormData] = useState(profile || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = profile
                ? await axios.put(`/profiles/${profile.id}`, formData)
                : await axios.post("/profiles", formData);
            onSave(response.data);
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Phone Number:
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Date of Birth:
                <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Gender:
                <select
                    name="gender"
                    value={formData.gender || ""}
                    onChange={handleChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <label>
                Employee ID:
                <input
                    type="number"
                    name="employee_id"
                    value={formData.employee_id || ""}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Save Profile</button>
        </form>
    );
};

ProfileForm.propTypes = {
    profile: PropTypes.object,
    onSave: PropTypes.func.isRequired,
};

export default ProfileForm;
