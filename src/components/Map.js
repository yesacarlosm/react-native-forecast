import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useStateValue } from "../StateContextProvider";

const Map = (props) => {
    const [{ latitude, longitude }, dispatch] = useStateValue();

    const handleMapFinished = () => {
        if (props.setLoadedMap) props.setLoadedMap(true);
    }

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                dispatch({
                    type: "fetchUserLocation",
                    payload: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                });
                handleMapFinished();
            },
            error => {
                handleMapFinished();
            },
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
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: '10%'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 6
    },
});

export default Map;