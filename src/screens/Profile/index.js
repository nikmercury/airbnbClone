import React from "react";
import {Pressable, View, Text} from 'react-native';
import {Auth} from 'aws-amplify';


const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }

    return(
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Pressable onPress={logout} style={{width:'100%', height: 40, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;
