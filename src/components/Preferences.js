// src/components/Preferences.js

import React, { useState } from 'react';
import axios from 'axios';

const Preferences = ({ savePreferences }) => {
    const [selectedPreferences, setSelectedPreferences] = useState({
        sources: [],
        categories: [],
        authors: [],
    });

    const handleSavePreferences = async () => {
        try {
            const response = await axios.post('/api/save-preferences', selectedPreferences);
            console.log(response.data.message);
            // Optionally, you can trigger a refetch of personalized news here
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    };

    return (
        <div>
            {/* UI for selecting preferences */}
            <button onClick={handleSavePreferences}>Save Preferences</button>
        </div>
    );
};

export default Preferences;
