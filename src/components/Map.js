import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Alert } from 'react-native';
import { useStateValue } from "../StateContextProvider";

const Map = () => {
    const [{ latitude, longitude }, dispatch] = useStateValue();

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log('location:')
                console.log(position)
                dispatch({
                    type: "fetchUserLocation",
                    payload: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: '100%',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Map;