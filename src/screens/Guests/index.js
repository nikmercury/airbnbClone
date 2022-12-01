import React, {useState} from "react";
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles.js';

const GuestScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();

    return(
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: "bold"}}>Adults</Text>
                        <Text style={{color: 'lightgrey'}}>Age 13 or above</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0,adults - 1))}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 16,}}>{adults}</Text>

                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: "bold"}}>Childrens</Text>
                        <Text style={{color: 'lightgrey'}}>Age's 2 to 12</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setChildrens(Math.max(0,childrens - 1))}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 16,}}>{childrens}</Text>

                        <Pressable
                            onPress={() => setChildrens(childrens + 1)}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={{fontWeight: "bold"}}>Infants</Text>
                        <Text style={{color: 'lightgrey'}}>Under 2</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Pressable
                            onPress={() => setInfants(Math.max(0,infants - 1))}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
                        </Pressable>

                        <Text style={{marginHorizontal: 20, fontSize: 16,}}>{infants}</Text>

                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>


            <Pressable 
                onPress={() => 
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults',
                            params: {
                                screen: 'list',
                                params: {
                                    guests : adults + childrens,
                                }
                            }
                        }, 
                    })
                }
                style={{
                    marginBottom: 20,
                    backgroundColor: 'lightcoral',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold',}}>Search</Text> 
            </Pressable>      

        </View>
    )
}

export default GuestScreen;