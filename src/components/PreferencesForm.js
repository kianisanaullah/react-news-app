// PreferencesForm.js
import React, { useState } from 'react';
import { saveUserPreferences } from './../store/actions/preferencesActions';

const PreferencesForm = () => {
    const [selectedPreferences, setSelectedPreferences] = useState({
        sources: [],
        categories: [],
        authors: [],
    });

    const handleCheckboxChange = (category, value) => {
        setSelectedPreferences((prevPreferences) => ({
            ...prevPreferences,
            [category]: value
                ? [...prevPreferences[category], value]
                : prevPreferences[category].filter((item) => item !== value),
        }));
    };

    const handleSavePreferences = async () => {
        try {
            // Dispatch the saveUserPreferences action
            await saveUserPreferences(selectedPreferences);
            console.log('Preferences saved successfully');
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    };

    return (
        <div className="preferences-form">
            <h3>Choose Your Preferences</h3>
            <div className="checkbox-group">
                <label>
                    Sources:
                    <input
                        type="checkbox"
                        value="source1"
                        onChange={(e) => handleCheckboxChange('sources', e.target.value)}
                    />
                    Source 1
                    <input
                        type="checkbox"
                        value="source2"
                        onChange={(e) => handleCheckboxChange('sources', e.target.value)}
                    />
                    Source 2
                    {/* Add more source checkboxes as needed */}
                </label>
            </div>
            <div className="checkbox-group">
                <label>
                    Categories:
                    <input
                        type="checkbox"
                        value="category1"
                        onChange={(e) => handleCheckboxChange('categories', e.target.value)}
                    />
                    Category 1
                    <input
                        type="checkbox"
                        value="category2"
                        onChange={(e) => handleCheckboxChange('categories', e.target.value)}
                    />
                    Category 2
                    {/* Add more category checkboxes as needed */}
                </label>
            </div>
            <div className="checkbox-group">
                <label>
                    Authors:
                    <input
                        type="checkbox"
                        value="author1"
                        onChange={(e) => handleCheckboxChange('authors', e.target.value)}
                    />
                    Author 1
                    <input
                        type="checkbox"
                        value="author2"
                        onChange={(e) => handleCheckboxChange('authors', e.target.value)}
                    />
                    Author 2
                    {/* Add more author checkboxes as needed */}
                </label>
            </div>
            <button className="save-button" onClick={handleSavePreferences}>
                Save Preferences
            </button>
        </div>
    );
};

export default PreferencesForm;
