import React, { useState } from 'react';
import axios from 'axios';

const UserPreferences = () => {
    const [preferences, setPreferences] = useState({
        darkMode: false,
        receiveNotifications: true,
    });

    const updatePreferences = async () => {
        try {
            await axios.post('/api/update-preferences', { preferences });
            console.log('Preferences updated successfully');
        } catch (error) {
            console.error('Error updating preferences:', error);
        }
    };

    return (
        <div className="preferences-container">
            <h2>User Preferences</h2>
            <div className="preference-item">
                <label htmlFor="darkMode">Dark Mode:</label>
                <input
                    type="checkbox"
                    id="darkMode"
                    checked={preferences.darkMode}
                    onChange={(e) => setPreferences({ ...preferences, darkMode: e.target.checked })}
                />
            </div>
            <div className="preference-item">
                <label htmlFor="receiveNotifications">Receive Notifications:</label>
                <input
                    type="checkbox"
                    id="receiveNotifications"
                    checked={preferences.receiveNotifications}
                    onChange={(e) => setPreferences({ ...preferences, receiveNotifications: e.target.checked })}
                />
            </div>
            <button onClick={updatePreferences}>Save Preferences</button>
        </div>
    );
};

export default UserPreferences;
