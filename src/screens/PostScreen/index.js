import React from "react";
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute } from "@react-navigation/native";

import places from '../../../assets/data/feed';

const PostScreen = (props) => {
    const route = useRoute();

    const {post} = route.params
    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={post} />
        </View>
    );
};

export default PostScreen;