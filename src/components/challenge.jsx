import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import challengeServices from '../services/challengeServices';
import styles from './styles/challengeStyles';

const HEADER_IMAGE =
  'https://seeklogo.com/images/N/nba-logo-41668C66DB-seeklogo.com.png';
const ITEM_IMAGE = 'https://logo-logos.com/2017/11/nba-logo.png';
const Challenge = () => {
  const [playerList, setplayerList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  let onEndReachedCalledDuringMomentum = null;

  useEffect(() => {
    if (totalCount != playerList.length) fetchPlayerList(pageIndex);

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [pageIndex]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const fetchPlayerList = (pageIndex) => {
    setLoading(true);
    challengeServices
      .getPlayersList(pageIndex)
      .then((res) => {
        setplayerList([...playerList, ...res.data]);
        setTotalCount(res.meta?.total_count);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.flatlistRow}>
        <View style={styles.left}>
          <Text style={styles.text} numberOfLines={2}>
            {item.first_name} {item.last_name}
          </Text>
        </View>
        <Image
          source={{ uri: ITEM_IMAGE }}
          style={{ width: 70, height: 70 }}
          resizeMode="stretch"
        />
        <View style={[styles.right, { alignItems: 'flex-end' }]}>
          <Text style={styles.text} numberOfLines={2}>
            {item.team?.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[styles.container, { marginHorizontal: isMobile ? '5%' : '30%' }]}
    >
      <Image
        source={{ uri: HEADER_IMAGE }}
        style={{ width: '100%', height: 120 }}
        resizeMode="contain"
      />
      <Text style={{ alignSelf: 'flex-end' }}>
        {playerList.length} out of {totalCount || 0} players is loaded.
      </Text>
      {loading && pageIndex == 1 ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={playerList}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatList}
          onEndReached={() => {
            if (!onEndReachedCalledDuringMomentum) {
              setPageIndex(pageIndex + 1);
              onEndReachedCalledDuringMomentum = true;
            }
          }}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum = false;
          }}
          ListFooterComponent={
            loading && (
              <ActivityIndicator size="large" style={{ marginVertical: 30 }} />
            )
          }
        />
      )}
    </View>
  );
};

export default Challenge;
