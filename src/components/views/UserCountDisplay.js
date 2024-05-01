import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
/*import { getUserCount } from '../../components/util/views/SignupView';*/

const UserCountDisplay = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        // Fetch user count from backend after initial render
        fetchUserCount();
    }, []);

    const fetchUserCount = async () => {
        try {
            const count = await getUserCount(); // Fetch user count from backend API
            setUserCount(count);
        } catch (error) {
            console.error('Error fetching user count:', error);
        }
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                backgroundColor: '#f0f0f0',
                padding: '5px 10px',
                borderRadius: '5px',
            }}
        >
            Number of users: {userCount}
        </Box>
    );
};

export default UserCountDisplay;
