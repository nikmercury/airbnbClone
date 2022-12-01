import React, {useEffect, useState }from "react";
import { View, FlatList } from "react-native";
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from "../../graphql/queries";

 

const SearchResultsScreen = (props) => {

    const {guests} = props;

    const [todos, setTodos] = useState([]);

    
    useEffect(() => {
        const fetchTodos = async () => {
            try {

                const todosResult = await API.graphql(
                    graphqlOperation(listTodos, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )

            setTodos(todosResult.data.listTodos.items)
            }catch(e) {
                console.log(e);
            }
        }

        fetchTodos();
    }, [])

    return (
        <View>
            <FlatList
                data={todos}
                renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
};

export default SearchResultsScreen;
