import React from 'react';
import { Text, View } from 'react-native';
import { Container } from '../../components';
import { Button, Card } from 'react-native-paper';
import SkeletonContent from 'react-native-skeleton-content';

const Avatar = ({ size }) => (
  <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: 'gray' }} />
);

export const Dashboard = ({ navigation }): React.ReactElement => {
  return (
    <Container>
      <Card elevation={0}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar {...props} />}
        />
        {/* <Card.Content>
          <Text>Card title</Text>
          <Text>Card content</Text>
        </Card.Content> */}

        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Container>
  );
};
